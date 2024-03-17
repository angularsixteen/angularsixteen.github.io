Sun Mar 17 10:28:45 AM EDT 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.4Gi       1.2Gi       616Mi        10Gi        10Gi
Swap:          8.0Gi       1.0Gi       7.0Gi
System Storage
454M	.
```
```bash
yarn run v1.22.22
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.3.0
Node: 20.11.1
Package Manager: yarn 1.22.22
OS: linux x64

Angular: 17.3.0
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1703.0
@angular-devkit/build-angular   17.3.0
@angular-devkit/core            17.3.0
@angular-devkit/schematics      17.3.0
@schematics/angular             17.3.0
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
```bash
Latest version:     1.0.30001598
Installed version:  1.0.30001597
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1705.15684 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (d2319f65bcab2227 != 04cb68f126d38721)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001598 != caniuse-lite@1.0.30001597)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/17.3.0/angular-webpack/f50d8299e66f2ff72c4c443f0ffe5aa71cd9f041.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1240.435659 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 185 KiB {792} [emitted] (name: main)
asset styles.css 70 KiB {869} [emitted] (name: styles)
asset polyfills.js 33 KiB {461} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {121} [emitted] (name: runtime)
Entrypoint main 186 KiB = runtime.js 906 bytes main.js 185 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {121} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
chunk {461} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [935] 104 KiB {461} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1530 ms (resolving: 1410 ms, restoring: 0 ms, integration: 0 ms, building: 120 ms, storing: 0 ms)
chunk {792} (runtime: runtime) main.js (main) 2.08 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [496] 2.08 MiB {792} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {869} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [888] 50 bytes {869} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2354 ms (resolving: 1282 ms, restoring: 0 ms, integration: 0 ms, building: 1072 ms, storing: 0 ms)
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.208263 ms
<t> runtime requirements.chunks: 0.148911 ms
<t> runtime requirements.entries: 1.022315 ms
<t> finish module profiles: 5.98298 ms
<t> compute affected modules: 0.00555 ms
<t> finish modules: 18.35043 ms
<t> report dependency errors and warnings: 3.710004 ms
<t> optimize dependencies: 8.33806 ms
<t> create chunks: 2.707094 ms
<t> compute affected modules with chunk graph: 0.004399 ms
<t> optimize: 18.927432 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 5.738945 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 376.668506 ms
<t> runtime requirements.modules: 0.235412 ms
<t> runtime requirements.chunks: 0.100266 ms
<t> runtime requirements.entries: 0.563399 ms
<t> runtime requirements: 1.113699 ms
<t> hashing: initialize hash: 0.007554 ms
<t> hashing: sort chunks: 0.063539 ms
<t> hashing: hash runtime modules: 1.200363 ms
<t> hashing: hash chunks: 1.295646 ms
<t> hashing: hash digest: 0.045623 ms
<t> hashing: process full hash modules: 0.172267 ms
<t> hashing: 2.9714 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065123 ms
<t> module assets: 0.133031 ms
<t> create chunk assets: 3.041186 ms
<t> process assets: 3240.445123 ms

LOG from webpack.Compiler
<t> make hook: 3255.819017 ms
<t> finish make hook: 0.119386 ms
<t> finish compilation: 28.091233 ms
<t> seal compilation: 3661.867871 ms
<t> afterCompile hook: 0.125961 ms
<t> emitAssets: 3.716944 ms
<t> emitRecords: 0.063283 ms
<t> done hook: 96.301474 ms
<t> beginIdle: 0.417358 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 427 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 472 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 470 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 34 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 34 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 34 ms (parallelism 9) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 34 ms (parallelism 9) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i> 1699 ms resolve to new modules
     | 31 ms (parallelism 9.8) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
    48 ms resolve to existing modules
<i>  |  | 265 ms (parallelism 4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 265 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 218 ms (parallelism 4.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 218 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 144 ms (parallelism 3.3) build modules > ./src/main.ts
     | 154 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 120 ms (parallelism 4.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 138 ms (parallelism 6.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 114 ms (parallelism 4.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 375 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 1219 ms build modules
+ 2 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1163 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.929658 ms
<t> figure out provided exports: 12.405751 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.238139 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.271294 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.488698 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.470336 ms
<t> trace exports usage in graph: 3.99406 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.097966 ms
<t> visitModules: visiting: 1.906318 ms
    209 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.016607 ms
<t> connectChunkGroups: 0.002372 ms
<t> cleanup: 0.001256 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.023293 ms
<t> modules: 2.065559 ms
<t> queue: 0.00449 ms
<t> maxSize: 0.03055 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.877755 ms
<t> sort relevant modules: 0.078497 ms
<t> find modules to concatenate: 4.03563 ms
<t> sort concat configurations: 0.001844 ms
<t> create concatenated modules: 4.44573 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 167.720287 ms
<t> optimize asset: polyfills.js: 632.261016 ms
<t> optimize asset: main.js: 2834.952606 ms
<t> optimize js assets: 2876.129536 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.706656 ms
<t> optimize css assets: 14.567702 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1163)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3131/3692) entries shared via 2 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (140/251) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 12% (116/939) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3190/3955) entries shared via 177 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3686/4215) entries shared via 188 shared snapshots (741 times referenced)

2024-03-17 10:29:20: webpack 5.90.3 compiled in 8623 ms (529d3c8a4a031b2d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 389.4663 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 9.927046 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.182566 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.775024 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.040783 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.568917 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 3.230396 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.77589 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.083306 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/fromEvent.js': 1.026631 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.925723 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 9.846234 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk792': 6.022299 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 208.326579 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 1 files, 31 MiB)
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

Initial chunk files | Names         |  Raw size | Estimated transfer size
main.js             | main          | 184.66 kB |                49.00 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

                    | Initial total | 288.56 kB |                68.53 kB

Build at: 2024-03-17T14:29:21.618Z - Hash: 529d3c8a4a031b2d - Time: 9432ms
Done in 10.97s.
```
Sun Mar 17 10:29:23 AM EDT 2024
yarn version v1.22.22
info Current version: 0.0.502
info New version: 0.0.503
Done in 0.12s.
