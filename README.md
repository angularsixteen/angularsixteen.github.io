Tue Feb 27 11:05:27 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.5Gi       1.3Gi       272Mi        11Gi        11Gi
Swap:          8.0Gi       768Mi       7.2Gi
System Storage
477M	.
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
    
Done in 0.52s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.26s.
```
```bash
Latest version:     1.0.30001591
Installed version:  1.0.30001589
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.2.1/angular-webpack/bcf904d57cc093e3f3e6715b2c5284a822ef8a37.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.2.1/angular-webpack/bcf904d57cc093e3f3e6715b2c5284a822ef8a37/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1902.578646 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 184 KiB {590} [emitted] (name: main)
asset styles.css 70 KiB {176} [emitted] (name: styles)
asset polyfills.js 33 KiB {260} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {688} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {176} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [256] 50 bytes {176} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    3362 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 3333 ms, storing: 0 ms)
chunk {260} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [728] 104 KiB {260} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    290 ms (resolving: 150 ms, restoring: 0 ms, integration: 0 ms, building: 140 ms, storing: 0 ms)
chunk {590} (runtime: runtime) main.js (main) 2.07 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [712] 2.07 MiB {590} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {688} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.189727 ms
<t> runtime requirements.chunks: 0.134827 ms
<t> runtime requirements.entries: 1.01993 ms
<t> finish module profiles: 6.422534 ms
<t> compute affected modules: 0.005306 ms
<t> finish modules: 15.025926 ms
<t> report dependency errors and warnings: 3.929666 ms
<t> optimize dependencies: 8.335518 ms
<t> create chunks: 2.389734 ms
<t> compute affected modules with chunk graph: 0.003014 ms
<t> optimize: 22.850636 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.081727 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 405.869153 ms
<t> runtime requirements.modules: 0.238674 ms
<t> runtime requirements.chunks: 0.093956 ms
<t> runtime requirements.entries: 0.525301 ms
<t> runtime requirements: 1.093268 ms
<t> hashing: initialize hash: 0.007323 ms
<t> hashing: sort chunks: 0.054872 ms
<t> hashing: hash runtime modules: 1.293283 ms
<t> hashing: hash chunks: 1.385746 ms
<t> hashing: hash digest: 0.047371 ms
<t> hashing: process full hash modules: 0.196362 ms
<t> hashing: 3.17947 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.070273 ms
<t> module assets: 0.147095 ms
<t> create chunk assets: 3.242456 ms
<t> process assets: 4486.287852 ms

LOG from webpack.Compiler
<t> make hook: 4530.145654 ms
<t> finish make hook: 0.184467 ms
<t> finish compilation: 25.425147 ms
<t> seal compilation: 4941.493423 ms
<t> afterCompile hook: 0.158459 ms
<t> emitAssets: 4.254491 ms
<t> emitRecords: 0.079537 ms
<t> done hook: 120.156195 ms
<t> beginIdle: 0.434087 ms

LOG from webpack.Compilation.ModuleProfile
     | 52 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 50 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 31 ms (parallelism 9.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 31 ms (parallelism 9.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 31 ms (parallelism 9.1) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 31 ms (parallelism 9.1) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
    437 ms resolve to new modules
<w>  |  | 822 ms (parallelism 4.1) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 822 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 230 ms (parallelism 4.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 230 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 149 ms (parallelism 3.3) build modules > ./src/main.ts
     | 166 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 35 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 76 ms (parallelism 5.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 76 ms (parallelism 5.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 349 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w>  |  | 607 ms (parallelism 4.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 631 ms (parallelism 4.6) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 636 ms (parallelism 4.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 72 ms (parallelism 6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 76 ms (parallelism 6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<w>  | 2049 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 3638 ms build modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1162 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.844593 ms
<t> figure out provided exports: 9.174185 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.630244 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.01483 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.538538 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.542584 ms
<t> trace exports usage in graph: 3.867443 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.931944 ms
<t> visitModules: visiting: 1.571367 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.652046 ms
<t> connectChunkGroups: 0.002126 ms
<t> cleanup: 0.001288 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.026471 ms
<t> modules: 2.205222 ms
<t> queue: 0.004367 ms
<t> maxSize: 0.031439 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.970748 ms
<t> sort relevant modules: 0.106205 ms
<t> find modules to concatenate: 7.356178 ms
<t> sort concat configurations: 0.002025 ms
<t> create concatenated modules: 4.38518 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 198.098233 ms
<t> optimize asset: polyfills.js: 674.603132 ms
<t> optimize asset: main.js: 3976.756041 ms
<t> optimize js assets: 4024.71616 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 15.525584 ms
<t> optimize css assets: 22.464369 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1162)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3131/3692) entries shared via 2 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (120/251) entries shared via 7 shared snapshots (11 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 12% (109/939) entries shared via 9 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3192/3955) entries shared via 178 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3686/4215) entries shared via 188 shared snapshots (741 times referenced)

2024-02-27 23:06:11: webpack 5.90.1 compiled in 11391 ms (a243a36231eb4d3d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<w> [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Resolving 'browserslist/node' in /home/kushal/src/angular/angularsixteen/node_modules/browserslist for build dependencies doesn't lead to expected result '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/node.js', but to '/home/kushal/src/angular/angularsixteen/node_modules/browserslist/node_modules/browserslist/node.js' instead. Resolving dependencies are ignored for this path.
<w>  at unknown 4 browserslist/node
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/browserslist/index.js
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/@babel/helper-define-polyfill-provider/node_modules/@babel/helper-compilation-targets/lib/index.js
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
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1943.696274 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 73.161286 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.048144 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 4.378948 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.482137 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.861079 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.178366 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/fromEvent.js': 1.223057 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/concatAll': 1.02288 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.264599 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/dom/animationFrames.js': 2.737315 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 10.385648 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk590': 5.415635 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 214.94602 ms
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
main.js             | main          | 184.01 kB |                48.83 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

                    | Initial total | 287.91 kB |                68.36 kB

Build at: 2024-02-28T04:06:13.760Z - Hash: a243a36231eb4d3d - Time: 13873ms
Done in 15.43s.
```
