Thu Mar 14 09:35:31 PM EDT 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.5Gi       1.4Gi       601Mi        10Gi        10Gi
Swap:          8.0Gi       485Mi       7.5Gi
System Storage
437M	.
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
    

Angular CLI: 17.2.3
Node: 20.11.1
Package Manager: yarn 1.22.22
OS: linux x64

Angular: 17.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.3
@angular-devkit/build-angular   17.2.3
@angular-devkit/core            17.2.3
@angular-devkit/schematics      17.2.3
@angular/cli                    17.2.3
@schematics/angular             17.2.3
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.54s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.27s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.3.0/angular-webpack/f50d8299e66f2ff72c4c443f0ffe5aa71cd9f041.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.3.0/angular-webpack/f50d8299e66f2ff72c4c443f0ffe5aa71cd9f041/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1660.823195 ms
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
    1250 ms (resolving: 145 ms, restoring: 0 ms, integration: 0 ms, building: 1105 ms, storing: 0 ms)
chunk {792} (runtime: runtime) main.js (main) 2.08 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [496] 2.08 MiB {792} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {869} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [888] 50 bytes {869} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    3067 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 3038 ms, storing: 0 ms)
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.176219 ms
<t> runtime requirements.chunks: 0.133641 ms
<t> runtime requirements.entries: 1.018048 ms
<t> finish module profiles: 6.955684 ms
<t> compute affected modules: 0.004964 ms
<t> finish modules: 15.946535 ms
<t> report dependency errors and warnings: 4.6105 ms
<t> optimize dependencies: 9.35361 ms
<t> create chunks: 2.927489 ms
<t> compute affected modules with chunk graph: 0.003866 ms
<t> optimize: 24.052258 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.575532 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 448.731476 ms
<t> runtime requirements.modules: 0.396971 ms
<t> runtime requirements.chunks: 0.148651 ms
<t> runtime requirements.entries: 0.786244 ms
<t> runtime requirements: 1.665576 ms
<t> hashing: initialize hash: 0.010695 ms
<t> hashing: sort chunks: 0.096848 ms
<t> hashing: hash runtime modules: 1.175995 ms
<t> hashing: hash chunks: 1.793456 ms
<t> hashing: hash digest: 0.054825 ms
<t> hashing: process full hash modules: 0.171239 ms
<t> hashing: 3.534612 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066256 ms
<t> module assets: 0.137737 ms
<t> create chunk assets: 3.06336 ms
<t> process assets: 3566.745671 ms

LOG from webpack.Compiler
<t> make hook: 5481.260101 ms
<t> finish make hook: 0.108846 ms
<t> finish compilation: 27.57548 ms
<t> seal compilation: 4068.860964 ms
<t> afterCompile hook: 0.159 ms
<t> emitAssets: 4.0611 ms
<t> emitRecords: 0.071979 ms
<t> done hook: 129.401224 ms
<t> beginIdle: 0.487697 ms

LOG from webpack.Compilation.ModuleProfile
     | 50 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 48 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 109 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 109 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
    589 ms resolve to new modules
<w>  |  | 748 ms (parallelism 4.1) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 748 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 410 ms (parallelism 4.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 410 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 343 ms (parallelism 3.8) build modules > ./src/main.ts
<i>  | 361 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 276 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 66 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 48 ms (parallelism 8.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1454 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 361 ms (parallelism 4.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 461 ms (parallelism 4.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 466 ms (parallelism 4.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 67 ms (parallelism 6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 36 ms (parallelism 11.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1413 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 4397 ms build modules
+ 6 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1162 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.920693 ms
<t> figure out provided exports: 9.820357 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.620688 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 7.821054 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.995501 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.653866 ms
<t> trace exports usage in graph: 4.26979 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.250391 ms
<t> visitModules: visiting: 2.05526 ms
    209 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.147561 ms
<t> connectChunkGroups: 0.002568 ms
<t> cleanup: 0.001396 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033064 ms
<t> modules: 2.411526 ms
<t> queue: 0.005181 ms
<t> maxSize: 0.036373 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.021677 ms
<t> sort relevant modules: 0.086911 ms
<t> find modules to concatenate: 4.42421 ms
<t> sort concat configurations: 0.001902 ms
<t> create concatenated modules: 8.130517 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 186.439801 ms
<t> optimize asset: polyfills.js: 559.745146 ms
<t> optimize asset: main.js: 3102.936584 ms
<t> optimize js assets: 3150.405193 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.096942 ms
<t> optimize css assets: 12.912701 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1162)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3131/3692) entries shared via 2 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (140/251) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 12% (110/939) entries shared via 10 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3191/3955) entries shared via 178 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3683/4215) entries shared via 188 shared snapshots (742 times referenced)

2024-03-14 21:36:13: webpack 5.90.3 compiled in 11230 ms (529d3c8a4a031b2d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Resolving 'browserslist/node' in /home/kushal/src/angular/angularsixteen/node_modules/browserslist for build dependencies doesn't lead to expected result '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/node.js', but to '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/node_modules/browserslist/node.js' instead. Resolving dependencies are ignored for this path.
<w>  at unknown 4 browserslist/node
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/debug-utils.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/debug-utils.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/babel-plugin-polyfill-corejs3/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/babel-plugin-polyfill-corejs3/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/core-js.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/core-js.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/presets/application.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/presets/application.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w>  at resolve commonjs /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Resolving 'browserslist/parse' in /home/kushal/src/angular/angularsixteen/node_modules/browserslist for build dependencies doesn't lead to expected result '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/parse.js', but to '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/node_modules/browserslist/parse.js' instead. Resolving dependencies are ignored for this path.
<w>  at unknown 4 browserslist/parse
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/debug-utils.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/debug-utils.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/babel-plugin-polyfill-corejs3/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/babel-plugin-polyfill-corejs3/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/core-js.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/core-js.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/presets/application.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/presets/application.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w>  at resolve commonjs /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Resolving 'browserslist/error' in /home/kushal/src/angular/angularsixteen/node_modules/browserslist for build dependencies doesn't lead to expected result '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/error.js', but to '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/node_modules/browserslist/error.js' instead. Resolving dependencies are ignored for this path.
<w>  at unknown 4 browserslist/error
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/debug-utils.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/debug-utils.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/babel-plugin-polyfill-corejs3/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/babel-plugin-polyfill-corejs3/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/core-js.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/core-js.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/plugin-transform-runtime/lib/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/presets/application.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/presets/application.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<w>  at resolve commonjs /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1887.110908 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 69.141374 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.323993 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.181642 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.652944 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.074016 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 4.982566 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 3.541812 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 2.276791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/fromEvent.js': 1.18813 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/takeLast': 1.09582 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.120631 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 10.012653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk792': 7.225568 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 214.435508 ms
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

Build at: 2024-03-15T01:36:15.950Z - Hash: 529d3c8a4a031b2d - Time: 13662ms
Done in 15.24s.
```
