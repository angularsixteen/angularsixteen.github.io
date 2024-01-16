Tue Jan 16 09:28:32 AM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.9Gi       1.6Gi       524Mi        11Gi        12Gi
Swap:          8.0Gi       271Mi       7.7Gi
System Storage
483M	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.10
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.9
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.10
@angular-devkit/build-angular   17.0.10
@angular-devkit/core            17.0.10
@angular-devkit/schematics      17.0.10
@angular/cli                    17.0.10
@schematics/angular             17.0.10
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.49s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
```bash
Latest version:     1.0.30001577
Installed version:  1.0.30001576
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2211.483937 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (abf587715b8efb0d != 8f810d185c3f43b2)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001577 != caniuse-lite@1.0.30001576)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/17.0.10/angular-webpack/6ad9a00449746a725a7e01a985967a8a1c301398.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1440.243375 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 182 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 183 KiB = runtime.js 906 bytes main.js 182 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.02 MiB [initial] [rendered]
  ./src/main.ts + 87 modules [627] 2.02 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1839 ms (resolving: 1510 ms, restoring: 1 ms, integration: 0 ms, building: 328 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2683 ms (resolving: 1508 ms, restoring: 1 ms, integration: 0 ms, building: 1174 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.25797 ms
<t> runtime requirements.chunks: 0.207146 ms
<t> runtime requirements.entries: 1.456832 ms
<t> finish module profiles: 17.851324 ms
<t> compute affected modules: 0.013346 ms
<t> finish modules: 23.880011 ms
<t> report dependency errors and warnings: 5.581731 ms
<t> optimize dependencies: 17.725644 ms
<t> create chunks: 3.463917 ms
<t> compute affected modules with chunk graph: 0.00493 ms
<t> optimize: 34.322662 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 9.877906 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 525.150251 ms
<t> runtime requirements.modules: 0.277284 ms
<t> runtime requirements.chunks: 0.106327 ms
<t> runtime requirements.entries: 0.540149 ms
<t> runtime requirements: 1.166297 ms
<t> hashing: initialize hash: 0.007914 ms
<t> hashing: sort chunks: 0.060602 ms
<t> hashing: hash runtime modules: 1.32796 ms
<t> hashing: hash chunks: 1.489294 ms
<t> hashing: hash digest: 0.049937 ms
<t> hashing: process full hash modules: 0.203218 ms
<t> hashing: 3.346156 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.074584 ms
<t> module assets: 0.15525 ms
<t> create chunk assets: 3.766726 ms
<t> process assets: 4244.200766 ms

LOG from webpack.Compiler
<t> make hook: 4261.358867 ms
<t> finish make hook: 0.191346 ms
<t> finish compilation: 47.388869 ms
<t> seal compilation: 4845.187787 ms
<t> afterCompile hook: 0.151159 ms
<t> emitAssets: 4.781949 ms
<t> emitRecords: 0.129719 ms
<t> done hook: 132.443805 ms
<t> beginIdle: 0.578358 ms

LOG from webpack.Compilation.ModuleProfile
<w>  | 503 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<w>  | 504 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<w>  | 506 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 45 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 80 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 81 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<w> 1949 ms resolve to new modules
     | 44 ms (parallelism 4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
    73 ms resolve to existing modules
<i>  |  | 406 ms (parallelism 2.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 406 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 94 ms (parallelism 3.5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 379 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 300 ms (parallelism 3.2) build modules > ./src/main.ts
<i>  | 315 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 282 ms (parallelism 3.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 282 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 85 ms (parallelism 3.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 161 ms (parallelism 4.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 126 ms (parallelism 5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 47 ms (parallelism 5.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 49 ms (parallelism 5.6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 41 ms (parallelism 5.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 508 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 1893 ms build modules
+ 6 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (516 real resolves with 0 cached but invalid, 1115 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.607556 ms
<t> figure out provided exports: 12.291243 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.807419 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.06103 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.367358 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.145567 ms
<t> trace exports usage in graph: 10.629159 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.366559 ms
<t> visitModules: visiting: 2.296026 ms
    209 queue items processed (91 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.412184 ms
<t> connectChunkGroups: 0.003224 ms
<t> cleanup: 0.001545 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.037846 ms
<t> modules: 3.012244 ms
<t> queue: 0.006525 ms
<t> maxSize: 0.045915 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.251756 ms
<t> sort relevant modules: 0.152659 ms
<t> find modules to concatenate: 5.823339 ms
<t> sort concat configurations: 0.002812 ms
<t> create concatenated modules: 7.779092 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 275.132798 ms
<t> optimize asset: polyfills.js: 827.042372 ms
<t> optimize asset: main.js: 3741.035755 ms
<t> optimize js assets: 3803.318542 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.684647 ms
<t> optimize css assets: 20.991553 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1115)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3133/3685) entries shared via 3 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 63% (149/236) entries shared via 10 shared snapshots (15 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 14% (136/941) entries shared via 10 shared snapshots (21 times referenced)
    Managed files snapshot optimization: 81% (3183/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 90% (3804/4214) entries shared via 188 shared snapshots (743 times referenced)

2024-01-16 09:29:09: webpack 5.89.0 compiled in 11320 ms (9ccaedcca0f063f9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 691.957717 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 12.380907 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.391128 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 5.757555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 9.617421 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022|request=|@angular/common': 1.102939 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.07605 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.070841 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.381581 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/switchMap.js': 1.666285 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/distinct': 1.156852 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/max.js': 2.228223 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|0d92ed4ae47266c2|runtime': 11.870014 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.219408 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 291.559988 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1038 items, 1 files, 30 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
- Generating index html...
Unable to locate stylesheet: /home/kushal/src/angular/angularsixteen/docs/assts/css/pico.min.css
31 rules skipped due to selector errors:
  :where() -> Empty sub-selector
  [role=link]:is([aria-current],,) -> Empty sub-selector
  a:is([aria-current],,) -> Empty sub-selector
  [role=link].secondary:is([aria-current],,) -> Empty sub-selector
  a.secondary:is([aria-current],,) -> Empty sub-selector
  [role=link].contrast:is([aria-current],,) -> Empty sub-selector
  a.contrast:is([aria-current],,) -> Empty sub-selector
  [role=button]:is([aria-current],,) -> Empty sub-selector
  button:is([aria-current],,) -> Empty sub-selector
  input[type=button]:is([aria-current],,) -> Empty sub-selector
  input[type=reset]:is([aria-current],,) -> Empty sub-selector
  input[type=submit]:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).secondary:is([aria-current],,) -> Empty sub-selector
  input[type=reset]:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).contrast:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).outline:is([aria-current],,) -> Empty sub-selector
  input[type=reset].outline:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).outline.secondary:is([aria-current],,) -> Empty sub-selector
  input[type=reset].outline:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).outline.contrast:is([aria-current],,) -> Empty sub-selector
  :where(select,textarea):is() -> Empty sub-selector
  input:not([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[readonly]):is() -> Empty sub-selector
  :where(select,textarea):is() -> Empty sub-selector
  input:not([type=submit],[type=button],[type=reset],[role=switch],[readonly]):is() -> Empty sub-selector
  :where(input,select,textarea)[aria-invalid=false]:is() -> Empty sub-selector
  :where(input,select,textarea)[aria-invalid=true]:is() -> Empty sub-selector
  [type=file]:is() -> Empty sub-selector
  [type=file]:is() -> Empty sub-selector
  [type=file]:is() -> Empty sub-selector
  dialog article .close:is([aria-current],,) -> Empty sub-selector
  nav :where(a,[role=link]):is([aria-current],,) -> Empty sub-selector
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 182.31 kB |                48.56 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.21 kB |                68.10 kB

Build at: 2024-01-16T14:29:10.985Z - Hash: 9ccaedcca0f063f9 - Time: 12607ms
Done in 14.14s.
```
