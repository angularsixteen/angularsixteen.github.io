Thu Dec 21 04:25:37 PM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       2.0Gi       301Mi        11Gi        12Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
495M	.
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
    

Angular CLI: 17.0.7
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.7
@angular-devkit/build-angular   17.0.7
@angular-devkit/core            17.0.7
@angular-devkit/schematics      17.0.7
@angular/cli                    17.0.7
@schematics/angular             17.0.7
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.49s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.30s.
```
```bash
Latest version:     1.0.30001571
Installed version:  1.0.30001570
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.0.8/angular-webpack/d850c603d4cb03dcead57a4473cf1f7d2f71ba05.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.0.8/angular-webpack/d850c603d4cb03dcead57a4473cf1f7d2f71ba05/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2386.706539 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 183 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 184 KiB = runtime.js 906 bytes main.js 183 KiB
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
    1763 ms (resolving: 43 ms, restoring: 1 ms, integration: 0 ms, building: 1719 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    4316 ms (resolving: 40 ms, restoring: 0 ms, integration: 0 ms, building: 4275 ms, storing: 1 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.286342 ms
<t> runtime requirements.chunks: 0.194215 ms
<t> runtime requirements.entries: 1.556259 ms
<t> finish module profiles: 9.756303 ms
<t> compute affected modules: 0.00741 ms
<t> finish modules: 20.488089 ms
<t> report dependency errors and warnings: 5.324058 ms
<t> optimize dependencies: 11.130257 ms
<t> create chunks: 6.543539 ms
<t> compute affected modules with chunk graph: 0.04845 ms
<t> optimize: 31.753039 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.305892 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 506.953501 ms
<t> runtime requirements.modules: 0.302835 ms
<t> runtime requirements.chunks: 0.117984 ms
<t> runtime requirements.entries: 0.61415 ms
<t> runtime requirements: 1.299869 ms
<t> hashing: initialize hash: 0.009136 ms
<t> hashing: sort chunks: 0.075521 ms
<t> hashing: hash runtime modules: 1.559875 ms
<t> hashing: hash chunks: 1.575795 ms
<t> hashing: hash digest: 0.056988 ms
<t> hashing: process full hash modules: 0.223329 ms
<t> hashing: 3.734039 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.081851 ms
<t> module assets: 0.173661 ms
<t> create chunk assets: 4.239537 ms
<t> process assets: 4435.611889 ms

LOG from webpack.Compiler
<t> make hook: 7485.024194 ms
<t> finish make hook: 0.142101 ms
<t> finish compilation: 35.652901 ms
<t> seal compilation: 5011.862803 ms
<t> afterCompile hook: 0.155369 ms
<t> emitAssets: 10.013904 ms
<t> emitRecords: 0.080591 ms
<t> done hook: 153.881029 ms
<t> beginIdle: 0.457695 ms

LOG from webpack.Compilation.ModuleProfile
     | 121 ms (parallelism 2.5) resolve to new modules > ./src/main.ts
<i>  | 364 ms (parallelism 5.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 83 ms (parallelism 5.1) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 83 ms (parallelism 5.1) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i> 903 ms resolve to new modules
<i>  | 363 ms (parallelism 5.8) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 423 ms resolve to existing modules
<w>  |  | 899 ms (parallelism 4.8) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 899 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 437 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 151 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 151 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2209 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 472 ms (parallelism 3.9) build modules > ./src/main.ts
<i>  | 494 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w>  |  | 715 ms (parallelism 4.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 715 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 371 ms (parallelism 5.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 364 ms (parallelism 5.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 96 ms (parallelism 5.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 96 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 194 ms (parallelism 5.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 155 ms (parallelism 5.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1277 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 5597 ms build modules
+ 6 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (516 real resolves with 0 cached but invalid, 1172 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.344988 ms
<t> figure out provided exports: 12.405106 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.979125 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 15.310729 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.559081 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.709164 ms
<t> trace exports usage in graph: 5.325665 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.266297 ms
<t> visitModules: visiting: 5.296032 ms
    209 queue items processed (91 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.41419 ms
<t> connectChunkGroups: 0.003955 ms
<t> cleanup: 0.001562 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.050797 ms
<t> modules: 3.065467 ms
<t> queue: 0.00695 ms
<t> maxSize: 0.046368 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.25535 ms
<t> sort relevant modules: 0.144917 ms
<t> find modules to concatenate: 5.769245 ms
<t> sort concat configurations: 0.002709 ms
<t> create concatenated modules: 5.457626 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 228.795211 ms
<t> optimize asset: polyfills.js: 913.738058 ms
<t> optimize asset: main.js: 3916.863579 ms
<t> optimize js assets: 3979.927598 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.935501 ms
<t> optimize css assets: 19.822512 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1172)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3133/3685) entries shared via 3 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 59% (139/236) entries shared via 9 shared snapshots (14 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 13% (118/941) entries shared via 9 shared snapshots (20 times referenced)
    Managed files snapshot optimization: 80% (3182/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 87% (3669/4214) entries shared via 186 shared snapshots (743 times referenced)

2023-12-21 16:26:31: webpack 5.89.0 compiled in 14910 ms (5c7a2401469d3c75)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1935.425978 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 77.403185 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.50905 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.107822 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 6.72285 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.234943 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.200053 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.30134 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/never.js': 1.185055 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/combineLatestAll': 1.305864 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.981065 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|0d92ed4ae47266c2|runtime': 13.58395 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 8.696199 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 250.426848 ms
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
main.js             | main          | 182.79 kB |                48.65 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.69 kB |                68.20 kB

Build at: 2023-12-21T21:26:33.622Z - Hash: 5c7a2401469d3c75 - Time: 17478ms
Done in 19.37s.
```
Thu Dec 21 04:26:35 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.241
info New version: 0.0.242
Done in 0.12s.
