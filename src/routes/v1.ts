import { chains } from "@/lib/chains";
import { Router, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import apicache from "apicache";
import simpleHash from "@/lib/simple-hash";
import { toHex } from "viem";

const chainRouter = Router();
const moralisCache = apicache
  .options({
    statusCodes: { include: [200] },
    defaultDuration: "30 seconds",
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
          const newPath = path.replace(`/api/v1/${chainId}/moralis`, "");
          return newPath + `?chain=${toHex(parseInt(chainId))}`;
        },
        headers: {
          "X-API-Key": process.env.MORALIS_API_KEY || "",
        },
      }),
    );
  }
};

generateChainRoutes(chainRouter);

export default chainRouter;
