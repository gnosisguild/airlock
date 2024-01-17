![airlock](https://github.com/gnosisguild/airlock/assets/6718506/1d6e14ea-51bd-441c-b568-33c23667845e)

## Airlock

Airlock is Gnosis Guild's proxy server that masks our api keys.

### Supported Chains

- Mainnet
- Gnosis
- Polygon
- Arbitrum
- Optimism
- Avalanche
- Base

## Current Proxies

- `api/v1/:chainId/rpc` - proxies requests to our hosted rpc nodes
- `api/v1/metadata` - proxies requests to [Sequence's metadata endpoint](https://docs.sequence.xyz/metadata/rest-api)
- `api/v1/:chainId/sequence/indexer` - proxies requests to the [Sequence indexer api](https://docs.sequence.xyz/indexer/fetch-tokens)

## Running Locally

Copy `.env` and fill it out with the appropriate secrets. Then run `yarn && yarn dev`
