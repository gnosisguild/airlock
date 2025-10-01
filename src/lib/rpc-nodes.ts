import {
  mainnet,
  optimism,
  gnosis,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  sepolia,
  base,
  celo,
  polygonZkEvm,
  baseSepolia,
  mantle,
  sonic,
  berachain,
  unichain,
  bob,
  worldchain,
  linea,
  ink,
  blast,
  // flare,
} from "viem/chains";

export type RPCNode = {
  url: string;
  socketUrl: string;
};

export type RPCNodes = { [key: number]: RPCNode };

const DRPC_API_KEY = process.env.DRPC_API_KEY;
if (!DRPC_API_KEY) {
  throw new Error("DRPC_API_KEY is not set");
}

export const rpcNodes: RPCNodes = {
  [mainnet.id]: {
    url: `https://lb.drpc.org/ogrpc?network=ethereum&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=ethereum&dkey=${DRPC_API_KEY}`,
  },
  [arbitrum.id]: {
    url: `https://lb.drpc.org/ogrpc?network=arbitrum&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=arbitrum&dkey=${DRPC_API_KEY}`,
  },
  [avalanche.id]: {
    url: `https://lb.drpc.org/ogrpc?network=avalanche&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=avalanche&dkey=${DRPC_API_KEY}`,
  },
  [optimism.id]: {
    url: `https://lb.drpc.org/ogrpc?network=optimism&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=optimism&dkey=${DRPC_API_KEY}`,
  },
  [polygon.id]: {
    url: `https://lb.drpc.org/ogrpc?network=polygon&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=polygon&dkey=${DRPC_API_KEY}`,
  },
  [base.id]: {
    url: `https://lb.drpc.org/ogrpc?network=base&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=base&dkey=${DRPC_API_KEY}`,
  },
  [gnosis.id]: {
    url: `https://lb.drpc.org/ogrpc?network=gnosis&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=gnosis&dkey=${DRPC_API_KEY}`,
  },
  [sepolia.id]: {
    url: `https://lb.drpc.org/ogrpc?network=sepolia&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=sepolia&dkey=${DRPC_API_KEY}`,
  },
  [sonic.id]: {
    url: `https://lb.drpc.org/ogrpc?network=sonic&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=sonic&dkey=${DRPC_API_KEY}`,
  },
  [bsc.id]: {
    url: `https://lb.drpc.org/ogrpc?network=bsc&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=bsc&dkey=${DRPC_API_KEY}`,
  },
  [celo.id]: {
    url: `https://lb.drpc.org/ogrpc?network=celo&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=celo&dkey=${DRPC_API_KEY}`,
  },
  [berachain.id]: {
    url: `https://lb.drpc.org/ogrpc?network=berachain&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=berachain&dkey=${DRPC_API_KEY}`,
  },
  [mantle.id]: {
    url: `https://lb.drpc.org/ogrpc?network=mantle&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=mantle&dkey=${DRPC_API_KEY}`,
  },
  [polygonZkEvm.id]: {
    url: `https://lb.drpc.org/ogrpc?network=polygon-zkevm&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=polygon-zkevm&dkey=${DRPC_API_KEY}`,
  },
  [baseSepolia.id]: {
    url: `https://lb.drpc.org/ogrpc?network=base-sepolia&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=base-sepolia&dkey=${DRPC_API_KEY}`,
  },
  [bob.id]: {
    url: `https://lb.drpc.org/ogrpc?network=bob&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=bob&dkey=${DRPC_API_KEY}`,
  },
  [unichain.id]: {
    url: `https://lb.drpc.org/ogrpc?network=unichain&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=unichain&dkey=${DRPC_API_KEY}`,
  },
  [worldchain.id]: {
    url: `https://lb.drpc.org/ogrpc?network=worldchain&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=worldchain&dkey=${DRPC_API_KEY}`,
  },
  [linea.id]: {
    url: `https://lb.drpc.org/ogrpc?network=linea&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=linea&dkey=${DRPC_API_KEY}`,
  },
  [ink.id]: {
    url: `https://lb.drpc.org/ogrpc?network=ink&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=ink&dkey=${DRPC_API_KEY}`,
  },
  [blast.id]: {
    url: `https://lb.drpc.org/ogrpc?network=blast&dkey=${DRPC_API_KEY}`,
    socketUrl: `wss://lb.drpc.org/ogws?network=blast&dkey=${DRPC_API_KEY}`,
  },
};
