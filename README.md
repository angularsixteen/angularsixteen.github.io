Tue Feb  6 05:43:45 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       3.9Gi       390Mi        10Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
450M	.
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
    

Angular CLI: 17.1.2
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.2
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.2
@angular-devkit/build-angular   17.1.2
@angular-devkit/core            17.1.2
@angular-devkit/schematics      17.1.2
@schematics/angular             17.1.2
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
```bash
Latest version:     1.0.30001584
Installed version:  1.0.30001583
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2468.064113 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (e8da504f24f581cd != df76da7e0b1fff22)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001584 != caniuse-lite@1.0.30001583)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/17.1.2/angular-webpack/2ce74cc2dfc4e5c11eddc431c27efdda3b1f71a7.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 423.001472 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 184 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.03 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [225] 2.03 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    748 ms (resolving: 474 ms, restoring: 1 ms, integration: 0 ms, building: 273 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2134 ms (resolving: 472 ms, restoring: 0 ms, integration: 1 ms, building: 1661 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.330731 ms
<t> runtime requirements.chunks: 0.28602 ms
<t> runtime requirements.entries: 2.154468 ms
<t> finish module profiles: 14.592458 ms
<t> compute affected modules: 0.007155 ms
<t> finish modules: 27.473322 ms
<t> report dependency errors and warnings: 7.026914 ms
<t> optimize dependencies: 11.875655 ms
<t> create chunks: 3.298504 ms
<t> compute affected modules with chunk graph: 0.004255 ms
<t> optimize: 37.500629 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 9.551553 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 528.76723 ms
<t> runtime requirements.modules: 0.421992 ms
<t> runtime requirements.chunks: 0.156825 ms
<t> runtime requirements.entries: 0.832085 ms
<t> runtime requirements: 1.784692 ms
<t> hashing: initialize hash: 0.01034 ms
<t> hashing: sort chunks: 0.086047 ms
<t> hashing: hash runtime modules: 1.794296 ms
<t> hashing: hash chunks: 2.069565 ms
<t> hashing: hash digest: 0.053243 ms
<t> hashing: process full hash modules: 0.20502 ms
<t> hashing: 4.458695 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.078705 ms
<t> module assets: 0.152344 ms
<t> create chunk assets: 3.519355 ms
<t> process assets: 4216.407289 ms

LOG from webpack.Compiler
<t> make hook: 3449.465184 ms
<t> finish make hook: 0.231582 ms
<t> finish compilation: 49.16648 ms
<t> seal compilation: 4820.017159 ms
<t> afterCompile hook: 0.152179 ms
<t> emitAssets: 3.912694 ms
<t> emitRecords: 0.090906 ms
<t> done hook: 96.24002 ms
<t> beginIdle: 0.410413 ms

LOG from webpack.Compilation.ModuleProfile
     | 157 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 158 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 260 ms (parallelism 2.8) resolve to new modules > ./src/main.ts
<i> 912 ms resolve to new modules
<i>  |  | 418 ms (parallelism 4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 418 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 75 ms (parallelism 3.6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 344 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 200 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 210 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 325 ms (parallelism 4.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 325 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 314 ms (parallelism 3.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 305 ms (parallelism 3.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 181 ms (parallelism 4.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 804 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 2121 ms build modules
+ 3 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1157 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.191815 ms
<t> figure out provided exports: 13.685924 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 7.493056 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.248889 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.309947 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.612685 ms
<t> trace exports usage in graph: 5.336825 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.277821 ms
<t> visitModules: visiting: 2.165201 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.270863 ms
<t> connectChunkGroups: 0.003124 ms
<t> cleanup: 0.001412 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.0323 ms
<t> modules: 3.005578 ms
<t> queue: 0.006577 ms
<t> maxSize: 0.044598 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.223902 ms
<t> sort relevant modules: 0.136373 ms
<t> find modules to concatenate: 8.904674 ms
<t> sort concat configurations: 0.003888 ms
<t> create concatenated modules: 6.990246 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 218.370909 ms
<t> optimize asset: polyfills.js: 743.922058 ms
<t> optimize asset: main.js: 3684.462991 ms
<t> optimize js assets: 3741.58768 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.158005 ms
<t> optimize css assets: 21.180935 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1157)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3140/3694) entries shared via 3 shared snapshots (515 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 59% (147/251) entries shared via 9 shared snapshots (14 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 13% (122/943) entries shared via 11 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3192/3960) entries shared via 177 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3686/4215) entries shared via 188 shared snapshots (741 times referenced)

2024-02-06 17:44:18: webpack 5.89.0 compiled in 10758 ms (43bd23f68444a62c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 461.881854 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 8.608329 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.387793 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.208058 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.229139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.315914 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.514801 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/interval.js': 1.240004 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/zipAll': 1.332326 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.98265 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 12.025325 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 12.154063 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 273.395341 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 1 files, 30 MiB)
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
main.js             | main          | 183.85 kB |                48.88 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 287.75 kB |                68.43 kB

Build at: 2024-02-06T22:44:19.296Z - Hash: 43bd23f68444a62c - Time: 11739ms
Done in 13.40s.
```
Tue Feb  6 05:44:21 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.398
info New version: 0.0.399
Done in 0.12s.
