Thu Aug  3 02:09:46 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       2.1Gi       319Mi        10Gi        12Gi
Swap:          8.0Gi        37Mi       8.0Gi
System Storage
412M	.
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
    

Angular CLI: 16.1.6
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.7
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.6
@angular-devkit/build-angular   16.1.6
@angular-devkit/core            16.1.6
@angular-devkit/schematics      16.1.6
@angular/cli                    16.1.6
@schematics/angular             16.1.6
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001518
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.7/angular-webpack/7e3eef04ca260e9d69d11d1291c1f170956bbefd.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.7/angular-webpack/7e3eef04ca260e9d69d11d1291c1f170956bbefd/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1631.970509 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 205 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 205 KiB = runtime.js 906 bytes main.js 205 KiB
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
    882 ms (resolving: 149 ms, restoring: 0 ms, integration: 0 ms, building: 733 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1017 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 987 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.412261 ms
<t> runtime requirements.chunks: 0.451852 ms
<t> runtime requirements.entries: 1.441317 ms
<t> finish module profiles: 6.812465 ms
<t> compute affected modules: 0.005171 ms
<t> finish modules: 15.90862 ms
<t> report dependency errors and warnings: 3.639304 ms
<t> optimize dependencies: 8.79941 ms
<t> create chunks: 2.753136 ms
<t> compute affected modules with chunk graph: 0.002814 ms
<t> optimize: 19.954764 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 9.279616 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 359.073393 ms
<t> runtime requirements.modules: 0.27843 ms
<t> runtime requirements.chunks: 0.145912 ms
<t> runtime requirements.entries: 0.684876 ms
<t> runtime requirements: 1.326513 ms
<t> hashing: initialize hash: 0.008872 ms
<t> hashing: sort chunks: 0.072476 ms
<t> hashing: hash runtime modules: 1.408935 ms
<t> hashing: hash chunks: 1.504095 ms
<t> hashing: hash digest: 0.05041 ms
<t> hashing: process full hash modules: 0.200715 ms
<t> hashing: 3.484559 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.097207 ms
<t> module assets: 0.170239 ms
<t> create chunk assets: 3.962217 ms
<t> process assets: 5684.9184430000005 ms

LOG from webpack.Compiler
<t> make hook: 5188.595566 ms
<t> finish make hook: 0.109989 ms
<t> finish compilation: 26.399145 ms
<t> seal compilation: 6097.017671 ms
<t> afterCompile hook: 0.198841 ms
<t> emitAssets: 9.757808 ms
<t> emitRecords: 0.062835 ms
<t> done hook: 107.882142 ms
<t> beginIdle: 0.80347 ms

LOG from webpack.Compilation.ModuleProfile
     | 52 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 49 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 259 ms (parallelism 5.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 259 ms (parallelism 5.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 37 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 820 ms resolve to new modules
<i>  | 259 ms (parallelism 5.4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 286 ms resolve to existing modules
<i>  |  | 273 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 273 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 190 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 190 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 345 ms (parallelism 3.2) build modules > ./src/main.ts
<i>  | 411 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 188 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 178 ms (parallelism 5.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 157 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1713 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 245 ms (parallelism 4.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 276 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 162 ms (parallelism 5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 179 ms (parallelism 4.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 179 ms (parallelism 5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1042 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3633 ms build modules
+ 4 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1157 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.891123 ms
<t> figure out provided exports: 10.636956 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.229448 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.887888 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.448578 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.554426 ms
<t> trace exports usage in graph: 4.425666 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.240529 ms
<t> visitModules: visiting: 1.899274 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.975646 ms
<t> connectChunkGroups: 0.002142 ms
<t> cleanup: 0.00135 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032955 ms
<t> modules: 2.182895 ms
<t> queue: 0.004068 ms
<t> maxSize: 0.028263 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.946854 ms
<t> sort relevant modules: 0.103618 ms
<t> find modules to concatenate: 4.683444 ms
<t> sort concat configurations: 0.001645 ms
<t> create concatenated modules: 4.037467 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 244.577531 ms
<t> optimize asset: polyfills.js: 655.816177 ms
<t> optimize asset: main.js: 5219.249948 ms
<t> optimize js assets: 5311.564914 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.004412 ms
<t> optimize css assets: 14.600415 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1157)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 49% (102/210) entries shared via 7 shared snapshots (12 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 10% (90/924) entries shared via 6 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3654/4199) entries shared via 185 shared snapshots (742 times referenced)

2023-08-03 14:10:30: webpack 5.86.0 compiled in 12940 ms (d902fc5b5c62f5bb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 792.705691 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 38.841028 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.165568 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.332347 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.731931 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.33637 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.79386 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.121128 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduler|request=|./intervalProvider': 1.511377 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 10.532136 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.863282 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 203.643617 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.54 kB |                55.88 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.43 kB |                66.99 kB

Build at: 2023-08-03T18:10:32.157Z - Hash: d902fc5b5c62f5bb - Time: 14170ms
Done in 15.83s.
```
Thu Aug  3 02:10:33 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.33
info New version: 0.0.34
Done in 0.12s.
