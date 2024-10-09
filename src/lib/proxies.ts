import { AirlockChain, ChainInfo, chains } from "@/lib/chains";
import { createProxyMiddleware } from "http-proxy-middleware";
import { toHex } from "viem";

const createRpcProxy = (chain: AirlockChain) =>
  createProxyMiddleware({
    target: chain.rpcNode.url,
    changeOrigin: true,
    pathRewrite: {
      [`^/api/v1/${chain.chain.id}/rpc`]: "",
    },
    auth: `${chain.rpcNode.username}:${chain.rpcNode.password}`,
  });

const createRpcWsProxy = (chain: AirlockChain) =>
  createProxyMiddleware({
    target: chain.rpcNode.socketUrl,
    changeOrigin: true,
    pathRewrite: {
      [`^/api/v1/${chain.chain.id}/rpc/ws`]: "",
    },
    auth: `${chain.rpcNode.username}:${chain.rpcNode.password}`,
    ws: true,
  });

const createMoralisProxy = (chain: AirlockChain) =>
  createProxyMiddleware({
    target: "https://deep-index.moralis.io/api/v2.2",
    changeOrigin: true,
    pathRewrite: (path, req) => {
      const [cleanedPath, params] = req.url.split("?");
      const searchParams = new URLSearchParams(params);
      const newPath = cleanedPath.replace(
        `/api/v1/${chain.chain.id}/moralis`,
        "",
      );
      const chainParams = new URLSearchParams(`chain=${toHex(chain.chain.id)}`);
      return newPath + `?${chainParams.toString()}&${searchParams.toString()}`;
    },
    headers: {
      "X-API-Key": process.env.MORALIS_API_KEY || "",
    },
  });

// add proxies to a AirlockChain object
export const createChainProxies = (chains: ChainInfo) => {
  for (const chainId in chains) {
    const chain = chains[chainId];

    chain.rpcProxy = createRpcProxy(chain);
    chain.rpcWsProxy = createRpcWsProxy(chain);
    chain.moralisProxy = createMoralisProxy(chain);
  }
};

export const subgraphProxy = createProxyMiddleware({
  target: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_STUDIO_API_KEY}/subgraphs/id/`,
  changeOrigin: true,
  pathRewrite: {
    [`^/api/v1/subgraph`]: "",
  },
});

export const ipfsProxy = createProxyMiddleware({
  target: process.env.PINATA_GATEWAY_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/api/v1/ipfs`]: "/ipfs",
  },
  headers: {
    "x-pinata-gateway-token": process.env.PINATA_GATEWAY_KEY || "",
  },
});
