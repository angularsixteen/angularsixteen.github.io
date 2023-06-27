Tue Jun 27 01:38:41 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       1.6Gi       509Mi        11Gi        12Gi
Swap:          8.0Gi       457Mi       7.6Gi
System Storage
385M	.
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
    

Angular CLI: 16.1.1
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.2
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.1
@angular-devkit/build-angular   16.1.1
@angular-devkit/core            16.1.1
@angular-devkit/schematics      16.1.1
@angular/cli                    16.1.1
@schematics/angular             16.1.1
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.30s.
```
Latest version:     1.0.30001508
Installed version:  1.0.30001507
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001508
Installed version:  1.0.30001508
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1660.407936 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (0f2701d0ac989705 != fc428d63d56a02e1)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001508 != caniuse-lite@1.0.30001507)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.1/angular-webpack/47bedc3d6106999a3c8b4072cc25e12d46263904.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 615.073534 ms
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
    912 ms (resolving: 787 ms, restoring: 1 ms, integration: 0 ms, building: 124 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1141 ms (resolving: 654 ms, restoring: 0 ms, integration: 0 ms, building: 487 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.654183 ms
<t> runtime requirements.chunks: 0.669086 ms
<t> runtime requirements.entries: 1.688564 ms
<t> finish module profiles: 7.052969 ms
<t> compute affected modules: 0.005761 ms
<t> finish modules: 13.334507 ms
<t> report dependency errors and warnings: 3.525217 ms
<t> optimize dependencies: 11.168526 ms
<t> create chunks: 2.462522 ms
<t> compute affected modules with chunk graph: 0.003855 ms
<t> optimize: 20.028594 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.231268 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 331.773614 ms
<t> runtime requirements.modules: 0.314471 ms
<t> runtime requirements.chunks: 0.085508 ms
<t> runtime requirements.entries: 0.463781 ms
<t> runtime requirements: 1.094902 ms
<t> hashing: initialize hash: 0.007653 ms
<t> hashing: sort chunks: 0.050454 ms
<t> hashing: hash runtime modules: 1.243306 ms
<t> hashing: hash chunks: 1.239077 ms
<t> hashing: hash digest: 0.04505 ms
<t> hashing: process full hash modules: 0.170207 ms
<t> hashing: 2.950355 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.072952 ms
<t> module assets: 0.141327 ms
<t> create chunk assets: 2.861747 ms
<t> process assets: 5432.873099 ms

LOG from webpack.Compiler
<t> make hook: 2532.653766 ms
<t> finish make hook: 0.104658 ms
<t> finish compilation: 23.951649 ms
<t> seal compilation: 5813.502965 ms
<t> afterCompile hook: 0.17583 ms
<t> emitAssets: 3.611709 ms
<t> emitRecords: 0.063846 ms
<t> done hook: 99.441821 ms
<t> beginIdle: 0.331068 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 218 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 264 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 262 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 38 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i> 1056 ms resolve to new modules
     |  | 152 ms (parallelism 3.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 152 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 97 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 97 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 238 ms (parallelism 2.4) build modules > ./src/main.ts
<i>  | 266 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 31 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 243 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 86 ms (parallelism 6.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 55 ms (parallelism 3.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 91 ms (parallelism 3.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 41 ms (parallelism 8.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 278 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 1042 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1120 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.953199 ms
<t> figure out provided exports: 7.845819 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.245581 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.281119 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.362161 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.460789 ms
<t> trace exports usage in graph: 6.986823 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.080904 ms
<t> visitModules: visiting: 1.705494 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.77972 ms
<t> connectChunkGroups: 0.001803 ms
<t> cleanup: 0.00141 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.023408 ms
<t> modules: 2.050023 ms
<t> queue: 0.004326 ms
<t> maxSize: 0.029757 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.825084 ms
<t> sort relevant modules: 0.12182 ms
<t> find modules to concatenate: 4.477057 ms
<t> sort concat configurations: 0.00192 ms
<t> create concatenated modules: 4.227937 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 213.992287 ms
<t> optimize asset: polyfills.js: 671.216569 ms
<t> optimize asset: main.js: 4970.431109 ms
<t> optimize js assets: 5027.55335 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 6.821018 ms
<t> optimize css assets: 11.015497 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1120)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 50% (105/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 13% (118/924) entries shared via 9 shared snapshots (14 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3799/4199) entries shared via 188 shared snapshots (741 times referenced)

2023-06-27 13:39:13: webpack 5.86.0 compiled in 10008 ms (914237b253517c0d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 417.675715 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.036668 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.397881 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.016677 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.539133 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.073159 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.88816 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.097061 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.298083 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/delayWhen.js': 1.020071 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/timeInterval.js': 2.380857 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../Observable': 1.423166 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 8.857369 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.196195 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 223.118935 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.59 kB |                55.91 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.47 kB |                67.01 kB

Build at: 2023-06-27T17:39:14.033Z - Hash: 914237b253517c0d - Time: 10841ms
Done in 12.43s.
```
