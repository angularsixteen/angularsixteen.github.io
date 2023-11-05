Sat Nov  4 09:37:18 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       2.7Gi       374Mi       8.6Gi        10Gi
Swap:          8.0Gi       557Mi       7.5Gi
System Storage
501M	.
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
    

Angular CLI: 16.2.9
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.12
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.9
@angular-devkit/build-angular   16.2.9
@angular-devkit/core            16.2.9
@angular-devkit/schematics      16.2.9
@angular/cli                    16.2.9
@schematics/angular             16.2.9
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
Latest version:     1.0.30001561
Installed version:  1.0.30001559
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.9/angular-webpack/efc7ab2430ddc78c9a03f546d145d7805f07fdd6.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.9/angular-webpack/efc7ab2430ddc78c9a03f546d145d7805f07fdd6/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1559.1102759999999 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 180 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 181 KiB = runtime.js 906 bytes main.js 180 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 1.87 MiB [initial] [rendered]
  ./src/main.ts + 89 modules [768] 1.87 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    962 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 932 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2772 ms (resolving: 28 ms, restoring: 0 ms, integration: 0 ms, building: 2744 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.165982 ms
<t> runtime requirements.chunks: 0.125652 ms
<t> runtime requirements.entries: 0.985395 ms
<t> finish module profiles: 5.740165 ms
<t> compute affected modules: 0.004673 ms
<t> finish modules: 18.761126 ms
<t> report dependency errors and warnings: 3.846177 ms
<t> optimize dependencies: 10.299628 ms
<t> create chunks: 2.20299 ms
<t> compute affected modules with chunk graph: 0.003509 ms
<t> optimize: 22.659389 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.642619 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 344.435166 ms
<t> runtime requirements.modules: 0.281719 ms
<t> runtime requirements.chunks: 0.090433 ms
<t> runtime requirements.entries: 0.454734 ms
<t> runtime requirements: 1.053662 ms
<t> hashing: initialize hash: 0.007206 ms
<t> hashing: sort chunks: 0.054687 ms
<t> hashing: hash runtime modules: 1.169681 ms
<t> hashing: hash chunks: 1.176277 ms
<t> hashing: hash digest: 0.045034 ms
<t> hashing: process full hash modules: 0.164786 ms
<t> hashing: 2.80136 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061804 ms
<t> module assets: 0.13199 ms
<t> create chunk assets: 3.155465 ms
<t> process assets: 2750.607895 ms

LOG from webpack.Compiler
<t> make hook: 4942.377593 ms
<t> finish make hook: 0.091817 ms
<t> finish compilation: 28.389315 ms
<t> seal compilation: 3146.206631 ms
<t> afterCompile hook: 0.234462 ms
<t> emitAssets: 6.21904 ms
<t> emitRecords: 0.110635 ms
<t> done hook: 109.002071 ms
<t> beginIdle: 0.35677 ms

LOG from webpack.Compilation.ModuleProfile
     | 81 ms (parallelism 2.5) resolve to new modules > ./src/main.ts
     | 34 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 35 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
    437 ms resolve to new modules
<w>  |  | 684 ms (parallelism 4) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 684 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 238 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 135 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 84 ms (parallelism 6.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1493 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 319 ms (parallelism 4.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 319 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 266 ms (parallelism 3.8) build modules > ./src/main.ts
<i>  | 283 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 365 ms (parallelism 4.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 351 ms (parallelism 4.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 364 ms (parallelism 4.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 64 ms (parallelism 9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 38 ms (parallelism 16.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1181 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 3969 ms build modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1172 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.82679 ms
<t> figure out provided exports: 13.530596 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.406587 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.885929 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.041255 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.487764 ms
<t> trace exports usage in graph: 3.419587 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.840621 ms
<t> visitModules: visiting: 1.425763 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.494772 ms
<t> connectChunkGroups: 0.002098 ms
<t> cleanup: 0.001158 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035031 ms
<t> modules: 1.934968 ms
<t> queue: 0.004342 ms
<t> maxSize: 0.02845 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.801688 ms
<t> sort relevant modules: 0.096905 ms
<t> find modules to concatenate: 4.724138 ms
<t> sort concat configurations: 0.002811 ms
<t> create concatenated modules: 3.892222 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 161.034002 ms
<t> optimize asset: polyfills.js: 586.113869 ms
<t> optimize asset: main.js: 2339.5979310000002 ms
<t> optimize js assets: 2398.6285120000002 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.025835 ms
<t> optimize css assets: 12.125874 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1172)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 102 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3127/3677) entries shared via 3 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 46% (99/215) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 13% (118/939) entries shared via 10 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3182/3946) entries shared via 176 shared snapshots (719 times referenced)
    Managed missing snapshot optimization: 87% (3683/4212) entries shared via 188 shared snapshots (742 times referenced)

2023-11-04 21:37:49: webpack 5.88.2 compiled in 9667 ms (2b96e4a28e986a52)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1042.094796 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 40.919327 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.251813 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.661842 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.727025 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.038386 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.548827 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.054803 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js': 1.083836 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/tslib/tslib.es6.js': 1.490379 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 8.076001 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.248884 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 154.33772 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
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
main.js             | main          | 180.24 kB |                48.24 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 284.17 kB |                67.75 kB

Build at: 2023-11-05T01:37:51.347Z - Hash: 2b96e4a28e986a52 - Time: 11122ms
Done in 12.63s.
```
