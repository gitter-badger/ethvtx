# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/Horyus/vortex


