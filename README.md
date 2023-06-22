Thu Jun 22 09:10:17 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       1.6Gi       537Mi        10Gi        11Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
System Storage
415M	.
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
    

Angular CLI: 16.1.0
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.1
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cli                    16.1.0
@schematics/angular             16.1.0
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.47s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.30s.
```
Latest version:     1.0.30001506
Installed version:  1.0.30001504
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001506
Installed version:  1.0.30001506
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.0/angular-webpack/32910b5514ef6e09615c63eb395a7da126144e55.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.0/angular-webpack/32910b5514ef6e09615c63eb395a7da126144e55/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1609.834945 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 205 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 205 KiB = runtime.js 906 bytes main.js 205 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 906 bytes = runtime.js 906 bytes styles.css 0 bytes
chunk {179} (runtime: runtime) main.js (main) 1.83 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [652] 1.83 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    857 ms (resolving: 147 ms, restoring: 0 ms, integration: 0 ms, building: 710 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1001 ms (resolving: 30 ms, restoring: 0 ms, integration: 0 ms, building: 971 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.51086 ms
<t> runtime requirements.chunks: 0.424009 ms
<t> runtime requirements.entries: 1.438235 ms
<t> finish module profiles: 6.556415 ms
<t> compute affected modules: 0.004547 ms
<t> finish modules: 13.941719 ms
<t> report dependency errors and warnings: 3.550101 ms
<t> optimize dependencies: 11.249892 ms
<t> create chunks: 2.474963 ms
<t> compute affected modules with chunk graph: 0.002732 ms
<t> optimize: 20.521791 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.007576 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 458.622177 ms
<t> runtime requirements.modules: 0.258154 ms
<t> runtime requirements.chunks: 0.088232 ms
<t> runtime requirements.entries: 0.472068 ms
<t> runtime requirements: 1.2237 ms
<t> hashing: initialize hash: 0.007113 ms
<t> hashing: sort chunks: 0.061054 ms
<t> hashing: hash runtime modules: 1.245111 ms
<t> hashing: hash chunks: 1.242496 ms
<t> hashing: hash digest: 0.045033 ms
<t> hashing: process full hash modules: 0.233062 ms
<t> hashing: 3.044892 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.068087 ms
<t> module assets: 0.142235 ms
<t> create chunk assets: 2.90788 ms
<t> process assets: 5723.604746 ms

LOG from webpack.Compiler
<t> make hook: 5038.671417 ms
<t> finish make hook: 0.098403 ms
<t> finish compilation: 24.083171 ms
<t> seal compilation: 6233.861417 ms
<t> afterCompile hook: 0.164949 ms
<t> emitAssets: 10.406748 ms
<t> emitRecords: 0.061188 ms
<t> done hook: 123.012121 ms
<t> beginIdle: 0.381217 ms

LOG from webpack.Compilation.ModuleProfile
     | 50 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 49 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 41 ms (parallelism 8.1) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
    394 ms resolve to new modules
<i>  |  | 271 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 271 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 184 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 184 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 344 ms (parallelism 3.1) build modules > ./src/main.ts
     |  | 31 ms (parallelism 3.8) build modules > ./src/app/app.component.ts
     |  | 31 ms (parallelism 3.8) build modules > ./src/app/app-routing.module.ts
<i>  | 414 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 183 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 52 ms (parallelism 3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1395 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 432 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 443 ms (parallelism 4.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 449 ms (parallelism 4.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  |  | 439 ms (parallelism 4.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1773 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 4041 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1129 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.942532 ms
<t> figure out provided exports: 8.417993 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.489854 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 18.312434 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.434882 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.515637 ms
<t> trace exports usage in graph: 3.950074 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.053006 ms
<t> visitModules: visiting: 1.703977 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.821625 ms
<t> connectChunkGroups: 0.001696 ms
<t> cleanup: 0.00106 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.024427 ms
<t> modules: 2.126078 ms
<t> queue: 0.003943 ms
<t> maxSize: 0.029025 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.911156 ms
<t> sort relevant modules: 0.096178 ms
<t> find modules to concatenate: 5.632884 ms
<t> sort concat configurations: 0.002197 ms
<t> create concatenated modules: 4.004872 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 244.784005 ms
<t> optimize asset: polyfills.js: 740.17442 ms
<t> optimize asset: main.js: 5246.406743 ms
<t> optimize js assets: 5306.759319 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.940261 ms
<t> optimize css assets: 15.126224 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1129)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 51% (107/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 12% (113/924) entries shared via 9 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3799/4199) entries shared via 188 shared snapshots (741 times referenced)

2023-06-22 09:10:59: webpack 5.86.0 compiled in 12901 ms (914237b253517c0d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 769.284412 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 38.398385 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.18013 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.30292 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.715576 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.185047 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.956176 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.054115 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.278576 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable|request=|../AsyncSubject': 1.469206 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 8.76821 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.115193 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 185.623633 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.59 kB |                55.91 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.47 kB |                67.01 kB

Build at: 2023-06-22T13:11:00.288Z - Hash: 914237b253517c0d - Time: 14141ms
Done in 15.82s.
```
Thu Jun 22 09:11:01 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.7
info New version: 0.0.8
Done in 0.12s.
