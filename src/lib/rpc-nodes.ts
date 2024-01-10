export type RPCNode = {
  username?: string;
  password?: string;
  url: string;
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
  },
  42161: {
    //arbitrum
    username: process.env.ARBITRUM_RPC_USERNAME,
    password: process.env.ARBITRUM_RPC_PASSWORD,
    url: "https://arbitrum-mainnet.core.chainstack.com",
  },
  43114: {
    //avalanche
    username: process.env.AVALANCHE_RPC_USERNAME,
    password: process.env.AVALANCHE_RPC_PASSWORD,
    url: "https://avalanche-mainnet.core.chainstack.com/ext/bc/C/rpc",
  },
  10: {
    //optimism
    username: process.env.OPTIMISM_RPC_USERNAME,
    password: process.env.OPTIMISM_RPC_PASSWORD,
    url: "https://nd-007-647-713.p2pify.com",
  },
  137: {
    //polygon
    username: process.env.POLYGON_RPC_USERNAME,
    password: process.env.POLYGON_RPC_PASSWORD,
    url: "https://polygon-mainnet.core.chainstack.com",
  },
  8453: {
    //base
    username: process.env.BASE_RPC_USERNAME,
    password: process.env.BASE_RPC_PASSWORD,
    url: "https://nd-092-619-550.p2pify.com",
  },
  100: {
    //gnosis
    username: process.env.GNOSIS_RPC_USERNAME,
    password: process.env.GNOSIS_RPC_PASSWORD,
    url: "https://nd-696-263-600.p2pify.com",
  },
};
