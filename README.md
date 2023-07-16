Sun Jul 16 07:30:32 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.5Gi       2.7Gi       300Mi        11Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
407M	.
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
    

Angular CLI: 16.1.4
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.5
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@angular/cli                    16.1.4
@schematics/angular             16.1.4
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.29s.
```
Latest version:     1.0.30001516
Installed version:  1.0.30001515
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001516
Installed version:  1.0.30001516
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1647.381534 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (2ea28a656358f595 != c10c8234b5e72655)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001516 != caniuse-lite@1.0.30001515)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.4/angular-webpack/be485e2ec09366188123af0cf2b3a4b16fb7c916.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 627.652226 ms
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
    924 ms (resolving: 788 ms, restoring: 0 ms, integration: 0 ms, building: 136 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1139 ms (resolving: 665 ms, restoring: 0 ms, integration: 0 ms, building: 474 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.658643 ms
<t> runtime requirements.chunks: 0.73622 ms
<t> runtime requirements.entries: 1.476546 ms
<t> finish module profiles: 6.825681 ms
<t> compute affected modules: 0.005716 ms
<t> finish modules: 12.862761 ms
<t> report dependency errors and warnings: 3.500148 ms
<t> optimize dependencies: 10.568057 ms
<t> create chunks: 2.583884 ms
<t> compute affected modules with chunk graph: 0.003726 ms
<t> optimize: 19.339209 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.121811 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 306.247124 ms
<t> runtime requirements.modules: 0.290542 ms
<t> runtime requirements.chunks: 0.084934 ms
<t> runtime requirements.entries: 0.468802 ms
<t> runtime requirements: 1.070627 ms
<t> hashing: initialize hash: 0.007133 ms
<t> hashing: sort chunks: 0.053344 ms
<t> hashing: hash runtime modules: 1.203507 ms
<t> hashing: hash chunks: 1.251549 ms
<t> hashing: hash digest: 0.06113 ms
<t> hashing: process full hash modules: 0.196728 ms
<t> hashing: 3.099779 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.142743 ms
<t> module assets: 0.175358 ms
<t> create chunk assets: 3.18338 ms
<t> process assets: 5314.861422 ms

LOG from webpack.Compiler
<t> make hook: 2381.635036 ms
<t> finish make hook: 0.12715 ms
<t> finish compilation: 23.232503 ms
<t> seal compilation: 5669.265203 ms
<t> afterCompile hook: 0.13484 ms
<t> emitAssets: 3.805507 ms
<t> emitRecords: 0.067332 ms
<t> done hook: 103.90327 ms
<t> beginIdle: 0.431495 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 222 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 265 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 262 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 35 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 33 ms (parallelism 8.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 1086 ms resolve to new modules
     |  | 147 ms (parallelism 3.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 147 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 95 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 95 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 232 ms (parallelism 2.4) build modules > ./src/main.ts
<i>  | 258 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 34 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 195 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 40 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 64 ms (parallelism 7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 53 ms (parallelism 4.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 171 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 880 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1165 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.903866 ms
<t> figure out provided exports: 7.709493 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.220859 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.819893 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.39639 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 2.843859 ms
<t> trace exports usage in graph: 4.009981 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.116601 ms
<t> visitModules: visiting: 1.758251 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.873054 ms
<t> connectChunkGroups: 0.00198 ms
<t> cleanup: 0.000943 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.023398 ms
<t> modules: 2.010191 ms
<t> queue: 0.003755 ms
<t> maxSize: 0.028705 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.860355 ms
<t> sort relevant modules: 0.099598 ms
<t> find modules to concatenate: 4.210999 ms
<t> sort concat configurations: 0.001547 ms
<t> create concatenated modules: 4.193305 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 220.414861 ms
<t> optimize asset: polyfills.js: 610.782134 ms
<t> optimize asset: main.js: 4880.521368 ms
<t> optimize js assets: 4939.812517 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 8.200166 ms
<t> optimize css assets: 11.989252 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1165)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 46% (97/210) entries shared via 7 shared snapshots (11 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 10% (89/924) entries shared via 7 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3668/4199) entries shared via 187 shared snapshots (741 times referenced)

2023-07-16 07:31:03: webpack 5.86.0 compiled in 9699 ms (5cc23517857eaa74)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 415.772806 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 13.217606 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.567606 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.072273 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.561021 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.301824 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.204035 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.069748 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.354653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 1.056168 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduler|request=|./Action': 1.382331 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 8.43492 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.102582 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 266.388446 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.62 kB |                55.95 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.50 kB |                67.06 kB

Build at: 2023-07-16T11:31:04.150Z - Hash: 5cc23517857eaa74 - Time: 10576ms
Done in 12.15s.
```
Sun Jul 16 07:31:06 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.22
info New version: 0.0.23
Done in 0.12s.
