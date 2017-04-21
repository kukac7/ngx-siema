<a name="1.1.0"></a>
# 1.1.0 (2017-04-21)

### Bud fixes

* **component:** update siema to 1.3.1 ([a10f5cd](https://github.com/lexzhukov/ngx-siema/commit/a10f5cdb492180fa689ff30ea8c7123ce54c11c5)), ([#17](https://github.com/lexzhukov/ngx-siema/pull/17))
* **component:** crash due to Siema instance doesn't have `removeAllListeners()` ([09885cc](https://github.com/lexzhukov/ngx-siema/commit/09885cc143c3a09d9f42c4011a39bbaf1d9ccbcd)), closes ([#18](https://github.com/lexzhukov/ngx-siema/issues/18))

### Features

* **component:** update angular to 4.0.0

### Breaking changes

* **component:** the `@Output` parameters are renamed: onNext -> next, onPrev -> prev, onGoTo -> goTo
* **component:** the public methods are renamed: next -> onNext, prev -> onPrev, goTo -> onGoTo

<a name="1.0.0"></a>
# 1.0.0 (2017-01-29)

### Features

* First Release
