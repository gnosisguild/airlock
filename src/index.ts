import { chains as airlockChains } from "./lib/chains";
import { createChainProxies } from "./lib/proxies";
import { createClientsForChains } from "./lib/viem-client";
import createServer from "./server";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    const chains = { ...airlockChains };
    createChainProxies(chains);

    const app = await createServer(chains);

    await createClientsForChains();

    app.listen(PORT, () => {
      console.log(`Express server listening on port ${PORT}`);
    });

    // manually upgrade the websocket proxies
    const wsProxies = Object.values(chains).map((chain) => chain.rpcWsProxy);

    wsProxies.forEach((proxy) => {
      if (!proxy || !proxy.upgrade) return;
      app.on("upgrade", proxy.upgrade as any);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

start();

const shutdown = () => {
  console.log("Shutting down...");
  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
