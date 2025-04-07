import {
  mainnet,
  arbitrum,
  avalanche,
  optimism,
  base,
  gnosis,
  sepolia,
  celo,
  sonic,
  berachain,
  polygon,
  mantle,
  polygonZkEvm,
  baseSepolia,
} from "viem/chains";

export type RPCNode = {
  username?: string;
  password?: string;
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
    username: process.env.MAINNET_RPC_USERNAME,
    password: process.env.MAINNET_RPC_PASSWORD,
    url: "https://ethereum-mainnet.core.chainstack.com",
    socketUrl: "wss://ethereum-mainnet.core.chainstack.com",
  },
  [arbitrum.id]: {
    username: process.env.ARBITRUM_RPC_USERNAME,
    password: process.env.ARBITRUM_RPC_PASSWORD,
    url: "https://arbitrum-mainnet.core.chainstack.com",
    socketUrl: "wss://arbitrum-mainnet.core.chainstack.com",
  },
  [avalanche.id]: {
    username: process.env.AVALANCHE_RPC_USERNAME,
    password: process.env.AVALANCHE_RPC_PASSWORD,
    url: "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc",
    socketUrl: "wss://avalanche-mainnet.core.chainstack.com/ext/bc/C/ws",
  },
  [optimism.id]: {
    username: process.env.OPTIMISM_RPC_USERNAME,
    password: process.env.OPTIMISM_RPC_PASSWORD,
    url: "https://nd-007-647-713.p2pify.com",
    socketUrl: "wss://ws-nd-007-647-713.p2pify.com",
  },
  [polygon.id]: {
    username: process.env.POLYGON_RPC_USERNAME,
    password: process.env.POLYGON_RPC_PASSWORD,
    url: "https://polygon-mainnet.core.chainstack.com",
    socketUrl: "wss://polygon-mainnet.core.chainstack.com",
  },
  [base.id]: {
    username: process.env.BASE_RPC_USERNAME,
    password: process.env.BASE_RPC_PASSWORD,
    url: "https://nd-092-619-550.p2pify.com",
    socketUrl: "wss://ws-nd-092-619-550.p2pify.com",
  },
  [gnosis.id]: {
    username: process.env.GNOSIS_RPC_USERNAME,
    password: process.env.GNOSIS_RPC_PASSWORD,
    url: "https://nd-696-263-600.p2pify.com",
    socketUrl: "wss://ws-nd-696-263-600.p2pify.com",
  },
  [sepolia.id]: {
    username: process.env.SEPOLIA_RPC_USERNAME,
    password: process.env.SEPOLIA_RPC_PASSWORD,
    url: "https://ethereum-sepolia.core.chainstack.com",
    socketUrl: "wss://ethereum-sepolia.core.chainstack.com",
  },
  [sonic.id]: {
    username: process.env.SONIC_RPC_USERNAME,
    password: process.env.SONIC_RPC_PASSWORD,
    url: "https://sonic-mainnet.core.chainstack.com",
    socketUrl: "wss://sonic-mainnet.core.chainstack.com",
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
};
