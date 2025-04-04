import {
  mainnet,
  gnosis,
  arbitrum,
  avalanche,
  polygon,
  base,
  optimism,
  sepolia,
  celo,
  sonic,
  berachain,
  mantle,
  Chain,
  polygonZkEvm,
  baseSepolia,
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
  [mainnet.id]: { chain: mainnet, rpcNode: rpcNodes[mainnet.id] },
  [arbitrum.id]: { chain: arbitrum, rpcNode: rpcNodes[arbitrum.id] },
  [avalanche.id]: { chain: avalanche, rpcNode: rpcNodes[avalanche.id] },
  [optimism.id]: { chain: optimism, rpcNode: rpcNodes[optimism.id] },
  [polygon.id]: { chain: polygon, rpcNode: rpcNodes[polygon.id] },
  [base.id]: { chain: base, rpcNode: rpcNodes[base.id] },
  [gnosis.id]: { chain: gnosis, rpcNode: rpcNodes[gnosis.id] },
  [sepolia.id]: { chain: sepolia, rpcNode: rpcNodes[sepolia.id] },
  [celo.id]: { chain: celo, rpcNode: rpcNodes[celo.id] },
  [sonic.id]: { chain: sonic, rpcNode: rpcNodes[sonic.id] },
  [berachain.id]: { chain: berachain, rpcNode: rpcNodes[berachain.id] },
  [mantle.id]: { chain: mantle, rpcNode: rpcNodes[mantle.id] },
  [polygonZkEvm.id]: {
    chain: polygonZkEvm,
    rpcNode: rpcNodes[polygonZkEvm.id],
  },
  [baseSepolia.id]: { chain: baseSepolia, rpcNode: rpcNodes[baseSepolia.id] },
};
