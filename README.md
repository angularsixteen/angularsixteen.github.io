Thu Nov  9 11:53:00 PM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       3.7Gi       233Mi        10Gi        13Gi
Swap:          8.0Gi        51Mi       7.9Gi
System Storage
565M	.
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 17.0.2
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@angular/cli                    17.0.0
@schematics/angular             17.0.0
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.29s.
```
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1628.003083 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (2e72d5a95733f7d7 != fb0ea2d6a734d950)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 976.540263 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.490663 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (29.8 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.67301 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.059563 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.180499 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.078261 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.033469 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.17255 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 7.241284 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (29.8 MiB): 104.074691 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 5.006847 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 113.810643 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 183 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 184 KiB = runtime.js 906 bytes main.js 183 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.02 MiB [initial]
  ./src/main.ts + 90 modules [339] 2.02 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2027 ms (resolving: 1133 ms, restoring: 0 ms, integration: 0 ms, building: 894 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    45 new snapshots created
    39% root snapshot uncached (759 / 1925)
    16% children snapshot uncached (360 / 2285)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (280/365) entries shared via 1 shared snapshots (39 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (111/232) entries shared via 6 shared snapshots (9 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 46% (94/205) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 68% (125/183) entries shared via 11 shared snapshots (21 times referenced)
    Managed missing snapshot optimization: 79% (194/246) entries shared via 14 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.210972 ms
<t> runtime requirements.chunks: 0.122303 ms
<t> runtime requirements.entries: 0.96418 ms
<t> finish module profiles: 3.649077 ms
<t> compute affected modules: 0.00496 ms
<t> finish modules: 19.153588 ms
<t> report dependency errors and warnings: 3.50867 ms
<t> optimize dependencies: 7.563169 ms
<t> create chunks: 2.423541 ms
<t> compute affected modules with chunk graph: 0.003283 ms
<t> optimize: 24.369562 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.148544 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.583342 ms
<t> runtime requirements.modules: 0.17537 ms
<t> runtime requirements.chunks: 0.078623 ms
<t> runtime requirements.entries: 0.398251 ms
<t> runtime requirements: 0.815403 ms
<t> hashing: initialize hash: 0.00526 ms
<t> hashing: sort chunks: 0.042125 ms
<t> hashing: hash runtime modules: 0.954336 ms
<t> hashing: hash chunks: 1.087586 ms
<t> hashing: hash digest: 0.034038 ms
<t> hashing: process full hash modules: 0.18738 ms
<t> hashing: 2.434367 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.049595 ms
<t> module assets: 0.129358 ms
<t> create chunk assets: 0.887739 ms
<t> process assets: 306.412325 ms

LOG from webpack.Compiler
<t> make hook: 2046.652447 ms
<t> finish make hook: 0.075056 ms
<t> finish compilation: 26.345844 ms
<t> seal compilation: 353.11091 ms
<t> afterCompile hook: 0.109012 ms
<t> emitAssets: 3.325649 ms
<t> emitRecords: 0.076908 ms
<t> done hook: 83.310817 ms
<t> beginIdle: 0.347107 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 378 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 380 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 379 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i> 1238 ms resolve to new modules
     |  | 148 ms (parallelism 6.1) build modules > ./src/styles.scss?ngGlobalStyle
     | 148 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 106 ms (parallelism 7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 106 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    272 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    2% really resolved (42 real resolves with 42 cached but invalid, 1640 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.855339 ms
<t> figure out provided exports: 4.811793 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007075 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.238526 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.078288 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.474441 ms
<t> trace exports usage in graph: 3.665775 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.979795 ms
<t> visitModules: visiting: 1.594166 ms
    207 queue items processed (94 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.663512 ms
<t> connectChunkGroups: 0.001998 ms
<t> cleanup: 0.001146 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032799 ms
<t> modules: 2.005731 ms
<t> queue: 0.004229 ms
<t> maxSize: 0.029999 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.891684 ms
<t> sort relevant modules: 0.09379 ms
<t> find modules to concatenate: 7.102253 ms
<t> sort concat configurations: 0.002592 ms
<t> create concatenated modules: 3.934879 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.122384 ms
+ 1 hidden lines

2023-11-09 23:53:19: webpack 5.89.0 compiled in 4027 ms (08775a0c52737ad0)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 400.420011 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.040565 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 45 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 34.585158 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1038 items, 2 files, 30 MiB)
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
main.js             | main          | 183.03 kB |                48.98 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.93 kB |                68.52 kB

Build at: 2023-11-10T04:53:19.723Z - Hash: 08775a0c52737ad0 - Time: 4644ms
Done in 6.12s.
```
