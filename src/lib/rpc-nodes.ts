export type RPCNode = {
  username?: string;
  password?: string;
  url: string;
  socketUrl: string;
};

export type RPCNodes = {
  [key: number]: RPCNode;
};

export const rpcNodes: RPCNodes = {
  1: {
    //mainnet
    username: process.env.MAINNET_RPC_USERNAME,
    password: process.env.MAINNET_RPC_PASSWORD,
    url: "https://ethereum-mainnet.core.chainstack.com",
    socketUrl: "wss://ethereum-mainnet.core.chainstack.com",
  },
  42161: {
    //arbitrum
    username: process.env.ARBITRUM_RPC_USERNAME,
    password: process.env.ARBITRUM_RPC_PASSWORD,
    url: "https://arbitrum-mainnet.core.chainstack.com",
    socketUrl: "wss://arbitrum-mainnet.core.chainstack.com",
  },
  43114: {
    //avalanche
    username: process.env.AVALANCHE_RPC_USERNAME,
    password: process.env.AVALANCHE_RPC_PASSWORD,
    url: "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc",
    socketUrl: "wss://avalanche-mainnet.core.chainstack.com/ext/bc/C/ws",
  },
  10: {
    //optimism
    username: process.env.OPTIMISM_RPC_USERNAME,
    password: process.env.OPTIMISM_RPC_PASSWORD,
    url: "https://nd-007-647-713.p2pify.com",
    socketUrl: "wss://ws-nd-007-647-713.p2pify.com",
  },
  137: {
    //polygon
    username: process.env.POLYGON_RPC_USERNAME,
    password: process.env.POLYGON_RPC_PASSWORD,
    url: "https://polygon-mainnet.core.chainstack.com",
    socketUrl: "wss://polygon-mainnet.core.chainstack.com",
  },
  8453: {
    //base
    username: process.env.BASE_RPC_USERNAME,
    password: process.env.BASE_RPC_PASSWORD,
    url: "https://nd-092-619-550.p2pify.com",
    socketUrl: "wss://ws-nd-092-619-550.p2pify.com",
  },
  100: {
    //gnosis
    username: process.env.GNOSIS_RPC_USERNAME,
    password: process.env.GNOSIS_RPC_PASSWORD,
    url: "https://nd-696-263-600.p2pify.com",
    socketUrl: "wss://ws-nd-696-263-600.p2pify.com",
  },
  11155111: {
    //sepolia
    username: process.env.SEPOLIA_RPC_USERNAME,
    password: process.env.SEPOLIA_RPC_PASSWORD,
    url: "https://ethereum-sepolia.core.chainstack.com",
    socketUrl: "wss://ethereum-sepolia.core.chainstack.com",
  },
};
