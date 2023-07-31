Mon Jul 31 03:47:28 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.6Gi       352Mi        10Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
379M	.
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
    
Done in 0.45s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
Latest version:     1.0.30001518
Installed version:  1.0.30001517
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001518
Installed version:  1.0.30001518
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.6/angular-webpack/4d73431e6ea9154f2ab91ea182d0db0679f525d9.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.6/angular-webpack/4d73431e6ea9154f2ab91ea182d0db0679f525d9/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1605.9053880000001 ms
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
    933 ms (resolving: 151 ms, restoring: 0 ms, integration: 0 ms, building: 781 ms, storing: 1 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1057 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1027 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.247723 ms
<t> runtime requirements.chunks: 0.166323 ms
<t> runtime requirements.entries: 1.221761 ms
<t> finish module profiles: 6.565396 ms
<t> compute affected modules: 0.004966 ms
<t> finish modules: 16.329585 ms
<t> report dependency errors and warnings: 3.487151 ms
<t> optimize dependencies: 8.253666 ms
<t> create chunks: 2.853473 ms
<t> compute affected modules with chunk graph: 0.003079 ms
<t> optimize: 19.543733 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.047198 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 322.072114 ms
<t> runtime requirements.modules: 0.275041 ms
<t> runtime requirements.chunks: 0.089176 ms
<t> runtime requirements.entries: 0.490249 ms
<t> runtime requirements: 1.10074 ms
<t> hashing: initialize hash: 0.007981 ms
<t> hashing: sort chunks: 0.059899 ms
<t> hashing: hash runtime modules: 1.297109 ms
<t> hashing: hash chunks: 1.284101 ms
<t> hashing: hash digest: 0.052125 ms
<t> hashing: process full hash modules: 0.234439 ms
<t> hashing: 3.155256 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06604 ms
<t> module assets: 0.149334 ms
<t> create chunk assets: 3.035853 ms
<t> process assets: 5579.487415 ms

LOG from webpack.Compiler
<t> make hook: 4761.206028 ms
<t> finish make hook: 0.101962 ms
<t> finish compilation: 26.416939 ms
<t> seal compilation: 5947.689054 ms
<t> afterCompile hook: 0.133857 ms
<t> emitAssets: 3.73847 ms
<t> emitRecords: 0.062917 ms
<t> done hook: 108.543851 ms
<t> beginIdle: 0.362645 ms

LOG from webpack.Compilation.ModuleProfile
     | 50 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 52 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 236 ms (parallelism 5.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 236 ms (parallelism 5.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 35 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 914 ms resolve to new modules
<i>  | 236 ms (parallelism 5.4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 259 ms resolve to existing modules
<i>  |  | 295 ms (parallelism 3.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 295 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 182 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 182 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 206 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 132 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 132 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1495 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 310 ms (parallelism 3.2) build modules > ./src/main.ts
     |  | 32 ms (parallelism 3.8) build modules > ./src/app/app.component.ts
<i>  | 380 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 240 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 210 ms (parallelism 5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 48 ms (parallelism 15.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 38 ms (parallelism 21.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 78 ms (parallelism 8.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 614 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 2975 ms build modules
+ 3 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1166 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.934485 ms
<t> figure out provided exports: 10.826365 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.358453 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.215299 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.212012 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.41185 ms
<t> trace exports usage in graph: 4.267294 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.320125 ms
<t> visitModules: visiting: 1.978394 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.055219 ms
<t> connectChunkGroups: 0.001872 ms
<t> cleanup: 0.001298 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033219 ms
<t> modules: 2.137082 ms
<t> queue: 0.004166 ms
<t> maxSize: 0.028953 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.851238 ms
<t> sort relevant modules: 0.102877 ms
<t> find modules to concatenate: 4.375083 ms
<t> sort concat configurations: 0.001992 ms
<t> create concatenated modules: 4.031201 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 271.814219 ms
<t> optimize asset: polyfills.js: 763.107449 ms
<t> optimize asset: main.js: 5122.893347 ms
<t> optimize js assets: 5195.086413 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 6.151888 ms
<t> optimize css assets: 10.466345 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1166)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (95/210) entries shared via 7 shared snapshots (11 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 10% (88/924) entries shared via 7 shared snapshots (13 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3662/4199) entries shared via 186 shared snapshots (738 times referenced)

2023-07-31 15:48:08: webpack 5.86.0 compiled in 12329 ms (8a07087d23157880)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 746.977101 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 39.385446 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.146784 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.380352 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.720555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.462875 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.753686 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.129283 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/scanInternals.js': 1.462973 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 7.466925 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.850704 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 174.959739 ms
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

Build at: 2023-07-31T19:48:09.471Z - Hash: 8a07087d23157880 - Time: 13484ms
Done in 15.25s.
```
