Sun Jun 18 03:04:21 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.1Gi       2.6Gi       627Mi       9.5Gi        11Gi
Swap:          8.0Gi       9.0Mi       8.0Gi
System Storage
415M	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 16.1.0
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.1
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cli                    16.1.0
@schematics/angular             16.1.0
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.30s.
```
Latest version:     1.0.30001504
Installed version:  1.0.30001503
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001504
Installed version:  1.0.30001504
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1641.4626950000002 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (3bacc9bfe8abeae2 != de4dca9ad0d8d250)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001504 != caniuse-lite@1.0.30001503)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.0/angular-webpack/e1527b41b7333ccb30f6a6c3ff57d0f0783a8ec9.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 600.852319 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 205 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 206 KiB = runtime.js 906 bytes main.js 205 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 906 bytes = runtime.js 906 bytes styles.css 0 bytes
chunk {179} (runtime: runtime) main.js (main) 1.83 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [652] 1.83 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    910 ms (resolving: 772 ms, restoring: 0 ms, integration: 0 ms, building: 138 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1139 ms (resolving: 638 ms, restoring: 0 ms, integration: 0 ms, building: 501 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.466139 ms
<t> runtime requirements.chunks: 0.457716 ms
<t> runtime requirements.entries: 1.817522 ms
<t> finish module profiles: 6.626002 ms
<t> compute affected modules: 0.006164 ms
<t> finish modules: 16.318696 ms
<t> report dependency errors and warnings: 3.44086 ms
<t> optimize dependencies: 8.302427 ms
<t> create chunks: 3.063398 ms
<t> compute affected modules with chunk graph: 0.003857 ms
<t> optimize: 20.70063 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.991794 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 323.963166 ms
<t> runtime requirements.modules: 0.272042 ms
<t> runtime requirements.chunks: 0.083771 ms
<t> runtime requirements.entries: 0.469661 ms
<t> runtime requirements: 1.053888 ms
<t> hashing: initialize hash: 0.007909 ms
<t> hashing: sort chunks: 0.055248 ms
<t> hashing: hash runtime modules: 1.167688 ms
<t> hashing: hash chunks: 1.278549 ms
<t> hashing: hash digest: 0.045378 ms
<t> hashing: process full hash modules: 0.170097 ms
<t> hashing: 2.926949 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.067247 ms
<t> module assets: 0.242129 ms
<t> create chunk assets: 2.98537 ms
<t> process assets: 5581.535515 ms

LOG from webpack.Compiler
<t> make hook: 2434.296201 ms
<t> finish make hook: 0.106155 ms
<t> finish compilation: 26.428463 ms
<t> seal compilation: 5955.743936 ms
<t> afterCompile hook: 0.140452 ms
<t> emitAssets: 3.841409 ms
<t> emitRecords: 0.090695 ms
<t> done hook: 98.914777 ms
<t> beginIdle: 0.352462 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 213 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 259 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 257 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 47 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 52 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 1089 ms resolve to new modules
     |  | 155 ms (parallelism 3.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 155 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 100 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 100 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 239 ms (parallelism 2.4) build modules > ./src/main.ts
<i>  | 266 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 35 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 202 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 50 ms (parallelism 3.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 93 ms (parallelism 4.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 92 ms (parallelism 4.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 238 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 966 ms build modules
+ 4 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1120 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.871595 ms
<t> figure out provided exports: 11.099108 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.207337 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.080554 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.203786 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.448367 ms
<t> trace exports usage in graph: 4.306677 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.428313 ms
<t> visitModules: visiting: 2.150707 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.226246 ms
<t> connectChunkGroups: 0.002403 ms
<t> cleanup: 0.001112 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031634 ms
<t> modules: 2.216533 ms
<t> queue: 0.004243 ms
<t> maxSize: 0.031452 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.929792 ms
<t> sort relevant modules: 0.099711 ms
<t> find modules to concatenate: 4.627228 ms
<t> sort concat configurations: 0.002056 ms
<t> create concatenated modules: 4.597147 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 240.954843 ms
<t> optimize asset: polyfills.js: 691.135624 ms
<t> optimize asset: main.js: 5139.103322 ms
<t> optimize js assets: 5198.444096 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 5.137719 ms
<t> optimize css assets: 8.722345 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1120)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 49% (102/210) entries shared via 8 shared snapshots (11 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 12% (115/924) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 91% (3803/4199) entries shared via 189 shared snapshots (741 times referenced)

2023-06-18 15:04:52: webpack 5.86.0 compiled in 10036 ms (94144e6e60196723)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 372.797376 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.353464 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.468105 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.163154 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.560497 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.079967 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.987655 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.103531 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.332032 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/delayWhen.js': 1.033642 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/timeInterval.js': 1.037297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/tslib/tslib.es6.js': 1.509048 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 9.448292 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.954501 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 266.927573 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.72 kB |                55.97 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.60 kB |                67.07 kB

Build at: 2023-06-18T19:04:53.182Z - Hash: 94144e6e60196723 - Time: 10866ms
Done in 12.50s.
```
Sun Jun 18 03:04:54 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.6
info New version: 0.0.7
Done in 0.13s.
