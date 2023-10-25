Wed Oct 25 03:06:20 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       1.5Gi       458Mi        10Gi        11Gi
Swap:          8.0Gi       140Mi       7.9Gi
System Storage
457M	.
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
    

Angular CLI: 16.2.7
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.7
@angular-devkit/build-angular   16.2.7
@angular-devkit/core            16.2.7
@angular-devkit/schematics      16.2.7
@angular/cli                    16.2.7
@schematics/angular             16.2.7
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.43s.
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 1.97s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001553
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.8/angular-webpack/ec94d30419a29ec621cd45f09a4378e0511541b9.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.8/angular-webpack/ec94d30419a29ec621cd45f09a4378e0511541b9/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1559.880692 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 208 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 209 KiB = runtime.js 906 bytes main.js 208 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 906 bytes = runtime.js 906 bytes styles.css 0 bytes
chunk {179} (runtime: runtime) main.js (main) 1.89 MiB [initial] [rendered]
  ./src/main.ts + 89 modules [768] 1.89 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    864 ms (resolving: 30 ms, restoring: 1 ms, integration: 0 ms, building: 833 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1076 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 1048 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.417842 ms
<t> runtime requirements.chunks: 0.434881 ms
<t> runtime requirements.entries: 1.473634 ms
<t> finish module profiles: 7.132797 ms
<t> compute affected modules: 0.006417 ms
<t> finish modules: 13.876009 ms
<t> report dependency errors and warnings: 4.282823 ms
<t> optimize dependencies: 11.903257 ms
<t> create chunks: 4.353175 ms
<t> compute affected modules with chunk graph: 0.00307 ms
<t> optimize: 23.510232 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 7.54177 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 369.3518 ms
<t> runtime requirements.modules: 0.231276 ms
<t> runtime requirements.chunks: 0.087327 ms
<t> runtime requirements.entries: 0.452312 ms
<t> runtime requirements: 0.985808 ms
<t> hashing: initialize hash: 0.007493 ms
<t> hashing: sort chunks: 0.062825 ms
<t> hashing: hash runtime modules: 1.118213 ms
<t> hashing: hash chunks: 1.195288 ms
<t> hashing: hash digest: 0.04238 ms
<t> hashing: process full hash modules: 0.161594 ms
<t> hashing: 2.880701 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061648 ms
<t> module assets: 0.14311 ms
<t> create chunk assets: 2.858973 ms
<t> process assets: 3014.107539 ms

LOG from webpack.Compiler
<t> make hook: 5078.024356 ms
<t> finish make hook: 0.099758 ms
<t> finish compilation: 25.339942 ms
<t> seal compilation: 3439.748035 ms
<t> afterCompile hook: 0.137923 ms
<t> emitAssets: 3.504143 ms
<t> emitRecords: 0.068085 ms
<t> done hook: 108.878053 ms
<t> beginIdle: 0.400151 ms

LOG from webpack.Compilation.ModuleProfile
     | 53 ms (parallelism 7.6) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
    334 ms resolve to new modules
<i>  |  | 305 ms (parallelism 3.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 305 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 343 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 389 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 213 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 37 ms (parallelism 6.5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 78 ms (parallelism 3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1424 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 190 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 190 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 434 ms (parallelism 4.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 410 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 442 ms (parallelism 4.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  |  | 428 ms (parallelism 4.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1737 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 4052 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1130 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.862798 ms
<t> figure out provided exports: 8.337082 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.377393 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.165808 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.842464 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.457893 ms
<t> trace exports usage in graph: 4.100496 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.991991 ms
<t> visitModules: visiting: 3.102538 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 3.210529 ms
<t> connectChunkGroups: 0.003266 ms
<t> cleanup: 0.001673 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035603 ms
<t> modules: 2.067355 ms
<t> queue: 0.004646 ms
<t> maxSize: 0.030854 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.944611 ms
<t> sort relevant modules: 0.096241 ms
<t> find modules to concatenate: 4.227428 ms
<t> sort concat configurations: 0.001987 ms
<t> create concatenated modules: 4.207055 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 155.196118 ms
<t> optimize asset: polyfills.js: 534.938717 ms
<t> optimize asset: main.js: 2566.562491 ms
<t> optimize js assets: 2631.521464 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 1.397091 ms
<t> optimize css assets: 1.849971 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1130)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 50% (105/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 13% (124/928) entries shared via 10 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3799/4199) entries shared via 188 shared snapshots (741 times referenced)

2023-10-25 15:07:04: webpack 5.88.2 compiled in 10093 ms (3a49b0fbd02a039f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1135.320522 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.251716 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 2.860466 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.484128 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.600126 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.887359 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.633433 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.090834 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.917604 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../symbol/iterator': 1.469644 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 8.351652 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.299875 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 174.108898 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.60 kB |                67.58 kB

Build at: 2023-10-25T19:07:05.917Z - Hash: 3a49b0fbd02a039f - Time: 11636ms
Done in 13.21s.
```
