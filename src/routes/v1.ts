import { chains } from "@/lib/chains";
import { Router, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import apicache from "apicache";
import simpleHash from "@/lib/simple-hash";

const chainRouter = Router();
const sequenceCache = apicache
  .options({
    statusCodes: { include: [200] },
    defaultDuration: "30 seconds",
    appendKey: (req: Request, res: Response) => simpleHash(req.body),
  })
  .middleware();

const generateChainRoutes = (router: Router) => {
  // Proxy Sequence Metadata requests
  router.use(
    "/metadata",
    createProxyMiddleware({
      target: "https://metadata.sequence.app",
      changeOrigin: true,
      pathRewrite: {
        "^/api/v1/metadata": "",
      },
    }),
  );

  // Some of our services have unique urls for each chain
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
      `/${chainId}/sequence/indexer`,
      sequenceCache,
      createProxyMiddleware({
        target: chain.sequenceURL,
        changeOrigin: true,
        pathRewrite: {
          [`^/api/v1/${chainId}/sequence/indexer`]: "",
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
