Fri Oct 20 08:56:27 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.3Gi       4.2Gi       262Mi       9.8Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
455M	.
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
    

Angular CLI: 16.2.7
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.7
@angular-devkit/build-angular   16.2.7
@angular-devkit/core            16.2.7
@angular-devkit/schematics      16.2.7
@angular/cli                    16.2.7
@schematics/angular             16.2.7
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001551
Installed version:  1.0.30001551
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001551
Installed version:  1.0.30001551
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1632.02044 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (b9efb3eadd826071 != f635503e5b2100db)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 909.539967 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.458399 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (28 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 1.876858 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.393047 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.082736 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.927594 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/switchMap.js': 2.972531 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (28 MiB): 78.102498 ms
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
    39% root snapshot uncached (747 / 1904)
    15% children snapshot uncached (351 / 2267)
    1300 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (71/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 45% (84/185) entries shared via 9 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 78% (177/226) entries shared via 11 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1495.470934 ms
<t> finish make hook: 0.120084 ms
<t> finish compilation: 28.317711 ms
<t> seal compilation: 402.229168 ms
<t> afterCompile hook: 0.168783 ms
<t> emitAssets: 3.942226 ms
<t> emitRecords: 0.111559 ms
<t> done hook: 90.708141 ms
<t> beginIdle: 0.390466 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 345 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 345 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 349 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 79 ms (parallelism 4.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 79 ms (parallelism 4.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i> 1222 ms resolve to new modules
     |  | 33 ms (parallelism 6.2) build modules > ./src/app/app.component.ts
     | 64 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    64 ms build modules
+ 1 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.004333 ms
<t> compute affected modules: 0.004379 ms
<t> finish modules: 20.733497 ms
<t> report dependency errors and warnings: 3.544096 ms
<t> optimize dependencies: 7.33513 ms
<t> create chunks: 2.39052 ms
<t> compute affected modules with chunk graph: 0.002792 ms
<t> optimize: 21.23626 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 9.470611 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.361368 ms
<t> runtime requirements.modules: 0.059312 ms
<t> runtime requirements.chunks: 0.157043 ms
<t> runtime requirements.entries: 0.892734 ms
<t> runtime requirements: 1.464319 ms
<t> hashing: initialize hash: 0.005531 ms
<t> hashing: sort chunks: 0.041084 ms
<t> hashing: hash runtime modules: 1.388362 ms
<t> hashing: hash chunks: 1.154145 ms
<t> hashing: hash digest: 0.037863 ms
<t> hashing: process full hash modules: 0.183155 ms
<t> hashing: 2.930103 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.055093 ms
<t> module assets: 0.141924 ms
<t> create chunk assets: 0.91056 ms
<t> process assets: 354.516225 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1630 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.693015 ms
<t> figure out provided exports: 4.5448 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006269 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.4012 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.067396 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.373577 ms
<t> trace exports usage in graph: 3.619956 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.068791 ms
<t> visitModules: visiting: 1.699044 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.748734 ms
<t> connectChunkGroups: 0.001987 ms
<t> cleanup: 0.001082 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.03288 ms
<t> modules: 2.021163 ms
<t> queue: 0.004133 ms
<t> maxSize: 0.027794 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.853248 ms
<t> sort relevant modules: 0.108478 ms
<t> find modules to concatenate: 4.312039 ms
<t> sort concat configurations: 0.001341 ms
<t> create concatenated modules: 4.003753 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.141279 ms
+ 1 hidden lines

2023-10-20 20:56:45: webpack 5.88.2 compiled in 3531 ms (3a49b0fbd02a039f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 297.867848 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.478222 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 37 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 980 used items and pack 2 with 19 unused items
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.878461 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.742545 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.611203 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.140019 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.085263 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.699009 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.019075 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'JavaScriptOptimizerPlugin|main.js': 1.348477 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 187.701061 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 3 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.60 kB |                67.58 kB

Build at: 2023-10-21T00:56:45.783Z - Hash: 3a49b0fbd02a039f - Time: 4178ms
Done in 5.74s.
```
Fri Oct 20 08:56:47 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.112
info New version: 0.0.113
Done in 0.12s.
