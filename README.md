Thu Sep 14 11:13:40 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       2.7Gi       317Mi        10Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
437M	.
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
    

Angular CLI: 16.2.2
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.2
@angular-devkit/build-angular   16.2.2
@angular-devkit/core            16.2.2
@angular-devkit/schematics      16.2.2
@angular/cli                    16.2.2
@schematics/angular             16.2.2
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.2/angular-webpack/a068ccd61443d41a0f49af8cf47633f6719fb5d1.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.2/angular-webpack/a068ccd61443d41a0f49af8cf47633f6719fb5d1/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1578.941591 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 206 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 207 KiB = runtime.js 906 bytes main.js 206 KiB
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
    177 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 143 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    567 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 536 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.443174 ms
<t> runtime requirements.chunks: 0.401475 ms
<t> runtime requirements.entries: 1.472275 ms
<t> finish module profiles: 8.243915 ms
<t> compute affected modules: 0.005539 ms
<t> finish modules: 15.287839 ms
<t> report dependency errors and warnings: 3.686286 ms
<t> optimize dependencies: 11.731767 ms
<t> create chunks: 2.647298 ms
<t> compute affected modules with chunk graph: 0.003582 ms
<t> optimize: 22.870602 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.840163 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 350.237231 ms
<t> runtime requirements.modules: 0.261233 ms
<t> runtime requirements.chunks: 0.127413 ms
<t> runtime requirements.entries: 0.529186 ms
<t> runtime requirements: 1.12132 ms
<t> hashing: initialize hash: 0.007801 ms
<t> hashing: sort chunks: 0.055778 ms
<t> hashing: hash runtime modules: 1.185962 ms
<t> hashing: hash chunks: 1.254547 ms
<t> hashing: hash digest: 0.045645 ms
<t> hashing: process full hash modules: 0.183746 ms
<t> hashing: 2.935228 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071463 ms
<t> module assets: 0.160782 ms
<t> create chunk assets: 3.077157 ms
<t> process assets: 3246.499299 ms

LOG from webpack.Compiler
<t> make hook: 4276.220497 ms
<t> finish make hook: 0.105216 ms
<t> finish compilation: 27.260607 ms
<t> seal compilation: 3650.268993 ms
<t> afterCompile hook: 0.141493 ms
<t> emitAssets: 7.48714 ms
<t> emitRecords: 0.092507 ms
<t> done hook: 150.037991 ms
<t> beginIdle: 0.822992 ms

LOG from webpack.Compilation.ModuleProfile
<w>  | 525 ms (parallelism 4.5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<w> 911 ms resolve to new modules
     |  | 199 ms (parallelism 2.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 199 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 257 ms (parallelism 2.4) build modules > ./src/main.ts
<i>  | 284 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 36 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 127 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 126 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 463 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 97 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 97 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 513 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 531 ms (parallelism 4.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 549 ms (parallelism 3.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 46 ms (parallelism 12.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<w>  | 1666 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 2715 ms build modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1121 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.036096 ms
<t> figure out provided exports: 9.100421 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.58569 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.465023 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.516573 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.550078 ms
<t> trace exports usage in graph: 4.315479 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.182097 ms
<t> visitModules: visiting: 1.8712 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.961265 ms
<t> connectChunkGroups: 0.002023 ms
<t> cleanup: 0.001099 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034596 ms
<t> modules: 2.26265 ms
<t> queue: 0.004423 ms
<t> maxSize: 0.0298 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.996314 ms
<t> sort relevant modules: 0.096155 ms
<t> find modules to concatenate: 5.066135 ms
<t> sort concat configurations: 0.002069 ms
<t> create concatenated modules: 4.783179 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 265.007521 ms
<t> optimize asset: polyfills.js: 636.243229 ms
<t> optimize asset: main.js: 2798.905412 ms
<t> optimize js assets: 2861.010772 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 1.089019 ms
<t> optimize css assets: 1.460979 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1121)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 47% (99/210) entries shared via 8 shared snapshots (10 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 12% (107/928) entries shared via 10 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 91% (3803/4199) entries shared via 189 shared snapshots (741 times referenced)

2023-09-14 11:14:15: webpack 5.88.2 compiled in 9527 ms (893b4fd0b3bd7b02)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1308.328654 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.764349 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 2.895019 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.26027 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.721556 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.265628 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.854062 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.075634 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.236733 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/tslib/tslib.es6.js': 1.625156 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 7.822119 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.958191 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 176.620021 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.41 kB |                56.40 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.29 kB |                67.51 kB

Build at: 2023-09-14T15:14:17.081Z - Hash: 893b4fd0b3bd7b02 - Time: 11328ms
Done in 12.93s.
```
