Wed Aug  9 07:18:06 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       1.5Gi       538Mi        10Gi        11Gi
Swap:          8.0Gi       974Mi       7.0Gi
System Storage
417M	.
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
    

Angular CLI: 16.1.8
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.8
@angular-devkit/build-angular   16.1.8
@angular-devkit/core            16.1.8
@angular-devkit/schematics      16.1.8
@angular/cli                    16.1.8
@schematics/angular             16.1.8
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.46s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.0/angular-webpack/1f87a5210097e68d1813f8d3a1a3dbba2ce12eb7.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.0/angular-webpack/1f87a5210097e68d1813f8d3a1a3dbba2ce12eb7/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1663.9946009999999 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.88 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [652] 1.88 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1023 ms (resolving: 33 ms, restoring: 1 ms, integration: 0 ms, building: 986 ms, storing: 3 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1182 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 1150 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.522325 ms
<t> runtime requirements.chunks: 0.408611 ms
<t> runtime requirements.entries: 1.417029 ms
<t> finish module profiles: 6.811162 ms
<t> compute affected modules: 0.004109 ms
<t> finish modules: 16.691201 ms
<t> report dependency errors and warnings: 4.949648 ms
<t> optimize dependencies: 9.475493 ms
<t> create chunks: 3.064962 ms
<t> compute affected modules with chunk graph: 0.002839 ms
<t> optimize: 19.385312 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.15076 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 334.759485 ms
<t> runtime requirements.modules: 0.263504 ms
<t> runtime requirements.chunks: 0.12882 ms
<t> runtime requirements.entries: 0.513319 ms
<t> runtime requirements: 1.105926 ms
<t> hashing: initialize hash: 0.008663 ms
<t> hashing: sort chunks: 0.052199 ms
<t> hashing: hash runtime modules: 1.2019 ms
<t> hashing: hash chunks: 1.25225 ms
<t> hashing: hash digest: 0.047769 ms
<t> hashing: process full hash modules: 0.171343 ms
<t> hashing: 2.940283 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071676 ms
<t> module assets: 0.160074 ms
<t> create chunk assets: 3.086045 ms
<t> process assets: 3291.572811 ms

LOG from webpack.Compiler
<t> make hook: 5483.953165 ms
<t> finish make hook: 0.105166 ms
<t> finish compilation: 28.492244 ms
<t> seal compilation: 3674.315734 ms
<t> afterCompile hook: 0.227975 ms
<t> emitAssets: 4.754778 ms
<t> emitRecords: 0.066305 ms
<t> done hook: 162.692299 ms
<t> beginIdle: 0.40237 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 295 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 294 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 39 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 962 ms resolve to new modules
<i>  | 294 ms (parallelism 5.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 315 ms resolve to existing modules
<i>  |  | 335 ms (parallelism 3.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 335 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 261 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 172 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 148 ms (parallelism 5.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1648 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 358 ms (parallelism 3.3) build modules > ./src/main.ts
     |  | 33 ms (parallelism 3.8) build modules > ./src/app/app.component.ts
     |  | 31 ms (parallelism 2.6) build modules > ./src/app/app-routing.module.ts
<i>  | 433 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 207 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 207 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 264 ms (parallelism 5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 297 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 71 ms (parallelism 13.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 55 ms (parallelism 18.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 110 ms (parallelism 8.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 798 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3428 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1169 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.962153 ms
<t> figure out provided exports: 7.688498 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 4.65204 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.781488 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.601431 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.478788 ms
<t> trace exports usage in graph: 4.983318 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.323574 ms
<t> visitModules: visiting: 1.965539 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.046975 ms
<t> connectChunkGroups: 0.002086 ms
<t> cleanup: 0.001578 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.026409 ms
<t> modules: 2.127127 ms
<t> queue: 0.004579 ms
<t> maxSize: 0.03003 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.896633 ms
<t> sort relevant modules: 0.118884 ms
<t> find modules to concatenate: 4.561041 ms
<t> sort concat configurations: 0.001661 ms
<t> create concatenated modules: 3.944564 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 234.850494 ms
<t> optimize asset: polyfills.js: 660.643657 ms
<t> optimize asset: main.js: 2773.120138 ms
<t> optimize js assets: 2837.453348 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 7.339493 ms
<t> optimize css assets: 12.517355 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1169)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 46% (97/210) entries shared via 7 shared snapshots (11 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 10% (96/928) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3662/4199) entries shared via 186 shared snapshots (738 times referenced)

2023-08-09 19:18:44: webpack 5.88.2 compiled in 10841 ms (452b572f49b61001)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1179.773016 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 57.396187 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.654071 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.729757 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.58614 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.001038 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.781571 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.088131 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/util|request=|../symbol/iterator': 1.440465 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 7.695878 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.949666 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 244.924641 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 205.01 kB |                56.04 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.90 kB |                67.15 kB

Build at: 2023-08-09T23:18:46.304Z - Hash: 452b572f49b61001 - Time: 12608ms
Done in 14.23s.
```
Wed Aug  9 07:18:47 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.41
info New version: 0.0.42
Done in 0.13s.
