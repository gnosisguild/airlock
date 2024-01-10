import { chains } from "@/lib/chains";
import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const chainRouter = Router();

const generateChainRoutes = (router: Router) => {
  for (const chainId in chains) {
    const chain = chains[chainId];
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
  }
};

generateChainRoutes(chainRouter);

export default chainRouter;
