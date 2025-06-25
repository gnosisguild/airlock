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
  flare,
  Chain,
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
  [bsc.id]: { chain: bsc, rpcNode: rpcNodes[bsc.id] },
  [gnosis.id]: { chain: gnosis, rpcNode: rpcNodes[gnosis.id] },
  [sepolia.id]: { chain: sepolia, rpcNode: rpcNodes[sepolia.id] },
  [celo.id]: { chain: celo, rpcNode: rpcNodes[celo.id] },
  [sonic.id]: { chain: sonic, rpcNode: rpcNodes[sonic.id] },
  [berachain.id]: { chain: berachain, rpcNode: rpcNodes[berachain.id] },
  [bob.id]: { chain: bob, rpcNode: rpcNodes[bob.id] },
  [mantle.id]: { chain: mantle, rpcNode: rpcNodes[mantle.id] },
  [unichain.id]: { chain: unichain, rpcNode: rpcNodes[unichain.id] },
  [polygonZkEvm.id]: {
    chain: polygonZkEvm,
    rpcNode: rpcNodes[polygonZkEvm.id],
  },
  [worldchain.id]: { chain: worldchain, rpcNode: rpcNodes[worldchain.id] },
  [linea.id]: { chain: linea, rpcNode: rpcNodes[linea.id] },
  [ink.id]: { chain: ink, rpcNode: rpcNodes[ink.id] },
  [blast.id]: { chain: blast, rpcNode: rpcNodes[blast.id] },
  [flare.id]: { chain: flare, rpcNode: rpcNodes[flare.id] },
  [baseSepolia.id]: { chain: baseSepolia, rpcNode: rpcNodes[baseSepolia.id] },
};
