import { createPublicClient, http } from "viem";
import { chains } from "./chains";

const createAuthedTransport = (chainId: number) => {
  const {
    rpcNode: { username, password, url },
  } = chains[chainId];

  if (!username || !password) {
    console.warn(
      "No username or password provided for RPC node:",
      chains[chainId].chain.name,
    );
    return http(url);
  }

  const auth =
    "Basic " + Buffer.from(username + ":" + password).toString("base64");

  return http(url, {
    fetchOptions: {
      headers: {
        Authorization: auth,
      },
    },
  });
};

const getPublicClient = (chainId: number) => {
  const transport = createAuthedTransport(chainId);
  const chain = chains[chainId].chain;
  return createPublicClient({
    transport,
    chain,
  });
};

export const createClientsForChains = async () => {
  for (const chainId in chains) {
    chains[chainId].client = getPublicClient(Number(chainId));
    chains[chainId].blockHeight =
      await chains[chainId].client?.getBlockNumber();
  }
};
