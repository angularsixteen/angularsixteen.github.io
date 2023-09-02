Fri Sep  1 08:16:23 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.1Gi       2.0Gi       338Mi        11Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
System Storage
561M	.
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
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.2
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@angular/cli                    16.2.0
@schematics/angular             16.2.0
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001525
Installed version:  1.0.30001524
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001525
Installed version:  1.0.30001525
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.1/angular-webpack/e212a466d92b929bb3939e63a5453823ce71566b.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.1/angular-webpack/e212a466d92b929bb3939e63a5453823ce71566b/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1609.39637 ms
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
    1093 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 1061 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1298 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 1266 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.602841 ms
<t> runtime requirements.chunks: 0.41459 ms
<t> runtime requirements.entries: 1.408793 ms
<t> finish module profiles: 6.65603 ms
<t> compute affected modules: 0.00503 ms
<t> finish modules: 15.810334 ms
<t> report dependency errors and warnings: 3.471645 ms
<t> optimize dependencies: 10.445663 ms
<t> create chunks: 2.614607 ms
<t> compute affected modules with chunk graph: 0.003061 ms
<t> optimize: 18.955953 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.954677 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 400.237997 ms
<t> runtime requirements.modules: 0.286249 ms
<t> runtime requirements.chunks: 0.151215 ms
<t> runtime requirements.entries: 0.682146 ms
<t> runtime requirements: 1.347917 ms
<t> hashing: initialize hash: 0.008594 ms
<t> hashing: sort chunks: 0.074895 ms
<t> hashing: hash runtime modules: 1.425568 ms
<t> hashing: hash chunks: 1.56484 ms
<t> hashing: hash digest: 0.051874 ms
<t> hashing: process full hash modules: 0.202166 ms
<t> hashing: 3.572019 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.085342 ms
<t> module assets: 0.175953 ms
<t> create chunk assets: 4.01824 ms
<t> process assets: 3329.967018 ms

LOG from webpack.Compiler
<t> make hook: 5444.87379 ms
<t> finish make hook: 0.101888 ms
<t> finish compilation: 25.972835 ms
<t> seal compilation: 3782.790087 ms
<t> afterCompile hook: 0.187094 ms
<t> emitAssets: 3.9172 ms
<t> emitRecords: 0.066871 ms
<t> done hook: 123.908861 ms
<t> beginIdle: 0.802956 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 242 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 251 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 43 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 836 ms resolve to new modules
<i>  | 242 ms (parallelism 5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 260 ms resolve to existing modules
     | 96 ms (parallelism 2.4) integrate modules > ./src/main.ts
    101 ms integrate modules
<i>  |  | 358 ms (parallelism 3.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 358 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 277 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 173 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 160 ms (parallelism 5.8) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1666 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 367 ms (parallelism 3.3) build modules > ./src/main.ts
     |  | 31 ms (parallelism 3.8) build modules > ./src/app/app-routing.module.ts
     |  | 34 ms (parallelism 3.6) build modules > ./src/app/app.component.ts
<i>  | 442 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 221 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 221 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 255 ms (parallelism 4.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 297 ms (parallelism 4.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 226 ms (parallelism 5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 75 ms (parallelism 13.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 127 ms (parallelism 7.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 981 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3672 ms build modules
     | 96 ms (parallelism 2.4) restore modules > ./src/main.ts
    101 ms restore modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (515 real resolves with 0 cached but invalid, 1115 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.936848 ms
<t> figure out provided exports: 10.463909 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.264812 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.126392 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.953676 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.710397 ms
<t> trace exports usage in graph: 5.443318 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.199788 ms
<t> visitModules: visiting: 1.838491 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.915565 ms
<t> connectChunkGroups: 0.001825 ms
<t> cleanup: 0.001091 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.027855 ms
<t> modules: 2.112338 ms
<t> queue: 0.003865 ms
<t> maxSize: 0.027792 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.887711 ms
<t> sort relevant modules: 0.096301 ms
<t> find modules to concatenate: 4.385784 ms
<t> sort concat configurations: 0.001504 ms
<t> create concatenated modules: 3.755778 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 229.658309 ms
<t> optimize asset: polyfills.js: 634.181711 ms
<t> optimize asset: main.js: 2866.894441 ms
<t> optimize js assets: 2956.03726 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 8.988489 ms
<t> optimize css assets: 14.968714 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1115)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (112/210) entries shared via 8 shared snapshots (13 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 12% (114/928) entries shared via 8 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3797/4199) entries shared via 188 shared snapshots (738 times referenced)

2023-09-01 20:17:09: webpack 5.88.2 compiled in 10851 ms (0d640f0e1a12cf13)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1128.750462 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 54.656739 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.699208 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.719268 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.142654 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.248024 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.529525 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.566089 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/innerFrom.js': 3.060504 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../Observable': 1.286948 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 7.771815 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.952477 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 176.914616 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.17 kB |                56.30 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.06 kB |                67.41 kB

Build at: 2023-09-02T00:17:11.320Z - Hash: 0d640f0e1a12cf13 - Time: 12418ms
Done in 14.34s.
```
Fri Sep  1 08:17:13 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.55
info New version: 0.0.56
Done in 0.12s.
