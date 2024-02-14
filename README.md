Wed Feb 14 02:14:36 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       1.5Gi       585Mi        10Gi        11Gi
Swap:          8.0Gi       1.2Gi       6.8Gi
System Storage
456M	.
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
    

Angular CLI: 17.1.3
Node: 20.11.1
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.3
@angular-devkit/build-angular   17.1.3
@angular-devkit/core            17.1.3
@angular-devkit/schematics      17.1.3
@schematics/angular             17.1.3
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.47s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
```bash
Latest version:     1.0.30001587
Installed version:  1.0.30001587
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.1.3/angular-webpack/72a649899fec69e7f4159b63ad55c05438cb199a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.1.3/angular-webpack/72a649899fec69e7f4159b63ad55c05438cb199a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2101.414525 ms
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
chunk {179} (runtime: runtime) main.js (main) 2.06 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [225] 2.06 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    294 ms (resolving: 42 ms, restoring: 1 ms, integration: 0 ms, building: 250 ms, storing: 1 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    4060 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 4019 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.23086 ms
<t> runtime requirements.chunks: 0.165395 ms
<t> runtime requirements.entries: 1.204641 ms
<t> finish module profiles: 10.746083 ms
<t> compute affected modules: 0.007175 ms
<t> finish modules: 18.350889 ms
<t> report dependency errors and warnings: 5.159618 ms
<t> optimize dependencies: 13.496847 ms
<t> create chunks: 3.005897 ms
<t> compute affected modules with chunk graph: 0.005533 ms
<t> optimize: 40.588393 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.666234 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 490.09403 ms
<t> runtime requirements.modules: 0.266107 ms
<t> runtime requirements.chunks: 0.101174 ms
<t> runtime requirements.entries: 0.558436 ms
<t> runtime requirements: 1.173906 ms
<t> hashing: initialize hash: 0.0097 ms
<t> hashing: sort chunks: 0.105813 ms
<t> hashing: hash runtime modules: 1.495599 ms
<t> hashing: hash chunks: 2.084409 ms
<t> hashing: hash digest: 0.053528 ms
<t> hashing: process full hash modules: 0.208255 ms
<t> hashing: 4.202731 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.115284 ms
<t> module assets: 0.159709 ms
<t> create chunk assets: 3.512488 ms
<t> process assets: 4241.187073 ms

LOG from webpack.Compiler
<t> make hook: 5590.677834 ms
<t> finish make hook: 0.186447 ms
<t> finish compilation: 34.316704 ms
<t> seal compilation: 4808.2537680000005 ms
<t> afterCompile hook: 0.144864 ms
<t> emitAssets: 4.049503 ms
<t> emitRecords: 0.073175 ms
<t> done hook: 106.003172 ms
<t> beginIdle: 0.438988 ms

LOG from webpack.Compilation.ModuleProfile
     | 58 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 58 ms (parallelism 7.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 36 ms (parallelism 9) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 36 ms (parallelism 9) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
    516 ms resolve to new modules
     | 32 ms (parallelism 10.1) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
    56 ms resolve to existing modules
<e>  |  | 1018 ms (parallelism 3.9) build modules > ./src/styles.scss?ngGlobalStyle
<e>  | 1018 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 76 ms (parallelism 3.3) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 63 ms (parallelism 7.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 356 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 200 ms (parallelism 3.2) build modules > ./src/main.ts
     | 213 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 312 ms (parallelism 4.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 312 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 726 ms (parallelism 4.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 750 ms (parallelism 4.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 750 ms (parallelism 4.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 41 ms (parallelism 12.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 60 ms (parallelism 8.3) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
<w>  | 2351 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<e> 4264 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1165 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.06009 ms
<t> figure out provided exports: 11.206129 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.83438 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.515794 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.146458 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.110226 ms
<t> trace exports usage in graph: 6.755549 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.174225 ms
<t> visitModules: visiting: 2.008906 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.119219 ms
<t> connectChunkGroups: 0.002574 ms
<t> cleanup: 0.001489 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.045305 ms
<t> modules: 2.842354 ms
<t> queue: 0.005668 ms
<t> maxSize: 0.045178 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.236574 ms
<t> sort relevant modules: 0.105214 ms
<t> find modules to concatenate: 9.79508 ms
<t> sort concat configurations: 0.002223 ms
<t> create concatenated modules: 8.5304 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 216.23115 ms
<t> optimize asset: polyfills.js: 960.595081 ms
<t> optimize asset: main.js: 3743.407313 ms
<t> optimize js assets: 3796.094607 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.155804 ms
<t> optimize css assets: 14.654248 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1165)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3131/3694) entries shared via 2 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (140/251) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 12% (114/943) entries shared via 11 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3196/3960) entries shared via 178 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3683/4215) entries shared via 188 shared snapshots (742 times referenced)

2024-02-14 14:15:11: webpack 5.89.0 compiled in 12521 ms (c369b594cf4097c6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2039.483337 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 68.963877 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.321166 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.28094 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.891721 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.983998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.054668 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.373425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/iif.js': 1.276534 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/combineAll': 1.166612 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.227897 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/share.js': 3.003251 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 11.518076 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.885272 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 218.894538 ms
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
main.js             | main          | 183.84 kB |                48.86 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 287.74 kB |                68.41 kB

Build at: 2024-02-14T19:15:13.824Z - Hash: c369b594cf4097c6 - Time: 15094ms
Done in 16.66s.
```
Wed Feb 14 02:15:15 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.418
info New version: 0.0.419
Done in 0.12s.
