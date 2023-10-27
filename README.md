Fri Oct 27 10:09:11 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.1Gi       1.6Gi       1.1Gi       8.6Gi       8.8Gi
Swap:          8.0Gi       154Mi       7.8Gi
System Storage
459M	.
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cli                    16.2.8
@schematics/angular             16.2.8
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.8/angular-webpack/8a177f741453eec5e010f999485315387c4867d0.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.8/angular-webpack/8a177f741453eec5e010f999485315387c4867d0/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1870.2421060000001 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.9 MiB [initial] [rendered]
  ./src/main.ts + 89 modules [768] 1.9 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    234 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 200 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    591 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 559 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.487953 ms
<t> runtime requirements.chunks: 0.710468 ms
<t> runtime requirements.entries: 1.567016 ms
<t> finish module profiles: 7.844604 ms
<t> compute affected modules: 0.008114 ms
<t> finish modules: 15.665242 ms
<t> report dependency errors and warnings: 4.663819 ms
<t> optimize dependencies: 11.540315 ms
<t> create chunks: 2.812563 ms
<t> compute affected modules with chunk graph: 0.006891 ms
<t> optimize: 26.483659 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 9.008142 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 371.338275 ms
<t> runtime requirements.modules: 0.276313 ms
<t> runtime requirements.chunks: 0.108769 ms
<t> runtime requirements.entries: 0.612665 ms
<t> runtime requirements: 1.267214 ms
<t> hashing: initialize hash: 0.007595 ms
<t> hashing: sort chunks: 0.07105 ms
<t> hashing: hash runtime modules: 1.441265 ms
<t> hashing: hash chunks: 1.722482 ms
<t> hashing: hash digest: 0.054194 ms
<t> hashing: process full hash modules: 0.196972 ms
<t> hashing: 3.717513 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.111458 ms
<t> module assets: 0.146977 ms
<t> create chunk assets: 3.354978 ms
<t> process assets: 3353.363013 ms

LOG from webpack.Compiler
<t> make hook: 5680.299397 ms
<t> finish make hook: 0.182511 ms
<t> finish compilation: 28.224258 ms
<t> seal compilation: 3784.876432 ms
<t> afterCompile hook: 0.179678 ms
<t> emitAssets: 3.82156 ms
<t> emitRecords: 0.067013 ms
<t> done hook: 108.562498 ms
<t> beginIdle: 0.397667 ms

LOG from webpack.Compilation.ModuleProfile
<w>  | 841 ms (parallelism 4.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 36 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<w> 1124 ms resolve to new modules
<i>  |  | 210 ms (parallelism 2.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 210 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 62 ms (parallelism 3.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 150 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 149 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 542 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 239 ms (parallelism 2.5) build modules > ./src/main.ts
<i>  | 267 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 103 ms (parallelism 3.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 103 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 855 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 845 ms (parallelism 4.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 864 ms (parallelism 4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 145 ms (parallelism 4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 151 ms (parallelism 4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<w>  | 2860 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 3991 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1126 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.580497 ms
<t> figure out provided exports: 8.967101 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.338578 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.051571 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.532775 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.521833 ms
<t> trace exports usage in graph: 7.044329 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.227303 ms
<t> visitModules: visiting: 1.903158 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.98635 ms
<t> connectChunkGroups: 0.002236 ms
<t> cleanup: 0.001274 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.083715 ms
<t> modules: 2.70333 ms
<t> queue: 0.007856 ms
<t> maxSize: 0.036401 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.960688 ms
<t> sort relevant modules: 0.118289 ms
<t> find modules to concatenate: 4.495561 ms
<t> sort concat configurations: 0.002435 ms
<t> create concatenated modules: 4.64434 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 191.248315 ms
<t> optimize asset: polyfills.js: 634.265743 ms
<t> optimize asset: main.js: 2826.1186 ms
<t> optimize js assets: 2892.676151 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 2.374565 ms
<t> optimize css assets: 2.780845 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1126)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 47% (99/210) entries shared via 8 shared snapshots (10 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 12% (107/928) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3174/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 91% (3805/4199) entries shared via 189 shared snapshots (740 times referenced)

2023-10-27 10:09:46: webpack 5.88.2 compiled in 11352 ms (52968b2f17ef1ec0)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1315.431491 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 46.505093 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.323965 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.709142 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.007113 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.588718 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.874955 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.129067 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 2.199614 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/throwIfEmpty.js': 1.40871 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/tslib/tslib.es6.js': 1.526297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 8.985835 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.46285 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 189.715697 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.72 kB |                56.50 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.60 kB |                67.61 kB

Build at: 2023-10-27T14:09:48.510Z - Hash: 52968b2f17ef1ec0 - Time: 13094ms
Done in 14.78s.
```
