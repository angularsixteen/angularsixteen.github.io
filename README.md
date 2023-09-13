Wed Sep 13 11:26:37 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.9Gi       266Mi        10Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
467M	.
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
    

Angular CLI: 16.2.1
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.1
@angular-devkit/build-angular   16.2.1
@angular-devkit/core            16.2.1
@angular-devkit/schematics      16.2.1
@angular/cli                    16.2.1
@schematics/angular             16.2.1
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001532
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.2/angular-webpack/d657ce67233273264bcb424f36e9a20d5f99e18a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.2.2/angular-webpack/d657ce67233273264bcb424f36e9a20d5f99e18a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1651.797816 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 207 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 208 KiB = runtime.js 906 bytes main.js 207 KiB
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
    1087 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1054 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1291 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 1260 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.497434 ms
<t> runtime requirements.chunks: 0.450072 ms
<t> runtime requirements.entries: 1.431918 ms
<t> finish module profiles: 6.657612 ms
<t> compute affected modules: 0.004639 ms
<t> finish modules: 13.579623 ms
<t> report dependency errors and warnings: 3.519994 ms
<t> optimize dependencies: 8.24077 ms
<t> create chunks: 2.615019 ms
<t> compute affected modules with chunk graph: 0.00344 ms
<t> optimize: 24.347511 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.236368 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 455.863328 ms
<t> runtime requirements.modules: 0.197996 ms
<t> runtime requirements.chunks: 0.331932 ms
<t> runtime requirements.entries: 1.199009 ms
<t> runtime requirements: 2.36323 ms
<t> hashing: initialize hash: 0.010021 ms
<t> hashing: sort chunks: 0.110838 ms
<t> hashing: hash runtime modules: 1.67803 ms
<t> hashing: hash chunks: 2.229458 ms
<t> hashing: hash digest: 0.046311 ms
<t> hashing: process full hash modules: 0.179882 ms
<t> hashing: 4.919208 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06623 ms
<t> module assets: 0.250065 ms
<t> create chunk assets: 5.004905 ms
<t> process assets: 3116.783807 ms

LOG from webpack.Compiler
<t> make hook: 5448.200651 ms
<t> finish make hook: 0.178469 ms
<t> finish compilation: 23.794639 ms
<t> seal compilation: 3628.962 ms
<t> afterCompile hook: 0.192823 ms
<t> emitAssets: 3.861815 ms
<t> emitRecords: 0.063976 ms
<t> done hook: 111.330327 ms
<t> beginIdle: 0.789604 ms

LOG from webpack.Compilation.ModuleProfile
     | 33 ms (parallelism 9.3) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
    327 ms resolve to new modules
     | 109 ms (parallelism 2.4) integrate modules > ./src/main.ts
    112 ms integrate modules
<i>  |  | 359 ms (parallelism 3.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 359 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 277 ms (parallelism 3.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 32 ms (parallelism 7.8) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 80 ms (parallelism 3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1501 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 348 ms (parallelism 3.4) build modules > ./src/main.ts
<i>  | 412 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 215 ms (parallelism 4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 215 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 455 ms (parallelism 4.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i>  |  | 442 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 467 ms (parallelism 4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  |  | 459 ms (parallelism 4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1843 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 4335 ms build modules
     | 109 ms (parallelism 2.4) restore modules > ./src/main.ts
    112 ms restore modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1131 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.952867 ms
<t> figure out provided exports: 8.129982 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.251271 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 46.457939 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.44376 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.463531 ms
<t> trace exports usage in graph: 3.991586 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.136567 ms
<t> visitModules: visiting: 1.790362 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.865893 ms
<t> connectChunkGroups: 0.001956 ms
<t> cleanup: 0.001132 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.028959 ms
<t> modules: 5.227436 ms
<t> queue: 0.005027 ms
<t> maxSize: 0.033507 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.979894 ms
<t> sort relevant modules: 0.098804 ms
<t> find modules to concatenate: 4.54883 ms
<t> sort concat configurations: 0.001555 ms
<t> create concatenated modules: 3.870628 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 277.478348 ms
<t> optimize asset: polyfills.js: 729.595753 ms
<t> optimize asset: main.js: 2644.968273 ms
<t> optimize js assets: 2714.942578 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 2.695803 ms
<t> optimize css assets: 3.167081 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1131)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 50% (105/210) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 13% (117/928) entries shared via 11 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 81% (3173/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 90% (3799/4199) entries shared via 188 shared snapshots (741 times referenced)

2023-09-13 11:27:22: webpack 5.88.2 compiled in 10742 ms (6309e0d4e6395c99)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1241.716387 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 57.780102 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.676229 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.775604 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.220387 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.828109 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.913311 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.059968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.205872 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable|request=|../AsyncSubject': 1.515632 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 7.680272 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.783667 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 176.25206 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.81 kB |                56.44 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.69 kB |                67.55 kB

Build at: 2023-09-13T15:27:24.008Z - Hash: 6309e0d4e6395c99 - Time: 12424ms
Done in 14.19s.
```
