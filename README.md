Mon Oct  2 07:08:27 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       1.6Gi       639Mi       9.1Gi       9.6Gi
Swap:          8.0Gi        93Mi       7.9Gi
System Storage
478M	.
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.7
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cli                    16.2.4
@schematics/angular             16.2.4
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001542
Installed version:  1.0.30001541
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001542
Installed version:  1.0.30001542
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1762.253035 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (8e2a5a2f3bfff158 != 55e8610afa396cf0)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001542 != caniuse-lite@1.0.30001541)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.4/angular-webpack/0319c210d803c30a0ade0a0badecd617540f4b4d.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 878.98064 ms
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
    1145 ms (resolving: 929 ms, restoring: 0 ms, integration: 0 ms, building: 215 ms, storing: 1 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1504 ms (resolving: 927 ms, restoring: 0 ms, integration: 0 ms, building: 577 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.427912 ms
<t> runtime requirements.chunks: 0.406677 ms
<t> runtime requirements.entries: 1.404795 ms
<t> finish module profiles: 7.452827 ms
<t> compute affected modules: 0.004052 ms
<t> finish modules: 15.254637 ms
<t> report dependency errors and warnings: 3.474567 ms
<t> optimize dependencies: 8.086301 ms
<t> create chunks: 2.588417 ms
<t> compute affected modules with chunk graph: 0.003658 ms
<t> optimize: 23.538969 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.528928 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 350.211509 ms
<t> runtime requirements.modules: 0.268282 ms
<t> runtime requirements.chunks: 0.087309 ms
<t> runtime requirements.entries: 0.490314 ms
<t> runtime requirements: 1.075248 ms
<t> hashing: initialize hash: 0.007972 ms
<t> hashing: sort chunks: 0.054484 ms
<t> hashing: hash runtime modules: 1.27892 ms
<t> hashing: hash chunks: 1.252268 ms
<t> hashing: hash digest: 0.045894 ms
<t> hashing: process full hash modules: 0.176454 ms
<t> hashing: 3.024861 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.134539 ms
<t> module assets: 0.146021 ms
<t> create chunk assets: 5.081343 ms
<t> process assets: 3265.906713 ms

LOG from webpack.Compiler
<t> make hook: 2846.428914 ms
<t> finish make hook: 0.105262 ms
<t> finish compilation: 26.21707 ms
<t> seal compilation: 3670.738906 ms
<t> afterCompile hook: 0.218273 ms
<t> emitAssets: 5.437456 ms
<t> emitRecords: 0.079874 ms
<t> done hook: 110.872787 ms
<t> beginIdle: 0.445176 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 309 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 310 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 313 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 73 ms (parallelism 6.6) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i> 1343 ms resolve to new modules
     | 79 ms (parallelism 2.4) integrate modules > ./src/main.ts
    83 ms integrate modules
     |  | 195 ms (parallelism 3) build modules > ./src/styles.scss?ngGlobalStyle
     | 195 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 60 ms (parallelism 3.6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 238 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 222 ms (parallelism 2.5) build modules > ./src/main.ts
<i>  | 250 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 102 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 102 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 75 ms (parallelism 3.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 77 ms (parallelism 6.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 69 ms (parallelism 4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 224 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 1017 ms build modules
     | 79 ms (parallelism 2.4) restore modules > ./src/main.ts
    83 ms restore modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1135 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.859553 ms
<t> figure out provided exports: 7.787913 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.212083 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.216237 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.256201 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.457886 ms
<t> trace exports usage in graph: 4.0276 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.193427 ms
<t> visitModules: visiting: 1.814474 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.889932 ms
<t> connectChunkGroups: 0.00193 ms
<t> cleanup: 0.00126 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.036775 ms
<t> modules: 2.105309 ms
<t> queue: 0.004103 ms
<t> maxSize: 0.028789 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.905423 ms
<t> sort relevant modules: 0.093745 ms
<t> find modules to concatenate: 4.516246 ms
<t> sort concat configurations: 0.001457 ms
<t> create concatenated modules: 4.418756 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 234.852379 ms
<t> optimize asset: polyfills.js: 746.351922 ms
<t> optimize asset: main.js: 2800.780864 ms
<t> optimize js assets: 2858.717588 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 1.262753 ms
<t> optimize css assets: 1.866376 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1135)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3127/3677) entries shared via 3 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 50% (106/210) entries shared via 9 shared snapshots (12 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 13% (121/928) entries shared via 12 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3174/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 91% (3803/4199) entries shared via 189 shared snapshots (741 times referenced)

2023-10-02 07:08:56: webpack 5.88.2 compiled in 8278 ms (ea54a56e532ece27)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 403.369931 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 6.057834 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.463324 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.373941 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.58412 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.176112 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.60841 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.181095 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.330259 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../Observable': 1.281111 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 10.58239 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.170318 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 283.630022 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.44 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.59 kB |                67.54 kB

Build at: 2023-10-02T11:08:57.733Z - Hash: ea54a56e532ece27 - Time: 9180ms
Done in 10.94s.
```
Mon Oct  2 07:08:59 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.87
info New version: 0.0.88
Done in 0.13s.
