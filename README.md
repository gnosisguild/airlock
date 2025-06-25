![airlock](https://github.com/gnosisguild/airlock/assets/6718506/1d6e14ea-51bd-441c-b568-33c23667845e)

## Airlock

Airlock is Gnosis Guild's proxy server that masks our api keys.

### Supported Chains

See: [./src/lib/chains.ts](./src/lib/chains.ts)

## Current Proxies

- `api/v1/:chainId/rpc` - proxies requests to our hosted rpc nodes
- `api/v1/:chainId/moralis` - proxies requests to the [Moralis indexer api](https://docs.moralis.io/web3-data-api/evm/reference)
- `api/v1/subgraph` — proxies requests to The Graph subgraph studio
- `api/v1/ipfs` — proxies ipfs CID requests through a paid pinata gateway

## Running Locally

Copy `.env` and fill it out with the appropriate secrets. Then run `yarn && yarn dev`
