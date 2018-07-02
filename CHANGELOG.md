# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Add propMappers
- `getContract` allows automatic instance recovery
- `callContract` calls a constant method from an instance
- `getFeed` get feed elements (filterable)
- `getAccount` allows automatic account recovery
- `getIPFSHash` allows automatic IPFS Hash recovery
- `fetchIPFSHash` in `Vortex` class

## [1.0.1-delta.1]
### Added
- `subscribeEvent` adds a new event to update list
- `state.event.event_feed` is an array containing broadcasted events
- `EventFilter` is a redux-selector builder for event feed
- `EventFilterConfig` is a configuration interface for `EventFilter`

## [1.0.1-delta.0]
### Added
- `ipfs_config` can be given as config argument to Vortex, and will allow endpoint customization
- `backlink_config` can be given as config argument to Vortex, and will allow backlink endpoint customization
- Ability to enable Backlink, and have dynamic data update (NO MORE POLLING)
- Accounts are refreshed only when a transaction to/from them is caught
- Contracts constant data is refreshed only when a transaction to them is caught

### Changed
- Contract vortex methods are now under `vortexMethods` field (previously was `vortex`)
- Contract static call is now under `call` field (previously was `vortexCall`)
- Contract static call is now under `send` field (previously was `vortexSend`)
- Contract static call is now under `data` field (previously was `vortexData`)
- Transaction arguments are now last argument (like in web3) for `call`, `send` and `data` of every contract
- Basically:

```diff
-   state[name][address].instance.vortex.set.vortexSend({from: coinbase}, 12);
+   state[name][address].instance.vortexMethods.set.send(12, {from: coinbase});
```

- Internal IPFS mechanisms got improved

[[Unreleased]](https://github.com/Horyus/vortex/compare/1.0.1-delta.1...HEAD)
[[1.0.1-delta.1]](https://github.com/Horyus/vortex/compare/1.0.1-delta.0...1.0.1-delta.1)
[[1.0.1-delta.0]](https://github.com/Horyus/vortex/compare/1.0.1-charlie.1...1.0.1-delta.0)



