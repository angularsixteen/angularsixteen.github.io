Fri Feb 23 08:47:43 AM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.7Gi       1.3Gi       295Mi        11Gi        12Gi
Swap:          8.0Gi       1.3Mi       8.0Gi
System Storage
508M	.
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
    

Angular CLI: 17.2.0
Node: 20.11.1
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.2.2
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.0
@angular-devkit/build-angular   17.2.0
@angular-devkit/core            17.2.0
@angular-devkit/schematics      17.2.0
@angular/cli                    17.2.0
@schematics/angular             17.2.0
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.2.1/angular-webpack/b0d3c6534e3bf3ee21d6a3967a1d8137807a011f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.2.1/angular-webpack/b0d3c6534e3bf3ee21d6a3967a1d8137807a011f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1700.715041 ms
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
    3703 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 3674 ms, storing: 0 ms)
chunk {260} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [728] 104 KiB {260} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1355 ms (resolving: 145 ms, restoring: 0 ms, integration: 0 ms, building: 1210 ms, storing: 0 ms)
chunk {590} (runtime: runtime) main.js (main) 2.06 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [712] 2.06 MiB {590} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {688} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.202562 ms
<t> runtime requirements.chunks: 0.147381 ms
<t> runtime requirements.entries: 1.011354 ms
<t> finish module profiles: 6.848721 ms
<t> compute affected modules: 0.006172 ms
<t> finish modules: 14.408017 ms
<t> report dependency errors and warnings: 3.878583 ms
<t> optimize dependencies: 10.53501 ms
<t> create chunks: 2.238485 ms
<t> compute affected modules with chunk graph: 0.002656 ms
<t> optimize: 20.670759 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.335381 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 387.967031 ms
<t> runtime requirements.modules: 0.287091 ms
<t> runtime requirements.chunks: 0.089792 ms
<t> runtime requirements.entries: 0.508743 ms
<t> runtime requirements: 1.135741 ms
<t> hashing: initialize hash: 0.007663 ms
<t> hashing: sort chunks: 0.057721 ms
<t> hashing: hash runtime modules: 1.292996 ms
<t> hashing: hash chunks: 1.338886 ms
<t> hashing: hash digest: 0.057656 ms
<t> hashing: process full hash modules: 0.177973 ms
<t> hashing: 3.128448 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.069124 ms
<t> module assets: 0.144628 ms
<t> create chunk assets: 3.097312 ms
<t> process assets: 3464.402396 ms

LOG from webpack.Compiler
<t> make hook: 5465.864044 ms
<t> finish make hook: 0.100181 ms
<t> finish compilation: 25.180621 ms
<t> seal compilation: 3901.467033 ms
<t> afterCompile hook: 0.145998 ms
<t> emitAssets: 3.650572 ms
<t> emitRecords: 0.065102 ms
<t> done hook: 99.283845 ms
<t> beginIdle: 0.404674 ms

LOG from webpack.Compilation.ModuleProfile
     | 50 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 48 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 37 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 37 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
    466 ms resolve to new modules
<w>  |  | 773 ms (parallelism 4.8) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 773 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 659 ms (parallelism 4.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 659 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 374 ms (parallelism 3.8) build modules > ./src/main.ts
<i>  | 392 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 303 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 67 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 46 ms (parallelism 9.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1422 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 358 ms (parallelism 4.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 375 ms (parallelism 5.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 372 ms (parallelism 4.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 52 ms (parallelism 8) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 35 ms (parallelism 12.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1214 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 4467 ms build modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1167 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.78886 ms
<t> figure out provided exports: 8.819723 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.50595 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 7.685668 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.004983 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.404977 ms
<t> trace exports usage in graph: 3.769169 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.83549 ms
<t> visitModules: visiting: 1.478661 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.55273 ms
<t> connectChunkGroups: 0.001782 ms
<t> cleanup: 0.001133 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.028765 ms
<t> modules: 1.991072 ms
<t> queue: 0.003977 ms
<t> maxSize: 0.027992 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.889953 ms
<t> sort relevant modules: 0.073294 ms
<t> find modules to concatenate: 3.995611 ms
<t> sort concat configurations: 0.001689 ms
<t> create concatenated modules: 5.08439 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 182.691722 ms
<t> optimize asset: polyfills.js: 695.03838 ms
<t> optimize asset: main.js: 2984.990439 ms
<t> optimize js assets: 3028.496765 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.55436 ms
<t> optimize css assets: 16.854913 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1167)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3131/3692) entries shared via 2 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (140/251) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 12% (108/939) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3192/3955) entries shared via 178 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3683/4215) entries shared via 188 shared snapshots (742 times referenced)

2024-02-23 08:48:20: webpack 5.90.1 compiled in 11085 ms (b20dc3dc65e8e01a)
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
<w>  at file dependencies /home/kushal/src/angular/angularsixteen/node_modules/browserslist/node.js
<w>  at file /home/kushal/src/angular/angularsixteen/node_modules/browserslist/node.js
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
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1822.9982730000002 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 65.024464 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.042348 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.893139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.409099 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.867356 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.998962 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.235626 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/fromEventPattern.js': 1.171607 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/windowToggle': 1.139785 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.14006 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 9.826487 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk590': 5.509604 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 189.408818 ms
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

Initial chunk files | Names         |  Raw size | Estimated transfer size
main.js             | main          | 183.87 kB |                48.81 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

                    | Initial total | 287.77 kB |                68.34 kB

Build at: 2024-02-23T13:48:22.921Z - Hash: b20dc3dc65e8e01a - Time: 13392ms
Done in 15.02s.
```
Fri Feb 23 08:48:27 AM EST 2024
yarn version v1.22.21
info Current version: 0.0.460
info New version: 0.0.461
Done in 0.12s.
