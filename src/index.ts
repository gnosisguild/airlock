import { createClientsForChains } from "./lib/viem-client";
import createServer from "./server";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    const app = await createServer();

    createClientsForChains();

    app.listen(PORT, () => {
      console.log(`Express server listening on port ${PORT}`);
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
