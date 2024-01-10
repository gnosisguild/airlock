import { chains } from "@/lib/chains";
import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const chainRouter = Router();

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
    if (process.env.SEQUENCE_ACCESS_KEY === undefined) {
      console.warn(
        "SEQUENCE_ACCESS_KEY is not set. Sequence Indexer routes will be rate limited.",
      );
    }

    router.use(
      `/${chainId}/sequence`,
      createProxyMiddleware({
        target: chain.sequenceURL,
        changeOrigin: true,
        pathRewrite: {
          [`^/api/v1/${chainId}/sequence`]: "",
        },
        headers: {
          "X-Access-Key": process.env.SEQUENCE_ACCESS_KEY || "",
        },
      }),
    );
  }
};

generateChainRoutes(chainRouter);

export default chainRouter;
