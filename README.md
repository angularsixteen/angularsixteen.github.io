Sat Mar 16 10:20:47 AM EDT 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.8Gi       1.5Gi       329Mi        11Gi        12Gi
Swap:          8.0Gi       768Ki       8.0Gi
System Storage
453M	.
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
    
Done in 0.49s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
```bash
Latest version:     1.0.30001597
Installed version:  1.0.30001597
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1573.76276 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (22528d4da38c9840 != 66593c376264b741)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1244.903102 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.654514 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (30.6 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.34696 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 10.305527 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.71088 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.279353 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.334171 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.256452 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.002078 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.259084 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators|request=|./audit': 3.961514 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (30.6 MiB): 88.8031 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 185 KiB {792} [emitted] (name: main)
asset styles.css 70 KiB {869} [emitted] (name: styles)
asset polyfills.js 33 KiB {461} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {121} [emitted] (name: runtime)
Entrypoint main 186 KiB = runtime.js 906 bytes main.js 185 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {121} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
chunk {461} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {792} (runtime: runtime) main.js (main) 2.08 MiB [initial]
  ./src/main.ts + 88 modules [496] 2.08 MiB {792} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {869} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [888] 50 bytes {869} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2110 ms (resolving: 1375 ms, restoring: 0 ms, integration: 0 ms, building: 735 ms, storing: 0 ms)
  

LOG from webpack.FileSystemInfo
    46 new snapshots created
    39% root snapshot uncached (760 / 1925)
    16% children snapshot uncached (359 / 2285)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (287/372) entries shared via 1 shared snapshots (40 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (110/247) entries shared via 6 shared snapshots (10 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 46% (94/203) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 72% (133/185) entries shared via 12 shared snapshots (22 times referenced)
    Managed missing snapshot optimization: 79% (194/247) entries shared via 13 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.252858 ms
<t> runtime requirements.chunks: 0.124098 ms
<t> runtime requirements.entries: 0.946681 ms
<t> finish module profiles: 3.580839 ms
<t> compute affected modules: 0.004747 ms
<t> finish modules: 18.389036 ms
<t> report dependency errors and warnings: 3.584177 ms
<t> optimize dependencies: 8.101199 ms
<t> create chunks: 2.658272 ms
<t> compute affected modules with chunk graph: 0.004321 ms
<t> optimize: 20.942634 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 5.989655 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.593192 ms
<t> runtime requirements.modules: 0.18007 ms
<t> runtime requirements.chunks: 0.076475 ms
<t> runtime requirements.entries: 0.408097 ms
<t> runtime requirements: 0.830688 ms
<t> hashing: initialize hash: 0.004824 ms
<t> hashing: sort chunks: 0.038786 ms
<t> hashing: hash runtime modules: 0.934379 ms
<t> hashing: hash chunks: 0.959273 ms
<t> hashing: hash digest: 0.038102 ms
<t> hashing: process full hash modules: 0.139832 ms
<t> hashing: 2.276772 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.050699 ms
<t> module assets: 0.138727 ms
<t> create chunk assets: 0.830311 ms
<t> process assets: 306.361934 ms

LOG from webpack.Compiler
<t> make hook: 2125.193794 ms
<t> finish make hook: 0.073035 ms
<t> finish compilation: 25.58691 ms
<t> seal compilation: 350.067499 ms
<t> afterCompile hook: 0.098095 ms
<t> emitAssets: 5.40102 ms
<t> emitRecords: 0.067731 ms
<t> done hook: 74.052305 ms
<t> beginIdle: 0.327433 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 458 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 491 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 489 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i> 1501 ms resolve to new modules
     |  | 111 ms (parallelism 6.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 111 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 90 ms (parallelism 7.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 90 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    240 ms build modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    3% really resolved (43 real resolves with 43 cached but invalid, 1639 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.803501 ms
<t> figure out provided exports: 4.652174 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006895 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.233457 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.470371 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.478849 ms
<t> trace exports usage in graph: 3.734147 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.143427 ms
<t> visitModules: visiting: 1.891276 ms
    209 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.952426 ms
<t> connectChunkGroups: 0.002115 ms
<t> cleanup: 0.001092 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038396 ms
<t> modules: 2.182377 ms
<t> queue: 0.004287 ms
<t> maxSize: 0.031394 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.972254 ms
<t> sort relevant modules: 0.095742 ms
<t> find modules to concatenate: 3.96541 ms
<t> sort concat configurations: 0.001804 ms
<t> create concatenated modules: 6.594451 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.119552 ms
+ 1 hidden lines

2024-03-16 10:21:06: webpack 5.90.3 compiled in 4054 ms (529d3c8a4a031b2d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 389.317618 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.923086 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 46 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 30.672977 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 2 files, 31 MiB)
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

Build at: 2024-03-16T14:21:06.787Z - Hash: 529d3c8a4a031b2d - Time: 4655ms
Done in 5.93s.
```
Sat Mar 16 10:21:08 AM EDT 2024
yarn version v1.22.22
info Current version: 0.0.499
info New version: 0.0.500
Done in 0.12s.
