import { ChainInfo } from "@/lib/chains";
import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import apicache from "apicache";
import { toHex } from "viem";
import { ipfsProxy, subgraphProxy } from "@/lib/proxies";

const moralisCache = apicache
  .options({
    defaultDuration: "5 minutes",
  })
  .middleware();

const createProxyRoutes = (router: Router, chains: ChainInfo) => {
  for (const chainId in chains) {
    const chain = chains[chainId];

    if (chain.rpcProxy) {
      router.use(`/${chainId}/rpc`, chain.rpcProxy);
    }

    if (chain.rpcWsProxy) {
      router.use(`/${chainId}/rpc/ws`, chain.rpcWsProxy);
    }

    // Create Sequence Indexer Proxy routes for each chain
    if (process.env.MORALIS_API_KEY === undefined) {
      console.warn(
        "MORALIS_API_KEY is not set. Sequence Indexer routes will be rate limited.",
      );
    }

    if (chain.moralisProxy) {
      router.use(`/${chainId}/moralis`, moralisCache, chain.moralisProxy);
    }
  }

  if (process.env.SUBGRAPH_STUDIO_API_KEY === undefined) {
    console.warn("SUBGRAPH_STUDIO_API_KEY is not set");
  }

  router.use("/subgraph", subgraphProxy);

  if (
    process.env.PINATA_GATEWAY_URL === undefined ||
    process.env.PINATA_GATEWAY_KEY === undefined
  ) {
    console.warn("PINATA env vars are not set");
  }

  router.use("/ipfs", ipfsProxy);
};

export default createProxyRoutes;
