Sat Feb 24 09:02:48 AM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.5Gi       1.9Gi       264Mi        11Gi        12Gi
Swap:          8.0Gi       245Mi       7.8Gi
System Storage
474M	.
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
    

Angular CLI: 17.2.1
Node: 20.11.1
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.2.2
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.1
@angular-devkit/build-angular   17.2.1
@angular-devkit/core            17.2.1
@angular-devkit/schematics      17.2.1
@angular/cli                    17.2.1
@schematics/angular             17.2.1
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
Latest version:     1.0.30001589
Installed version:  1.0.30001589
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1636.6695650000001 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (619f45905f330b39 != ba124fc5370e8603)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1252.602345 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 5.368451 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (30.4 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.512048 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 9.217314 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.938916 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 8.199388 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.021587 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.851244 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.839732 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (30.4 MiB): 110.190563 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 184 KiB {590} [emitted] (name: main)
asset styles.css 70 KiB {176} [emitted] (name: styles)
asset polyfills.js 33 KiB {260} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {688} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {176} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [256] 50 bytes {176} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2322 ms (resolving: 1405 ms, restoring: 0 ms, integration: 0 ms, building: 916 ms, storing: 1 ms)
chunk {260} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {590} (runtime: runtime) main.js (main) 2.06 MiB [initial]
  ./src/main.ts + 88 modules [712] 2.06 MiB {590} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {688} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    46 new snapshots created
    39% root snapshot uncached (760 / 1927)
    16% children snapshot uncached (358 / 2284)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (287/372) entries shared via 1 shared snapshots (40 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 47% (116/247) entries shared via 6 shared snapshots (10 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 46% (94/203) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 72% (133/185) entries shared via 12 shared snapshots (22 times referenced)
    Managed missing snapshot optimization: 79% (194/247) entries shared via 14 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.242905 ms
<t> runtime requirements.chunks: 0.1319 ms
<t> runtime requirements.entries: 0.980067 ms
<t> finish module profiles: 4.789138 ms
<t> compute affected modules: 0.004855 ms
<t> finish modules: 21.027282 ms
<t> report dependency errors and warnings: 3.756018 ms
<t> optimize dependencies: 10.825715 ms
<t> create chunks: 2.505697 ms
<t> compute affected modules with chunk graph: 0.004183 ms
<t> optimize: 24.265123 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 7.542452 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.7955 ms
<t> runtime requirements.modules: 0.320124 ms
<t> runtime requirements.chunks: 0.126805 ms
<t> runtime requirements.entries: 0.54711 ms
<t> runtime requirements: 1.257335 ms
<t> hashing: initialize hash: 0.005603 ms
<t> hashing: sort chunks: 0.04676 ms
<t> hashing: hash runtime modules: 1.052226 ms
<t> hashing: hash chunks: 1.158384 ms
<t> hashing: hash digest: 0.038771 ms
<t> hashing: process full hash modules: 0.165683 ms
<t> hashing: 2.620192 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05579 ms
<t> module assets: 0.152914 ms
<t> create chunk assets: 0.965245 ms
<t> process assets: 331.928226 ms

LOG from webpack.Compiler
<t> make hook: 2336.42971 ms
<t> finish make hook: 0.083105 ms
<t> finish compilation: 29.620031 ms
<t> seal compilation: 384.315523 ms
<t> afterCompile hook: 0.147061 ms
<t> emitAssets: 3.254479 ms
<t> emitRecords: 0.06792 ms
<t> done hook: 81.965782 ms
<t> beginIdle: 0.361249 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 468 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<w>  | 504 ms (parallelism 3) resolve to new modules > ./src/main.ts
<w>  | 502 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<w> 1552 ms resolve to new modules
     |  | 114 ms (parallelism 8) build modules > ./src/styles.scss?ngGlobalStyle
     | 114 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 94 ms (parallelism 8.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 94 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    252 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    3% really resolved (43 real resolves with 43 cached but invalid, 1641 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.933242 ms
<t> figure out provided exports: 4.918649 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007845 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.253946 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.032427 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.428337 ms
<t> trace exports usage in graph: 3.922787 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.999225 ms
<t> visitModules: visiting: 1.653082 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.733353 ms
<t> connectChunkGroups: 0.002326 ms
<t> cleanup: 0.001161 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031597 ms
<t> modules: 2.148334 ms
<t> queue: 0.004799 ms
<t> maxSize: 0.040969 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.991182 ms
<t> sort relevant modules: 0.103638 ms
<t> find modules to concatenate: 6.314226 ms
<t> sort concat configurations: 0.003052 ms
<t> create concatenated modules: 5.869564 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.154656 ms
+ 1 hidden lines

2024-02-24 09:03:10: webpack 5.90.1 compiled in 4362 ms (b20dc3dc65e8e01a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 357.910751 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.71956 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 46 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 33.012193 ms
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
main.js             | main          | 183.87 kB |                48.81 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

                    | Initial total | 287.77 kB |                68.34 kB

Build at: 2024-02-24T14:03:11.397Z - Hash: b20dc3dc65e8e01a - Time: 4947ms
Done in 6.25s.
```
