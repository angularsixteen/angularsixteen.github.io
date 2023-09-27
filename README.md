Wed Sep 27 09:54:06 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       2.0Gi       284Mi        11Gi        12Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
439M	.
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
    

Angular CLI: 16.2.3
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.6
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.3
@angular-devkit/build-angular   16.2.3
@angular-devkit/core            16.2.3
@angular-devkit/schematics      16.2.3
@angular/cli                    16.2.3
@schematics/angular             16.2.3
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
Latest version:     1.0.30001540
Installed version:  1.0.30001539
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001540
Installed version:  1.0.30001540
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.4/angular-webpack/34a6b17ddf3ec1c7f88c3f354ba69fba093dcb28.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.4/angular-webpack/34a6b17ddf3ec1c7f88c3f354ba69fba093dcb28/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1626.3024329999998 ms
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
    985 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 953 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1160 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1131 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.599877 ms
<t> runtime requirements.chunks: 0.563348 ms
<t> runtime requirements.entries: 1.499132 ms
<t> finish module profiles: 9.571873 ms
<t> compute affected modules: 0.004932 ms
<t> finish modules: 13.68962 ms
<t> report dependency errors and warnings: 3.697945 ms
<t> optimize dependencies: 7.760434 ms
<t> create chunks: 2.679141 ms
<t> compute affected modules with chunk graph: 0.003075 ms
<t> optimize: 22.222151 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.256156 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 426.738413 ms
<t> runtime requirements.modules: 0.196188 ms
<t> runtime requirements.chunks: 0.369767 ms
<t> runtime requirements.entries: 1.19257 ms
<t> runtime requirements: 2.398245 ms
<t> hashing: initialize hash: 0.009759 ms
<t> hashing: sort chunks: 0.118023 ms
<t> hashing: hash runtime modules: 1.551114 ms
<t> hashing: hash chunks: 2.212988 ms
<t> hashing: hash digest: 0.062795 ms
<t> hashing: process full hash modules: 0.165702 ms
<t> hashing: 4.874447 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06331 ms
<t> module assets: 0.253503 ms
<t> create chunk assets: 4.912233 ms
<t> process assets: 3144.872767 ms

LOG from webpack.Compiler
<t> make hook: 5536.160543 ms
<t> finish make hook: 0.11247 ms
<t> finish compilation: 26.997965 ms
<t> seal compilation: 3625.342745 ms
<t> afterCompile hook: 0.187448 ms
<t> emitAssets: 3.678263 ms
<t> emitRecords: 0.062083 ms
<t> done hook: 112.274301 ms
<t> beginIdle: 0.851487 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 267 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 318 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 54 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 962 ms resolve to new modules
<i>  | 264 ms (parallelism 5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 289 ms resolve to existing modules
     | 74 ms (parallelism 2.4) integrate modules > ./src/main.ts
    78 ms integrate modules
<i>  |  | 320 ms (parallelism 3.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 320 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 249 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 173 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 174 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1685 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 350 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 414 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 198 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 198 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 282 ms (parallelism 4.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 334 ms (parallelism 5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 190 ms (parallelism 4.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 70 ms (parallelism 14.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 128 ms (parallelism 7.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1003 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3628 ms build modules
     | 74 ms (parallelism 2.4) restore modules > ./src/main.ts
    78 ms restore modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1161 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.919739 ms
<t> figure out provided exports: 8.252932 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.32381 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.267534 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.377847 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.434721 ms
<t> trace exports usage in graph: 3.668808 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.19322 ms
<t> visitModules: visiting: 1.81837 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.897476 ms
<t> connectChunkGroups: 0.002111 ms
<t> cleanup: 0.001118 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.029863 ms
<t> modules: 2.156617 ms
<t> queue: 0.003955 ms
<t> maxSize: 0.027197 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.955507 ms
<t> sort relevant modules: 0.107306 ms
<t> find modules to concatenate: 4.689878 ms
<t> sort concat configurations: 0.001613 ms
<t> create concatenated modules: 3.687965 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 247.971258 ms
<t> optimize asset: polyfills.js: 705.604296 ms
<t> optimize asset: main.js: 2697.0475500000002 ms
<t> optimize js assets: 2762.853152 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 2.055019 ms
<t> optimize css assets: 2.445078 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1161)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 46% (97/210) entries shared via 7 shared snapshots (11 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 11% (100/928) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3662/4199) entries shared via 186 shared snapshots (738 times referenced)

2023-09-27 09:54:49: webpack 5.88.2 compiled in 10805 ms (f04a48a7e6b196a9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1154.592032 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 48.661755 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.791636 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.858476 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.449052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.605128 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.718321 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.182861 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.381032 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/forkJoin.js': 1.111565 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 1.09624 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduler|request=|./Action': 1.612461 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 9.073272 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.858625 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'RealContentHashPlugin|analyse|styles.css': 1.893369 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 242.893611 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.37 kB |                56.43 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.25 kB |                67.53 kB

Build at: 2023-09-27T13:54:50.868Z - Hash: f04a48a7e6b196a9 - Time: 12447ms
Done in 14.00s.
```
Wed Sep 27 09:54:52 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.73
info New version: 0.0.74
Done in 0.12s.
