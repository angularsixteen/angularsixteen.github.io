Tue Oct 10 11:27:19 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.2Gi       2.3Gi       262Mi        11Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
450M	.
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
    

Angular CLI: 16.2.5
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.8
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.5
@angular-devkit/build-angular   16.2.5
@angular-devkit/core            16.2.5
@angular-devkit/schematics      16.2.5
@angular/cli                    16.2.5
@schematics/angular             16.2.5
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001547
Installed version:  1.0.30001547
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001547
Installed version:  1.0.30001547
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1623.7036050000002 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (b4298699b006a66a != 879142fe18fb84f3)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 314.925442 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.763646 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (28 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 1.77733 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.515285 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.138615 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.815899 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (28 MiB): 76.488515 ms
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
    39% root snapshot uncached (747 / 1909)
    15% children snapshot uncached (351 / 2265)
    1300 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 32% (61/188) entries shared via 4 shared snapshots (7 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 43% (80/185) entries shared via 8 shared snapshots (14 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 80% (181/226) entries shared via 13 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 891.998826 ms
<t> finish make hook: 0.154024 ms
<t> finish compilation: 24.9293 ms
<t> seal compilation: 415.933665 ms
<t> afterCompile hook: 0.203394 ms
<t> emitAssets: 3.761053 ms
<t> emitRecords: 0.067293 ms
<t> done hook: 88.011014 ms
<t> beginIdle: 0.426201 ms

LOG from webpack.Compilation.ModuleProfile
     | 144 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 145 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 148 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 78 ms (parallelism 4.4) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 78 ms (parallelism 4.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    619 ms resolve to new modules
     |  | 32 ms (parallelism 6.2) build modules > ./src/app/app.component.ts
     | 59 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    60 ms build modules
+ 1 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.636271 ms
<t> compute affected modules: 0.003682 ms
<t> finish modules: 17.70438 ms
<t> report dependency errors and warnings: 3.55622 ms
<t> optimize dependencies: 7.174272 ms
<t> create chunks: 2.452631 ms
<t> compute affected modules with chunk graph: 0.002759 ms
<t> optimize: 24.883613 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.926367 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.38097 ms
<t> runtime requirements.modules: 0.073947 ms
<t> runtime requirements.chunks: 0.149995 ms
<t> runtime requirements.entries: 0.934795 ms
<t> runtime requirements: 1.489802 ms
<t> hashing: initialize hash: 0.006332 ms
<t> hashing: sort chunks: 0.043792 ms
<t> hashing: hash runtime modules: 1.407067 ms
<t> hashing: hash chunks: 1.150583 ms
<t> hashing: hash digest: 0.037466 ms
<t> hashing: process full hash modules: 0.151288 ms
<t> hashing: 2.949327 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.055524 ms
<t> module assets: 0.148069 ms
<t> create chunk assets: 0.915076 ms
<t> process assets: 366.923512 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1635 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.763444 ms
<t> figure out provided exports: 4.474871 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.00629 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.392692 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 2.964289 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.358233 ms
<t> trace exports usage in graph: 3.59331 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.116179 ms
<t> visitModules: visiting: 1.754719 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.806 ms
<t> connectChunkGroups: 0.001912 ms
<t> cleanup: 0.000976 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034606 ms
<t> modules: 5.197058 ms
<t> queue: 0.006901 ms
<t> maxSize: 0.050108 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.924038 ms
<t> sort relevant modules: 0.104264 ms
<t> find modules to concatenate: 4.425864 ms
<t> sort concat configurations: 0.001694 ms
<t> create concatenated modules: 3.915699 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.16446 ms
+ 1 hidden lines

2023-10-10 11:27:37: webpack 5.88.2 compiled in 2940 ms (a191fc5a77f1c78e)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 263.964273 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 6.247451 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 37 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 980 used items and pack 2 with 19 unused items
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 5.656883 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.3262 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.074968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.556096 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 2.055128 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.552611 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.062927 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.038707 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 1.496105 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 159.177055 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 3 files, 28 MiB)
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

Build at: 2023-10-10T15:27:38.215Z - Hash: a191fc5a77f1c78e - Time: 3521ms
Done in 5.08s.
```
Tue Oct 10 11:27:40 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.103
info New version: 0.0.104
Done in 0.12s.
