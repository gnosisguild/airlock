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
- `api/v1/:chainId/sequence` - proxies requests to the Sequence api (we use this for token metadata api requests)

## Running Locally

Copy `.env` and fill it out with the appropriate secrets. Then run `yarn && yarn dev`
