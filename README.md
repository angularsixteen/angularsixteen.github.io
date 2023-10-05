Thu Oct  5 12:04:58 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.8Gi       1.5Gi       241Mi        11Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
479M	.
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.7
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cli                    16.2.4
@schematics/angular             16.2.4
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001546
Installed version:  1.0.30001543
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001546
Installed version:  1.0.30001546
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.5/angular-webpack/f402a387e218dae37a5902c1908060f73a998d0b.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.5/angular-webpack/f402a387e218dae37a5902c1908060f73a998d0b/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1568.382546 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 208 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 209 KiB = runtime.js 906 bytes main.js 208 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 906 bytes = runtime.js 906 bytes styles.css 0 bytes
chunk {179} (runtime: runtime) main.js (main) 1.89 MiB [initial] [rendered]
  ./src/main.ts + 89 modules [768] 1.89 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1065 ms (resolving: 31 ms, restoring: 1 ms, integration: 0 ms, building: 1033 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1236 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 1207 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.491413 ms
<t> runtime requirements.chunks: 0.423566 ms
<t> runtime requirements.entries: 1.55819 ms
<t> finish module profiles: 6.774128 ms
<t> compute affected modules: 0.00601 ms
<t> finish modules: 14.453543 ms
<t> report dependency errors and warnings: 3.776361 ms
<t> optimize dependencies: 8.444333 ms
<t> create chunks: 2.532127 ms
<t> compute affected modules with chunk graph: 0.003213 ms
<t> optimize: 23.114843 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.207324 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 417.834011 ms
<t> runtime requirements.modules: 0.184812 ms
<t> runtime requirements.chunks: 0.331369 ms
<t> runtime requirements.entries: 1.239178 ms
<t> runtime requirements: 2.389621 ms
<t> hashing: initialize hash: 0.01182 ms
<t> hashing: sort chunks: 0.123058 ms
<t> hashing: hash runtime modules: 1.575575 ms
<t> hashing: hash chunks: 2.197049 ms
<t> hashing: hash digest: 0.058865 ms
<t> hashing: process full hash modules: 0.168598 ms
<t> hashing: 4.945345 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063646 ms
<t> module assets: 0.248831 ms
<t> create chunk assets: 5.062717 ms
<t> process assets: 3579.611546 ms

LOG from webpack.Compiler
<t> make hook: 5542.779063 ms
<t> finish make hook: 0.097862 ms
<t> finish compilation: 25.042377 ms
<t> seal compilation: 4053.572803 ms
<t> afterCompile hook: 0.278512 ms
<t> emitAssets: 19.275704 ms
<t> emitRecords: 0.06395 ms
<t> done hook: 200.270184 ms
<t> beginIdle: 0.836895 ms

LOG from webpack.Compilation.ModuleProfile
     | 98 ms (parallelism 2.5) resolve to new modules > ./src/main.ts
<i>  | 292 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 292 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 39 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 916 ms resolve to new modules
<i>  | 291 ms (parallelism 5.3) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 331 ms resolve to existing modules
<i>  |  | 339 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 339 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 270 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 180 ms (parallelism 5.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 180 ms (parallelism 5.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1689 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 361 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 421 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 212 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 212 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 262 ms (parallelism 5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 295 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 183 ms (parallelism 5.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 180 ms (parallelism 5.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 176 ms (parallelism 5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1095 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3761 ms build modules
+ 5 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (515 real resolves with 0 cached but invalid, 1119 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.044099 ms
<t> figure out provided exports: 8.580193 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.385218 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.177883 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.537109 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.458904 ms
<t> trace exports usage in graph: 4.105785 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.108714 ms
<t> visitModules: visiting: 1.743347 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.818627 ms
<t> connectChunkGroups: 0.001962 ms
<t> cleanup: 0.001127 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.027406 ms
<t> modules: 5.505812 ms
<t> queue: 0.005538 ms
<t> maxSize: 0.032802 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.945782 ms
<t> sort relevant modules: 0.102475 ms
<t> find modules to concatenate: 4.615483 ms
<t> sort concat configurations: 0.001461 ms
<t> create concatenated modules: 3.996875 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 220.705565 ms
<t> optimize asset: polyfills.js: 644.881152 ms
<t> optimize asset: main.js: 3044.682323 ms
<t> optimize js assets: 3115.714439 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 2.996122 ms
<t> optimize css assets: 3.82417 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1119)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3127/3677) entries shared via 3 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (114/210) entries shared via 9 shared snapshots (14 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 12% (114/928) entries shared via 9 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3788/4199) entries shared via 187 shared snapshots (742 times referenced)

2023-10-05 12:05:42: webpack 5.88.2 compiled in 11196 ms (a191fc5a77f1c78e)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1186.69753 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 45.919503 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.695828 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.893938 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.344051 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.86832 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.511569 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.664239 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/debounceTime.js': 1.158413 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../symbol/iterator': 1.57287 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 9.879909 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 5.088098 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 258.232261 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.45 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.59 kB |                67.56 kB

Build at: 2023-10-05T16:05:44.532Z - Hash: a191fc5a77f1c78e - Time: 12964ms
Done in 14.56s.
```
