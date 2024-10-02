import { chains } from "@/lib/chains";
import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import apicache from "apicache";
import { toHex } from "viem";

const chainRouter = Router();
const moralisCache = apicache
  .options({
    defaultDuration: "5 minutes",
  })
  .middleware();

const generateChainRoutes = (router: Router) => {
  for (const chainId in chains) {
    const chain = chains[chainId];

    // Create RPC Proxy routes for each chain
    router.use(
      `/${chainId}/rpc`,
      createProxyMiddleware({
        target: chain.rpcNode.url,
        changeOrigin: true,
        pathRewrite: {
          [`^/api/v1/${chainId}/rpc`]: "",
        },
        auth: `${chain.rpcNode.username}:${chain.rpcNode.password}`,
        ws: true,
      }),
    );

    // Create Sequence Indexer Proxy routes for each chain
    if (process.env.MORALIS_API_KEY === undefined) {
      console.warn(
        "MORALIS_API_KEY is not set. Sequence Indexer routes will be rate limited.",
      );
    }

    router.use(
      `/${chainId}/moralis`,
      moralisCache,
      createProxyMiddleware({
        target: "https://deep-index.moralis.io/api/v2.2",
        changeOrigin: true,
        pathRewrite: (path, req) => {
          const [cleanedPath, params] = req.url.split("?");
          const searchParams = new URLSearchParams(params);
          const newPath = cleanedPath.replace(`/api/v1/${chainId}/moralis`, "");
          const chainParams = new URLSearchParams(
            `chain=${toHex(parseInt(chainId))}`,
          );
          return (
            newPath + `?${chainParams.toString()}&${searchParams.toString()}`
          );
        },
        headers: {
          "X-API-Key": process.env.MORALIS_API_KEY || "",
        },
      }),
    );

    if (process.env.SUBGRAPH_STUDIO_API_KEY === undefined) {
      console.warn("SUBGRAPH_STUDIO_API_KEY is not set");
    }

    router.use(
      "/subgraph",
      createProxyMiddleware({
        target: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.SUBGRAPH_STUDIO_API_KEY}/subgraphs/id/`,
        changeOrigin: true,
        pathRewrite: {
          [`^/api/v1/subgraph`]: "",
        },
      }),
    );

    if (
      process.env.PINATA_GATEWAY_URL === undefined ||
      process.env.PINATA_GATEWAY_KEY === undefined
    ) {
      console.warn("PINATA env vars are not set");
    }

    router.use(
      "/ipfs",
      createProxyMiddleware({
        target: process.env.PINATA_GATEWAY_URL,
        changeOrigin: true,
        pathRewrite: {
          [`^/api/v1/ipfs`]: "/ipfs",
        },
        headers: {
          "x-pinata-gateway-token": process.env.PINATA_GATEWAY_KEY || "",
        },
      }),
    );
  }
};

generateChainRoutes(chainRouter);

export default chainRouter;
