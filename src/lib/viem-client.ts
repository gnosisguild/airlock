import { createPublicClient, http } from "viem";
import { chains } from "./chains";

const createTransport = (chainId: number) => {
  const {
    rpcNode: { url },
  } = chains[chainId];

  return http(url);
};

const getPublicClient = (chainId: number) => {
  const transport = createTransport(chainId);
  const chain = chains[chainId].chain;
  return createPublicClient({ transport, chain });
};

export const createClientsForChains = async () => {
  for (const chainId in chains) {
    chains[chainId].client = getPublicClient(Number(chainId));
    chains[chainId].blockHeight =
      await chains[chainId].client?.getBlockNumber();
  }
};
