import {
  mainnet,
  gnosis,
  arbitrum,
  avalanche,
  polygon,
  base,
  optimism,
  Chain,
  sepolia,
} from "viem/chains";
import { RPCNode, rpcNodes } from "./rpc-nodes";
import { PublicClient } from "viem";

type ChainInfo = {
  [key: number]: {
    chain: Chain;
    rpcNode: RPCNode;
    client?: PublicClient;
    blockHeight?: bigint;
  };
};

export const chains: ChainInfo = {
  1: {
    chain: mainnet,
    rpcNode: rpcNodes[1],
  },
  42161: {
    chain: arbitrum,
    rpcNode: rpcNodes[42161],
  },
  43114: {
    chain: avalanche,
    rpcNode: rpcNodes[43114],
  },
  10: {
    chain: optimism,
    rpcNode: rpcNodes[10],
  },
  137: {
    chain: polygon,
    rpcNode: rpcNodes[137],
  },
  8453: {
    chain: base,
    rpcNode: rpcNodes[8453],
  },
  100: {
    chain: gnosis,
    rpcNode: rpcNodes[100],
  },
  11155111: {
    chain: sepolia,
    rpcNode: rpcNodes[11155111],
  },
};
