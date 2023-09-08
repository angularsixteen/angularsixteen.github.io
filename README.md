Fri Sep  8 12:50:01 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       1.7Gi       330Mi        11Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
System Storage
432M	.
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
    

Angular CLI: 16.2.1
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.3
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.1
@angular-devkit/build-angular   16.2.1
@angular-devkit/core            16.2.1
@angular-devkit/schematics      16.2.1
@angular/cli                    16.2.1
@schematics/angular             16.2.1
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001528
Installed version:  1.0.30001525
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001528
Installed version:  1.0.30001528
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.1/angular-webpack/0ce83f652635fc4a26e6a761d3924b63b9aaf895.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.1/angular-webpack/0ce83f652635fc4a26e6a761d3924b63b9aaf895/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1563.936154 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 207 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 208 KiB = runtime.js 906 bytes main.js 207 KiB
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
    950 ms (resolving: 32 ms, restoring: 1 ms, integration: 0 ms, building: 917 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1179 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 1147 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.405224 ms
<t> runtime requirements.chunks: 0.447376 ms
<t> runtime requirements.entries: 1.441649 ms
<t> finish module profiles: 6.922123 ms
<t> compute affected modules: 0.004754 ms
<t> finish modules: 16.131567 ms
<t> report dependency errors and warnings: 3.61457 ms
<t> optimize dependencies: 7.698558 ms
<t> create chunks: 2.510925 ms
<t> compute affected modules with chunk graph: 0.00339 ms
<t> optimize: 19.015508 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.123105 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 419.890949 ms
<t> runtime requirements.modules: 0.206681 ms
<t> runtime requirements.chunks: 0.392636 ms
<t> runtime requirements.entries: 1.287534 ms
<t> runtime requirements: 2.591947 ms
<t> hashing: initialize hash: 0.01016 ms
<t> hashing: sort chunks: 0.173424 ms
<t> hashing: hash runtime modules: 1.666247 ms
<t> hashing: hash chunks: 2.378659 ms
<t> hashing: hash digest: 0.052442 ms
<t> hashing: process full hash modules: 0.191535 ms
<t> hashing: 5.211587 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06935 ms
<t> module assets: 0.255054 ms
<t> create chunk assets: 5.309593 ms
<t> process assets: 3101.027209 ms

LOG from webpack.Compiler
<t> make hook: 5285.767522 ms
<t> finish make hook: 0.110034 ms
<t> finish compilation: 26.706608 ms
<t> seal compilation: 3571.990301 ms
<t> afterCompile hook: 0.174917 ms
<t> emitAssets: 3.947924 ms
<t> emitRecords: 0.065693 ms
<t> done hook: 112.496007 ms
<t> beginIdle: 0.878073 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 224 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 339 ms (parallelism 4.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i> 962 ms resolve to new modules
<i>  | 224 ms (parallelism 5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 246 ms resolve to existing modules
<i>  |  | 334 ms (parallelism 3.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 334 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 380 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 433 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 235 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 160 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 160 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1566 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 207 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 207 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 352 ms (parallelism 4.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 246 ms (parallelism 4.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 43 ms (parallelism 23.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 50 ms (parallelism 18.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 80 ms (parallelism 10.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 772 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3319 ms build modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1162 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.864159 ms
<t> figure out provided exports: 8.430885 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 3.565424 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.152778 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.259913 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.360614 ms
<t> trace exports usage in graph: 3.791121 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.087666 ms
<t> visitModules: visiting: 1.784375 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.859737 ms
<t> connectChunkGroups: 0.002037 ms
<t> cleanup: 0.001258 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.030693 ms
<t> modules: 2.05066 ms
<t> queue: 0.004375 ms
<t> maxSize: 0.02813 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.90401 ms
<t> sort relevant modules: 0.102886 ms
<t> find modules to concatenate: 4.512831 ms
<t> sort concat configurations: 0.00146 ms
<t> create concatenated modules: 3.588245 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 219.85022 ms
<t> optimize asset: polyfills.js: 675.083888 ms
<t> optimize asset: main.js: 2653.4300789999998 ms
<t> optimize js assets: 2720.315192 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 2.096977 ms
<t> optimize css assets: 2.469568 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1162)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (100/210) entries shared via 7 shared snapshots (12 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 11% (101/928) entries shared via 8 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3662/4199) entries shared via 186 shared snapshots (738 times referenced)

2023-09-08 00:50:40: webpack 5.88.2 compiled in 10439 ms (6309e0d4e6395c99)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1097.007548 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 47.904173 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 6.688879 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 4.771949 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.464165 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.781934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.89911 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.152414 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.308829 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/forkJoin.js': 1.143784 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 1.068888 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduler|request=|../Scheduler': 1.473626 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 7.626051 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.893224 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'RealContentHashPlugin|analyse|runtime.js': 1.728346 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 189.102498 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.81 kB |                56.44 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.69 kB |                67.55 kB

Build at: 2023-09-08T04:50:42.294Z - Hash: 6309e0d4e6395c99 - Time: 11985ms
Done in 13.58s.
```
Fri Sep  8 12:50:44 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.56
info New version: 0.0.57
Done in 0.12s.
