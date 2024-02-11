Sun Feb 11 12:01:48 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       1.6Gi       304Mi        12Gi        12Gi
Swap:          8.0Gi       512Ki       8.0Gi
System Storage
454M	.
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
Node: 20.11.0
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
    
Done in 0.49s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.27s.
```
```bash
Latest version:     1.0.30001585
Installed version:  1.0.30001585
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1807.337125 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (6902d5d0bd3feba9 != d02db026618d4727)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1155.037877 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.552221 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (30 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (225 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.66544 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.85344 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.016323 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.133979 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.954269 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.188772 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (30 MiB): 77.953872 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/app/app.component.scss?ngResource': 6.743161 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (225 KiB): 89.050056 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 184 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.03 MiB [initial]
  ./src/main.ts + 88 modules [225] 2.03 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2079 ms (resolving: 1301 ms, restoring: 0 ms, integration: 1 ms, building: 777 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    46 new snapshots created
    39% root snapshot uncached (760 / 1927)
    16% children snapshot uncached (361 / 2287)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (287/374) entries shared via 1 shared snapshots (40 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (110/247) entries shared via 6 shared snapshots (10 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 48% (100/207) entries shared via 9 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 72% (137/190) entries shared via 12 shared snapshots (22 times referenced)
    Managed missing snapshot optimization: 79% (194/247) entries shared via 13 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.407691 ms
<t> runtime requirements.chunks: 0.209283 ms
<t> runtime requirements.entries: 1.72865 ms
<t> finish module profiles: 9.11742 ms
<t> compute affected modules: 0.008375 ms
<t> finish modules: 37.54668 ms
<t> report dependency errors and warnings: 3.785203 ms
<t> optimize dependencies: 11.985115 ms
<t> create chunks: 2.693706 ms
<t> compute affected modules with chunk graph: 0.004303 ms
<t> optimize: 32.247581 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 10.75364 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.746814 ms
<t> runtime requirements.modules: 0.340755 ms
<t> runtime requirements.chunks: 0.152572 ms
<t> runtime requirements.entries: 0.536361 ms
<t> runtime requirements: 1.321841 ms
<t> hashing: initialize hash: 0.00603 ms
<t> hashing: sort chunks: 0.047935 ms
<t> hashing: hash runtime modules: 1.093545 ms
<t> hashing: hash chunks: 1.192688 ms
<t> hashing: hash digest: 0.040054 ms
<t> hashing: process full hash modules: 0.166459 ms
<t> hashing: 2.714205 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05751 ms
<t> module assets: 0.152673 ms
<t> create chunk assets: 0.942592 ms
<t> process assets: 312.709892 ms

LOG from webpack.Compiler
<t> make hook: 2091.980828 ms
<t> finish make hook: 0.120804 ms
<t> finish compilation: 50.514529 ms
<t> seal compilation: 378.08992 ms
<t> afterCompile hook: 0.106387 ms
<t> emitAssets: 3.346173 ms
<t> emitRecords: 0.083627 ms
<t> done hook: 80.12921 ms
<t> beginIdle: 0.375333 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 434 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 436 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 435 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i> 1421 ms resolve to new modules
     |  | 101 ms (parallelism 7.7) build modules > ./src/styles.scss?ngGlobalStyle
     | 101 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 79 ms (parallelism 8.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 79 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    196 ms build modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    3% really resolved (43 real resolves with 43 cached but invalid, 1641 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.85706 ms
<t> figure out provided exports: 10.482909 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00951 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.230306 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.705407 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.523986 ms
<t> trace exports usage in graph: 4.307457 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.006795 ms
<t> visitModules: visiting: 1.78671 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.85624 ms
<t> connectChunkGroups: 0.001979 ms
<t> cleanup: 0.001133 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048008 ms
<t> modules: 2.543171 ms
<t> queue: 0.004487 ms
<t> maxSize: 0.030539 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.007149 ms
<t> sort relevant modules: 0.098699 ms
<t> find modules to concatenate: 4.630409 ms
<t> sort concat configurations: 0.002161 ms
<t> create concatenated modules: 6.934036 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.126935 ms
+ 1 hidden lines

2024-02-11 12:02:08: webpack 5.89.0 compiled in 4301 ms (319ab559ecab30f7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 425.146981 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.983407 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 46 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 43.722567 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 2 files, 30 MiB)
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
main.js             | main          | 183.82 kB |                48.80 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 287.72 kB |                68.35 kB

Build at: 2024-02-11T17:02:09.232Z - Hash: 319ab559ecab30f7 - Time: 4978ms
Done in 6.33s.
```
Sun Feb 11 12:02:12 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.407
info New version: 0.0.408
Done in 0.12s.
