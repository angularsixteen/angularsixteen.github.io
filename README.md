Thu Aug 24 10:46:24 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.2Gi       342Mi        10Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
496M	.
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

Angular: 16.2.1
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
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001522
Installed version:  1.0.30001522
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001522
Installed version:  1.0.30001522
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.0/angular-webpack/9be399a3d2ff8b56907e6747eca0bec8e94d364a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.0/angular-webpack/9be399a3d2ff8b56907e6747eca0bec8e94d364a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1579.13859 ms
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
    232 ms (resolving: 32 ms, restoring: 0 ms, integration: 0 ms, building: 200 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    572 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 541 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.486624 ms
<t> runtime requirements.chunks: 0.575334 ms
<t> runtime requirements.entries: 1.481861 ms
<t> finish module profiles: 8.949034 ms
<t> compute affected modules: 0.005032 ms
<t> finish modules: 16.076888 ms
<t> report dependency errors and warnings: 3.748902 ms
<t> optimize dependencies: 8.714208 ms
<t> create chunks: 2.595287 ms
<t> compute affected modules with chunk graph: 0.004149 ms
<t> optimize: 23.15727 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.246442 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 341.341698 ms
<t> runtime requirements.modules: 0.296416 ms
<t> runtime requirements.chunks: 0.132279 ms
<t> runtime requirements.entries: 0.495946 ms
<t> runtime requirements: 1.119677 ms
<t> hashing: initialize hash: 0.008219 ms
<t> hashing: sort chunks: 0.060019 ms
<t> hashing: hash runtime modules: 1.196728 ms
<t> hashing: hash chunks: 1.247775 ms
<t> hashing: hash digest: 0.04875 ms
<t> hashing: process full hash modules: 0.265503 ms
<t> hashing: 3.033564 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071069 ms
<t> module assets: 0.165265 ms
<t> create chunk assets: 3.15418 ms
<t> process assets: 3304.601337 ms

LOG from webpack.Compiler
<t> make hook: 4407.172684 ms
<t> finish make hook: 0.12206 ms
<t> finish compilation: 28.81214 ms
<t> seal compilation: 3696.409031 ms
<t> afterCompile hook: 0.183297 ms
<t> emitAssets: 3.978746 ms
<t> emitRecords: 0.092764 ms
<t> done hook: 109.681937 ms
<t> beginIdle: 0.782345 ms

LOG from webpack.Compilation.ModuleProfile
<w>  | 526 ms (parallelism 4.7) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 42 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<w> 935 ms resolve to new modules
     | 70 ms (parallelism 2.4) integrate modules > ./src/main.ts
    74 ms integrate modules
     |  | 181 ms (parallelism 3) build modules > ./src/styles.scss?ngGlobalStyle
     | 181 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 56 ms (parallelism 3.6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 125 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 123 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 484 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 214 ms (parallelism 2.5) build modules > ./src/main.ts
<i>  | 242 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 100 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 100 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 533 ms (parallelism 4.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 537 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 550 ms (parallelism 4.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 33 ms (parallelism 17.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<w>  | 1683 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 2698 ms build modules
     | 70 ms (parallelism 2.4) restore modules > ./src/main.ts
    74 ms restore modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1122 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.089292 ms
<t> figure out provided exports: 9.988738 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.368665 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.869482 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.593632 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.570108 ms
<t> trace exports usage in graph: 4.196183 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.113741 ms
<t> visitModules: visiting: 1.732077 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.809205 ms
<t> connectChunkGroups: 0.001995 ms
<t> cleanup: 0.001196 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.026759 ms
<t> modules: 2.017942 ms
<t> queue: 0.00411 ms
<t> maxSize: 0.029552 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.921381 ms
<t> sort relevant modules: 0.0958 ms
<t> find modules to concatenate: 4.394639 ms
<t> sort concat configurations: 0.001842 ms
<t> create concatenated modules: 4.693253 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 272.399496 ms
<t> optimize asset: polyfills.js: 703.217917 ms
<t> optimize asset: main.js: 2852.563492 ms
<t> optimize js assets: 2920.630565 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 7.402334 ms
<t> optimize css assets: 14.194445 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1122)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 43% (90/210) entries shared via 7 shared snapshots (10 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 12% (108/928) entries shared via 10 shared snapshots (12 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 91% (3803/4199) entries shared via 189 shared snapshots (741 times referenced)

2023-08-24 10:46:56: webpack 5.88.2 compiled in 9702 ms (df335fb7620c419a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1119.260599 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 45.494152 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.63313 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.861255 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.246705 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.978082 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.977154 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.055489 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.258852 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/defaultIfEmpty.js': 1.148814 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/range.js': 1.919774 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/tslib/tslib.es6.js': 1.482595 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 7.544427 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.001289 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 174.937365 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.15 kB |                56.29 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.03 kB |                67.39 kB

Build at: 2023-08-24T14:46:57.618Z - Hash: df335fb7620c419a - Time: 11236ms
Done in 12.83s.
```
Thu Aug 24 10:46:59 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.50
info New version: 0.0.51
Done in 0.12s.
