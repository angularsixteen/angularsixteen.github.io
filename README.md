Sat Aug  5 10:02:14 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       2.0Gi       610Mi        10Gi        11Gi
Swap:          8.0Gi       879Mi       7.1Gi
System Storage
381M	.
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
    

Angular CLI: 16.1.7
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.8
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.7
@angular-devkit/build-angular   16.1.7
@angular-devkit/core            16.1.7
@angular-devkit/schematics      16.1.7
@angular/cli                    16.1.7
@schematics/angular             16.1.7
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.60s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.8/angular-webpack/1964ef90c1e7573b092d7ec1d770b994de0185b1.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.8/angular-webpack/1964ef90c1e7573b092d7ec1d770b994de0185b1/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1904.877119 ms
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
    975 ms (resolving: 158 ms, restoring: 0 ms, integration: 0 ms, building: 817 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1128 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 1098 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.504819 ms
<t> runtime requirements.chunks: 0.45051 ms
<t> runtime requirements.entries: 1.442437 ms
<t> finish module profiles: 8.061187 ms
<t> compute affected modules: 0.004945 ms
<t> finish modules: 15.474222 ms
<t> report dependency errors and warnings: 3.831208 ms
<t> optimize dependencies: 13.348033 ms
<t> create chunks: 3.170588 ms
<t> compute affected modules with chunk graph: 0.004878 ms
<t> optimize: 21.750064 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.416493 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 342.019414 ms
<t> runtime requirements.modules: 0.271309 ms
<t> runtime requirements.chunks: 0.089512 ms
<t> runtime requirements.entries: 0.502662 ms
<t> runtime requirements: 1.1013 ms
<t> hashing: initialize hash: 0.007998 ms
<t> hashing: sort chunks: 0.061089 ms
<t> hashing: hash runtime modules: 1.260672 ms
<t> hashing: hash chunks: 1.327388 ms
<t> hashing: hash digest: 0.049953 ms
<t> hashing: process full hash modules: 0.272232 ms
<t> hashing: 3.193091 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.072918 ms
<t> module assets: 0.15306 ms
<t> create chunk assets: 3.211291 ms
<t> process assets: 5952.715042 ms

LOG from webpack.Compiler
<t> make hook: 6400.275277 ms
<t> finish make hook: 0.108821 ms
<t> finish compilation: 27.407939 ms
<t> seal compilation: 6349.403479 ms
<t> afterCompile hook: 0.156079 ms
<t> emitAssets: 4.775303 ms
<t> emitRecords: 0.061677 ms
<t> done hook: 122.682456 ms
<t> beginIdle: 0.357545 ms

LOG from webpack.Compilation.ModuleProfile
     | 55 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 53 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 49 ms (parallelism 5.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 49 ms (parallelism 5.6) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    403 ms resolve to new modules
<i>  |  | 304 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 304 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 214 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 214 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 404 ms (parallelism 3.1) build modules > ./src/main.ts
     |  | 47 ms (parallelism 5.4) build modules > ./src/app/app-routing.module.ts
     |  | 47 ms (parallelism 5.4) build modules > ./src/app/app.component.ts
<i>  | 511 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 209 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 64 ms (parallelism 3) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 63 ms (parallelism 3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1563 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w>  |  | 680 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 676 ms (parallelism 4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 698 ms (parallelism 4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<w>  |  | 724 ms (parallelism 4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<w>  | 2793 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 5387 ms build modules
+ 4 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1124 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.538683 ms
<t> figure out provided exports: 9.178797 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.271649 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 102.421312 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.48789 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.569786 ms
<t> trace exports usage in graph: 7.793861 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.432529 ms
<t> visitModules: visiting: 2.221382 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.310218 ms
<t> connectChunkGroups: 0.003296 ms
<t> cleanup: 0.001586 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038555 ms
<t> modules: 2.384076 ms
<t> queue: 0.005326 ms
<t> maxSize: 0.035895 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.982998 ms
<t> sort relevant modules: 0.109384 ms
<t> find modules to concatenate: 5.246189 ms
<t> sort concat configurations: 0.001857 ms
<t> create concatenated modules: 4.188472 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 240.163525 ms
<t> optimize asset: polyfills.js: 748.324005 ms
<t> optimize asset: main.js: 5470.036857 ms
<t> optimize js assets: 5535.431532 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 5.990809 ms
<t> optimize css assets: 8.808412 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1124)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 51% (107/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 12% (115/924) entries shared via 10 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3170/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 91% (3806/4199) entries shared via 189 shared snapshots (740 times referenced)

2023-08-05 10:02:57: webpack 5.86.0 compiled in 14672 ms (d902fc5b5c62f5bb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 829.382821 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 40.165883 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.132555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.389087 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.850297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.746996 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.079218 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.121703 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.282765 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/delayWhen.js': 1.183712 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../observable/innerFrom': 1.436215 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 7.533119 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.960674 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 221.156791 ms
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

Build at: 2023-08-05T14:02:58.408Z - Hash: d902fc5b5c62f5bb - Time: 15973ms
Done in 17.87s.
```
Sat Aug  5 10:03:00 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.34
info New version: 0.0.35
Done in 0.13s.
