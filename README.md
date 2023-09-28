Thu Sep 28 02:35:17 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       3.7Gi       281Mi       9.2Gi        12Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
System Storage
475M	.
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
Done in 0.31s.
```
Latest version:     1.0.30001541
Installed version:  1.0.30001541
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001541
Installed version:  1.0.30001541
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1630.754793 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (7b2d3ded50a9ed7e != aa80bc92f7dfcf3e)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 838.365353 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.505719 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (28 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 1.833409 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.363857 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.074976 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.969148 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (28 MiB): 81.891105 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.89 MiB [initial]
  ./src/main.ts + 89 modules [768] 1.89 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 79 bytes (css/mini-extract) [cached] 2 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    36 new snapshots created
    39% root snapshot uncached (747 / 1906)
    15% children snapshot uncached (351 / 2265)
    1300 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 27% (51/188) entries shared via 4 shared snapshots (7 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 46% (85/185) entries shared via 9 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 79% (179/226) entries shared via 12 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1413.5988360000001 ms
<t> finish make hook: 0.283855 ms
<t> finish compilation: 24.640466 ms
<t> seal compilation: 401.299342 ms
<t> afterCompile hook: 0.160088 ms
<t> emitAssets: 5.674634 ms
<t> emitRecords: 0.065631 ms
<t> done hook: 85.90977 ms
<t> beginIdle: 0.435788 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 322 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 323 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 325 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 52 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 52 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i> 1169 ms resolve to new modules
+ 6 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.556149 ms
<t> compute affected modules: 0.003412 ms
<t> finish modules: 17.612449 ms
<t> report dependency errors and warnings: 3.437939 ms
<t> optimize dependencies: 7.035748 ms
<t> create chunks: 2.379141 ms
<t> compute affected modules with chunk graph: 0.003018 ms
<t> optimize: 24.087339 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.662082 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.353053 ms
<t> runtime requirements.modules: 0.066246 ms
<t> runtime requirements.chunks: 0.146839 ms
<t> runtime requirements.entries: 0.910758 ms
<t> runtime requirements: 1.448942 ms
<t> hashing: initialize hash: 0.005703 ms
<t> hashing: sort chunks: 0.039713 ms
<t> hashing: hash runtime modules: 1.457024 ms
<t> hashing: hash chunks: 1.144481 ms
<t> hashing: hash digest: 0.035595 ms
<t> hashing: process full hash modules: 0.144938 ms
<t> hashing: 2.930574 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.083381 ms
<t> module assets: 0.162746 ms
<t> create chunk assets: 0.907411 ms
<t> process assets: 353.858972 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1632 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.679135 ms
<t> figure out provided exports: 4.317783 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006108 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.401454 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 2.992086 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.356094 ms
<t> trace exports usage in graph: 3.425727 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.040817 ms
<t> visitModules: visiting: 1.693732 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.743406 ms
<t> connectChunkGroups: 0.00175 ms
<t> cleanup: 0.000979 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.02991 ms
<t> modules: 2.04955 ms
<t> queue: 0.004012 ms
<t> maxSize: 0.027079 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.850108 ms
<t> sort relevant modules: 0.100347 ms
<t> find modules to concatenate: 4.329306 ms
<t> sort concat configurations: 0.00151 ms
<t> create concatenated modules: 3.967473 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.153863 ms
+ 1 hidden lines

2023-09-28 14:35:40: webpack 5.88.2 compiled in 3448 ms (ea54a56e532ece27)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 258.694078 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 6.37019 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 37 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 980 used items and pack 2 with 19 unused items
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 6.882402 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.646389 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.675877 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.064502 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 2.20976 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.546771 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.786269 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators|request=|../scheduler/dateTimestampProvider': 1.148387 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.064262 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 1.004613 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 1.438725 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 199.719885 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 3 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.44 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.59 kB |                67.54 kB

Build at: 2023-09-28T18:35:40.746Z - Hash: ea54a56e532ece27 - Time: 4072ms
Done in 5.67s.
```
