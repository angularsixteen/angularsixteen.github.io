Wed Aug  9 06:26:08 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       1.8Gi       538Mi        10Gi        11Gi
Swap:          8.0Gi       974Mi       7.0Gi
System Storage
384M	.
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
    

Angular CLI: 16.1.8
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.8
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.8
@angular-devkit/build-angular   16.1.8
@angular-devkit/core            16.1.8
@angular-devkit/schematics      16.1.8
@schematics/angular             16.1.8
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.46s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.8/angular-webpack/39fef88f207cc70ecbf5f0804c870ca6fd4b3837.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.8/angular-webpack/39fef88f207cc70ecbf5f0804c870ca6fd4b3837/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1625.896815 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.88 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [652] 1.88 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    271 ms (resolving: 152 ms, restoring: 0 ms, integration: 0 ms, building: 119 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    535 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 503 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.419878 ms
<t> runtime requirements.chunks: 0.592568 ms
<t> runtime requirements.entries: 1.535257 ms
<t> finish module profiles: 7.474007 ms
<t> compute affected modules: 0.005646 ms
<t> finish modules: 13.135568 ms
<t> report dependency errors and warnings: 3.418788 ms
<t> optimize dependencies: 8.46964 ms
<t> create chunks: 2.873244 ms
<t> compute affected modules with chunk graph: 0.003135 ms
<t> optimize: 23.159279 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.160212 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 334.386848 ms
<t> runtime requirements.modules: 0.282198 ms
<t> runtime requirements.chunks: 0.092737 ms
<t> runtime requirements.entries: 0.473878 ms
<t> runtime requirements: 1.109547 ms
<t> hashing: initialize hash: 0.008592 ms
<t> hashing: sort chunks: 0.056588 ms
<t> hashing: hash runtime modules: 1.31904 ms
<t> hashing: hash chunks: 1.290204 ms
<t> hashing: hash digest: 0.047017 ms
<t> hashing: process full hash modules: 0.226667 ms
<t> hashing: 3.161275 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.070116 ms
<t> module assets: 0.142605 ms
<t> create chunk assets: 2.984076 ms
<t> process assets: 5631.404188 ms

LOG from webpack.Compiler
<t> make hook: 3957.930918 ms
<t> finish make hook: 0.108613 ms
<t> finish compilation: 24.064913 ms
<t> seal compilation: 6016.099554 ms
<t> afterCompile hook: 0.185118 ms
<t> emitAssets: 5.223075 ms
<t> emitRecords: 0.109712 ms
<t> done hook: 101.611087 ms
<t> beginIdle: 0.511639 ms

LOG from webpack.Compilation.ModuleProfile
     | 52 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 51 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 486 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 40 ms (parallelism 8.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 905 ms resolve to new modules
     |  | 158 ms (parallelism 3.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 158 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 108 ms (parallelism 3.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 108 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 249 ms (parallelism 2.4) build modules > ./src/main.ts
<i>  | 277 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 102 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 103 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 406 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 479 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 487 ms (parallelism 4.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 491 ms (parallelism 4.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 42 ms (parallelism 10.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1522 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 2484 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1168 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.86923 ms
<t> figure out provided exports: 7.821881 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.259935 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.956962 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.386285 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.453053 ms
<t> trace exports usage in graph: 4.241853 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.32156 ms
<t> visitModules: visiting: 2.026656 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.106145 ms
<t> connectChunkGroups: 0.001944 ms
<t> cleanup: 0.001081 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.030587 ms
<t> modules: 4.707093 ms
<t> queue: 0.00741 ms
<t> maxSize: 0.101486 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.049451 ms
<t> sort relevant modules: 0.105441 ms
<t> find modules to concatenate: 4.593667 ms
<t> sort concat configurations: 0.00159 ms
<t> create concatenated modules: 4.49811 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 253.825728 ms
<t> optimize asset: polyfills.js: 722.272639 ms
<t> optimize asset: main.js: 5107.587832 ms
<t> optimize js assets: 5172.233563 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 6.272384 ms
<t> optimize css assets: 8.276494 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1168)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 46% (97/210) entries shared via 7 shared snapshots (11 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 10% (89/924) entries shared via 7 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3170/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 88% (3675/4199) entries shared via 188 shared snapshots (740 times referenced)

2023-08-09 18:26:42: webpack 5.86.0 compiled in 11616 ms (32f8e10ef53ac549)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 786.400497 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 40.869709 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 4.891316 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.970075 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.948055 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.762928 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.868351 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.097246 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.343017 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/forkJoin.js': 1.242759 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 1.072866 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable|request=|../symbol/observable': 1.422547 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 7.770687 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.162632 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 238.127237 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 205.01 kB |                56.04 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.90 kB |                67.15 kB

Build at: 2023-08-09T22:26:43.874Z - Hash: 32f8e10ef53ac549 - Time: 12907ms
Done in 14.55s.
```
