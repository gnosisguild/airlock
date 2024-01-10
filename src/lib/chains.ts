import {
  mainnet,
  gnosis,
  arbitrum,
  avalanche,
  polygon,
  base,
  optimism,
  Chain,
} from "viem/chains";
import { RPCNode, rpcNodes } from "./rpc-nodes";
import { PublicClient } from "viem";
import { SequenceIndexerServices } from "./sequence-indexer";

type ChainInfo = {
  [key: number]: {
    chain: Chain;
    rpcNode: RPCNode;
    client?: PublicClient;
    sequenceURL: string;
  };
};

export const chains: ChainInfo = {
  1: {
    chain: mainnet,
    rpcNode: rpcNodes[1],
    sequenceURL: SequenceIndexerServices[1],
  },
  42161: {
    chain: arbitrum,
    rpcNode: rpcNodes[42161],
    sequenceURL: SequenceIndexerServices[42161],
  },
  43114: {
    chain: avalanche,
    rpcNode: rpcNodes[43114],
    sequenceURL: SequenceIndexerServices[43114],
  },
  10: {
    chain: optimism,
    rpcNode: rpcNodes[10],
    sequenceURL: SequenceIndexerServices[10],
  },
  137: {
    chain: polygon,
    rpcNode: rpcNodes[137],
    sequenceURL: SequenceIndexerServices[137],
  },
  8453: {
    chain: base,
    rpcNode: rpcNodes[8453],
    sequenceURL: SequenceIndexerServices[8453],
  },
  100: {
    chain: gnosis,
    rpcNode: rpcNodes[100],
    sequenceURL: SequenceIndexerServices[100],
  },
};
