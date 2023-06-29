Thu Jun 29 09:54:43 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.1Gi       925Mi        10Gi        11Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
386M	.
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
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
Latest version:     1.0.30001509
Installed version:  1.0.30001508
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.3/angular-webpack/e8b87a5b05ad36b84af3006bb751a9a8b203c11b.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.3/angular-webpack/e8b87a5b05ad36b84af3006bb751a9a8b203c11b/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1688.694344 ms
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
    876 ms (resolving: 156 ms, restoring: 0 ms, integration: 0 ms, building: 720 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1014 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 984 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.444403 ms
<t> runtime requirements.chunks: 0.411733 ms
<t> runtime requirements.entries: 1.426618 ms
<t> finish module profiles: 8.065672 ms
<t> compute affected modules: 0.00512 ms
<t> finish modules: 15.393354 ms
<t> report dependency errors and warnings: 4.254735 ms
<t> optimize dependencies: 9.141339 ms
<t> create chunks: 3.006392 ms
<t> compute affected modules with chunk graph: 0.003087 ms
<t> optimize: 24.215658 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.962509 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 358.797529 ms
<t> runtime requirements.modules: 0.375403 ms
<t> runtime requirements.chunks: 0.174912 ms
<t> runtime requirements.entries: 0.717259 ms
<t> runtime requirements: 1.543956 ms
<t> hashing: initialize hash: 0.009291 ms
<t> hashing: sort chunks: 0.068619 ms
<t> hashing: hash runtime modules: 1.727315 ms
<t> hashing: hash chunks: 1.879352 ms
<t> hashing: hash digest: 0.05728 ms
<t> hashing: process full hash modules: 0.25175 ms
<t> hashing: 4.243212 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063613 ms
<t> module assets: 0.14059 ms
<t> create chunk assets: 2.753409 ms
<t> process assets: 5748.59393 ms

LOG from webpack.Compiler
<t> make hook: 5359.63974 ms
<t> finish make hook: 0.170199 ms
<t> finish compilation: 27.758612 ms
<t> seal compilation: 6162.406585 ms
<t> afterCompile hook: 0.290314 ms
<t> emitAssets: 4.032672 ms
<t> emitRecords: 0.066789 ms
<t> done hook: 103.633856 ms
<t> beginIdle: 0.806495 ms

LOG from webpack.Compilation.ModuleProfile
     | 54 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 52 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 228 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 281 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 48 ms (parallelism 6) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 1023 ms resolve to new modules
<i>  | 224 ms (parallelism 5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 244 ms resolve to existing modules
<i>  |  | 273 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 273 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 188 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 188 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 353 ms (parallelism 3.1) build modules > ./src/main.ts
     |  | 31 ms (parallelism 3.8) build modules > ./src/app/app-routing.module.ts
     |  | 34 ms (parallelism 3.8) build modules > ./src/app/app.component.ts
<i>  | 425 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 185 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 115 ms (parallelism 6.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 140 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1771 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 239 ms (parallelism 4.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 284 ms (parallelism 5.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 80 ms (parallelism 13.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 37 ms (parallelism 23.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 80 ms (parallelism 9.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 720 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3383 ms build modules
+ 3 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (515 real resolves with 0 cached but invalid, 1116 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.085247 ms
<t> figure out provided exports: 9.413239 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.555096 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.549149 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.69177 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.545355 ms
<t> trace exports usage in graph: 4.49464 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.304885 ms
<t> visitModules: visiting: 2.019991 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.13246 ms
<t> connectChunkGroups: 0.002046 ms
<t> cleanup: 0.001134 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034051 ms
<t> modules: 2.359099 ms
<t> queue: 0.006515 ms
<t> maxSize: 0.044784 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.043796 ms
<t> sort relevant modules: 0.108675 ms
<t> find modules to concatenate: 7.647573 ms
<t> sort concat configurations: 0.002309 ms
<t> create concatenated modules: 4.256791 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 302.548076 ms
<t> optimize asset: polyfills.js: 763.373002 ms
<t> optimize asset: main.js: 5295.589626 ms
<t> optimize js assets: 5363.874726 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 5.508603 ms
<t> optimize css assets: 11.006879 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1116)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 51% (107/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 12% (108/924) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3797/4199) entries shared via 188 shared snapshots (740 times referenced)

2023-06-29 09:55:35: webpack 5.86.0 compiled in 13227 ms (bcf52d509ffb3bb7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 749.607704 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 41.970682 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.240302 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.435723 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.758215 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.343033 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.932711 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.105723 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/dematerialize.js': 1.003654 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../operators/subscribeOn': 1.478507 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 11.252655 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.187464 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 179.880502 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.70 kB |                55.98 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.58 kB |                67.09 kB

Build at: 2023-06-29T13:55:36.611Z - Hash: bcf52d509ffb3bb7 - Time: 14388ms
Done in 16.06s.
```
Thu Jun 29 09:55:38 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.11
info New version: 0.0.12
Done in 0.13s.
