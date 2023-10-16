Sun Oct 15 11:01:43 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.1Gi       2.8Gi       411Mi       8.3Gi        10Gi
Swap:          8.0Gi       1.9Gi       6.1Gi
System Storage
451M	.
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
    

Angular CLI: 16.2.6
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.6
@angular-devkit/build-angular   16.2.6
@angular-devkit/core            16.2.6
@angular-devkit/schematics      16.2.6
@angular/cli                    16.2.6
@schematics/angular             16.2.6
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.47s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001549
Installed version:  1.0.30001547
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001549
Installed version:  1.0.30001549
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.6/angular-webpack/b214b16bab837277451a0f46ce1dc821abe56d4b.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.6/angular-webpack/b214b16bab837277451a0f46ce1dc821abe56d4b/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1671.672902 ms
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
    975 ms (resolving: 34 ms, restoring: 1 ms, integration: 0 ms, building: 940 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1134 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 1103 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.595656 ms
<t> runtime requirements.chunks: 0.410108 ms
<t> runtime requirements.entries: 1.494316 ms
<t> finish module profiles: 7.212418 ms
<t> compute affected modules: 0.005249 ms
<t> finish modules: 15.929033 ms
<t> report dependency errors and warnings: 3.757761 ms
<t> optimize dependencies: 8.429615 ms
<t> create chunks: 2.713798 ms
<t> compute affected modules with chunk graph: 0.003197 ms
<t> optimize: 20.103744 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.6315 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 446.336469 ms
<t> runtime requirements.modules: 0.194841 ms
<t> runtime requirements.chunks: 0.335051 ms
<t> runtime requirements.entries: 1.152883 ms
<t> runtime requirements: 2.353616 ms
<t> hashing: initialize hash: 0.010529 ms
<t> hashing: sort chunks: 0.20841 ms
<t> hashing: hash runtime modules: 1.543421 ms
<t> hashing: hash chunks: 2.157207 ms
<t> hashing: hash digest: 0.046793 ms
<t> hashing: process full hash modules: 0.165374 ms
<t> hashing: 4.794591 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062958 ms
<t> module assets: 0.23711 ms
<t> create chunk assets: 4.858374 ms
<t> process assets: 3493.590863 ms

LOG from webpack.Compiler
<t> make hook: 5479.780057 ms
<t> finish make hook: 0.088631 ms
<t> finish compilation: 26.938767 ms
<t> seal compilation: 3992.627576 ms
<t> afterCompile hook: 0.174319 ms
<t> emitAssets: 3.901805 ms
<t> emitRecords: 0.062535 ms
<t> done hook: 113.062517 ms
<t> beginIdle: 0.837668 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 236 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 236 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 77 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 995 ms resolve to new modules
<i>  | 236 ms (parallelism 5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 256 ms resolve to existing modules
     | 74 ms (parallelism 2.4) integrate modules > ./src/main.ts
    80 ms integrate modules
<i>  |  | 310 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 310 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 245 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 178 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 177 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1708 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 337 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 395 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 197 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 197 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 239 ms (parallelism 5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 313 ms (parallelism 4.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 53 ms (parallelism 19.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 46 ms (parallelism 24.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 88 ms (parallelism 10.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 740 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3355 ms build modules
     | 74 ms (parallelism 2.4) restore modules > ./src/main.ts
    80 ms restore modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1126 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.925296 ms
<t> figure out provided exports: 10.623345 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.255003 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.559267 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.623449 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.403011 ms
<t> trace exports usage in graph: 4.040308 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.199592 ms
<t> visitModules: visiting: 1.877384 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.95797 ms
<t> connectChunkGroups: 0.001916 ms
<t> cleanup: 0.001277 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033605 ms
<t> modules: 2.210971 ms
<t> queue: 0.004239 ms
<t> maxSize: 0.029388 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.889444 ms
<t> sort relevant modules: 0.096736 ms
<t> find modules to concatenate: 4.556801 ms
<t> sort concat configurations: 0.001838 ms
<t> create concatenated modules: 4.067887 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 231.516228 ms
<t> optimize asset: polyfills.js: 666.453724 ms
<t> optimize asset: main.js: 3036.981017 ms
<t> optimize js assets: 3101.169608 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 3.021326 ms
<t> optimize css assets: 4.273491 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1126)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 51% (107/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 12% (114/928) entries shared via 9 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3797/4199) entries shared via 188 shared snapshots (740 times referenced)

2023-10-15 23:02:15: webpack 5.88.2 compiled in 11158 ms (55e924f333dde260)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1210.302214 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.740004 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.59282 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.754531 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.281549 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.601723 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.804222 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.08382 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.29563 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../symbol/iterator': 1.51789 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 9.030833 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.282745 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 184.715468 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.59 kB |                67.59 kB

Build at: 2023-10-16T03:02:17.436Z - Hash: 55e924f333dde260 - Time: 12814ms
Done in 14.37s.
```
Sun Oct 15 11:02:19 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.106
info New version: 0.0.107
Done in 0.12s.
