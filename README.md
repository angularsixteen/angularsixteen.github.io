Mon Oct 30 12:55:30 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       3.5Gi       757Mi       9.5Gi        11Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
System Storage
526M	.
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.11
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cli                    16.2.8
@schematics/angular             16.2.8
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.49s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
Latest version:     1.0.30001558
Installed version:  1.0.30001558
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001558
Installed version:  1.0.30001558
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1554.3782999999999 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (4666e9d392d75294 != 38aa594e79f511ff)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 846.492232 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.875531 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (109 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.594919 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.925007 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (109 KiB): 11.648906 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.9 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.130362 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.288805 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.374633 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.500034 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/exhaustMap.js': 3.056702 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.9 MiB): 56.84725 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 208 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 209 KiB = runtime.js 906 bytes main.js 208 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 906 bytes = runtime.js 906 bytes styles.css 0 bytes
chunk {179} (runtime: runtime) main.js (main) 1.9 MiB [initial]
  ./src/main.ts + 89 modules [768] 1.9 MiB {179} [built]
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
    39% root snapshot uncached (747 / 1908)
    15% children snapshot uncached (350 / 2262)
    1306 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 34% (63/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 48% (89/185) entries shared via 8 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 79% (179/226) entries shared via 12 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1460.23566 ms
<t> finish make hook: 0.146265 ms
<t> finish compilation: 31.062422 ms
<t> seal compilation: 393.625878 ms
<t> afterCompile hook: 0.148352 ms
<t> emitAssets: 6.419652 ms
<t> emitRecords: 0.092444 ms
<t> done hook: 101.633504 ms
<t> beginIdle: 0.354332 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 301 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 303 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 302 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 53 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 53 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 1122 ms resolve to new modules
+ 15 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 5.389885 ms
<t> compute affected modules: 0.009147 ms
<t> finish modules: 21.883569 ms
<t> report dependency errors and warnings: 3.729975 ms
<t> optimize dependencies: 7.725764 ms
<t> create chunks: 2.704305 ms
<t> compute affected modules with chunk graph: 0.002996 ms
<t> optimize: 23.98079 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.578884 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.334092 ms
<t> runtime requirements.modules: 0.059633 ms
<t> runtime requirements.chunks: 0.158979 ms
<t> runtime requirements.entries: 0.98149 ms
<t> runtime requirements: 1.36968 ms
<t> hashing: initialize hash: 0.004509 ms
<t> hashing: sort chunks: 0.040574 ms
<t> hashing: hash runtime modules: 1.440226 ms
<t> hashing: hash chunks: 1.117145 ms
<t> hashing: hash digest: 0.036444 ms
<t> hashing: process full hash modules: 0.150958 ms
<t> hashing: 2.894694 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.0526 ms
<t> module assets: 0.113024 ms
<t> create chunk assets: 0.871076 ms
<t> process assets: 345.283094 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1634 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.738565 ms
<t> figure out provided exports: 7.385325 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.011581 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.65497 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.262019 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.376406 ms
<t> trace exports usage in graph: 3.723104 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.187435 ms
<t> visitModules: visiting: 1.884757 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.93716 ms
<t> connectChunkGroups: 0.002198 ms
<t> cleanup: 0.001055 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.036491 ms
<t> modules: 2.054055 ms
<t> queue: 0.004473 ms
<t> maxSize: 0.030362 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.938386 ms
<t> sort relevant modules: 0.14348 ms
<t> find modules to concatenate: 4.256776 ms
<t> sort concat configurations: 0.002299 ms
<t> create concatenated modules: 7.453881 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.111376 ms
+ 1 hidden lines

2023-10-30 12:55:54: webpack 5.88.2 compiled in 3416 ms (52968b2f17ef1ec0)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 241.829084 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.389161 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.197636 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 33.209412 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 4 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.72 kB |                56.50 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.60 kB |                67.61 kB

Build at: 2023-10-30T16:55:54.575Z - Hash: 52968b2f17ef1ec0 - Time: 3862ms
Done in 5.19s.
```
Mon Oct 30 12:55:58 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.126
info New version: 0.0.127
Done in 0.12s.
