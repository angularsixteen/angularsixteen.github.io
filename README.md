Tue Mar 19 06:53:03 PM EDT 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       1.5Gi       712Mi        10Gi        10Gi
Swap:          8.0Gi       831Mi       7.2Gi
System Storage
455M	.
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
Done in 0.28s.
```
```bash
Latest version:     1.0.30001599
Installed version:  1.0.30001599
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1639.185428 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (5a740f5a11149cde != c65775432cef2851)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 331.120461 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.903875 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (30.7 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.263675 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.659635 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.980825 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.001077 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.127639 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.732418 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.140157 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (30.7 MiB): 81.665249 ms
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
    1239 ms (resolving: 457 ms, restoring: 0 ms, integration: 0 ms, building: 782 ms, storing: 0 ms)
  

LOG from webpack.FileSystemInfo
    46 new snapshots created
    39% root snapshot uncached (760 / 1927)
    16% children snapshot uncached (359 / 2287)
    1333 entries tested
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
<t> runtime requirements.modules: 0.176341 ms
<t> runtime requirements.chunks: 0.128778 ms
<t> runtime requirements.entries: 0.999614 ms
<t> finish module profiles: 3.638281 ms
<t> compute affected modules: 0.004732 ms
<t> finish modules: 18.773614 ms
<t> report dependency errors and warnings: 3.543113 ms
<t> optimize dependencies: 8.427672 ms
<t> create chunks: 2.878522 ms
<t> compute affected modules with chunk graph: 0.004114 ms
<t> optimize: 21.257039 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.034305 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.577365 ms
<t> runtime requirements.modules: 0.230701 ms
<t> runtime requirements.chunks: 0.082309 ms
<t> runtime requirements.entries: 0.377772 ms
<t> runtime requirements: 0.860996 ms
<t> hashing: initialize hash: 0.005086 ms
<t> hashing: sort chunks: 0.038368 ms
<t> hashing: hash runtime modules: 0.961364 ms
<t> hashing: hash chunks: 1.029021 ms
<t> hashing: hash digest: 0.036379 ms
<t> hashing: process full hash modules: 0.14781 ms
<t> hashing: 2.35895 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05651 ms
<t> module assets: 0.155531 ms
<t> create chunk assets: 1.003751 ms
<t> process assets: 330.287251 ms

LOG from webpack.Compiler
<t> make hook: 1254.50499 ms
<t> finish make hook: 0.084313 ms
<t> finish compilation: 25.989897 ms
<t> seal compilation: 375.219646 ms
<t> afterCompile hook: 0.100739 ms
<t> emitAssets: 3.496231 ms
<t> emitRecords: 0.076336 ms
<t> done hook: 73.871856 ms
<t> beginIdle: 0.406777 ms

LOG from webpack.Compilation.ModuleProfile
     | 152 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 187 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 185 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
    584 ms resolve to new modules
     |  | 119 ms (parallelism 6.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 119 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 96 ms (parallelism 7.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 96 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    276 ms build modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    3% really resolved (43 real resolves with 43 cached but invalid, 1641 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.89012 ms
<t> figure out provided exports: 4.67315 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007239 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.303686 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.540542 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.509097 ms
<t> trace exports usage in graph: 4.022234 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.215604 ms
<t> visitModules: visiting: 1.961225 ms
    209 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.025134 ms
<t> connectChunkGroups: 0.002031 ms
<t> cleanup: 0.001079 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.037358 ms
<t> modules: 2.228941 ms
<t> queue: 0.004375 ms
<t> maxSize: 0.034373 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.078227 ms
<t> sort relevant modules: 0.102457 ms
<t> find modules to concatenate: 4.203466 ms
<t> sort concat configurations: 0.00209 ms
<t> create concatenated modules: 6.43882 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.155065 ms
+ 1 hidden lines

2024-03-19 18:53:21: webpack 5.90.3 compiled in 3279 ms (529d3c8a4a031b2d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 376.203677 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 8.008043 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 46 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.998661 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.764752 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.340667 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.107209 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.12329 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/util/isIterable.js': 1.670419 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 1.56091 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 159.960025 ms
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

Build at: 2024-03-19T22:53:22.079Z - Hash: 529d3c8a4a031b2d - Time: 4000ms
Done in 5.36s.
```
