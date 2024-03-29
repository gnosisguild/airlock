import express from "express";
import apicache from "apicache";

import { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import chainRouter from "./routes/v1";

const CORS_ORIGINS = [
  /gnosisguild\.org$/,
  /\.gnosisguild\.org$/,
  /.*-gnosis-guild\.vercel\.app$/,
  /mech\.mom$/,
  /localhost/,
];

const createServer = async (): Promise<express.Application> => {
  const app = express();

  // Custom error handler
  const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    console.error(err.message);
    switch (err.name) {
      case "UnauthorizedError":
        res.status(401).json({ error: err.message });
        break;

      default:
        console.log("SERVER ERROR: ", err);
        res.status(500).json({ error: err.message });
        break;
    }
  };

  // Default route
  function defaultRoute(req: Request, res: Response, next: NextFunction) {
    res.sendStatus(404);
  }

  app.use(morgan("dev"));
  app.use(
    cors({
      origin: function (origin, callback) {
        if (process.env.NODE_ENV === "development") return callback(null, true);
        if (origin && CORS_ORIGINS.some((r) => r.test(origin)))
          return callback(null, true);
        return callback(null, false);
      },
      credentials: true,
    }),
  );
  app.get("/health", (req, res) => res.sendStatus(200));
  app.get("/api/cache/performance", (req, res) => {
    res.json(apicache.getPerformance());
  });
  app.use("/api/v1/", chainRouter);
  app.use(defaultRoute);
  app.use(errorHandler);

  return app;
};

export default createServer;
