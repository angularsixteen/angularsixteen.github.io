Fri Oct 27 10:25:31 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       2.6Gi       538Mi       8.4Gi        10Gi
Swap:          8.0Gi       541Mi       7.5Gi
System Storage
490M	.
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
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.30s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1535.734523 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (40a15531eeaeb0ff != 04c11bd97e403a19)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 827.961796 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.722499 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (28 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 1.687836 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.196003 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.667506 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 3.270936 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (28 MiB): 76.070341 ms
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
    39% root snapshot uncached (747 / 1905)
    15% children snapshot uncached (350 / 2264)
    1300 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (71/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 49% (90/185) entries shared via 9 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 79% (179/226) entries shared via 12 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1372.152272 ms
<t> finish make hook: 0.089545 ms
<t> finish compilation: 23.938613 ms
<t> seal compilation: 395.399496 ms
<t> afterCompile hook: 0.161441 ms
<t> emitAssets: 3.424054 ms
<t> emitRecords: 0.071422 ms
<t> done hook: 91.96144 ms
<t> beginIdle: 0.34572 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 317 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 318 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 321 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 66 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 66 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i> 1114 ms resolve to new modules
     |  | 45 ms (parallelism 3) build modules > ./src/app/app.module.ts
     | 97 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    97 ms build modules
+ 5 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.34297 ms
<t> compute affected modules: 0.005071 ms
<t> finish modules: 16.668017 ms
<t> report dependency errors and warnings: 3.883557 ms
<t> optimize dependencies: 10.450051 ms
<t> create chunks: 2.45143 ms
<t> compute affected modules with chunk graph: 0.003131 ms
<t> optimize: 20.6593 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.86948 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.378624 ms
<t> runtime requirements.modules: 0.077755 ms
<t> runtime requirements.chunks: 0.155226 ms
<t> runtime requirements.entries: 0.995889 ms
<t> runtime requirements: 1.411432 ms
<t> hashing: initialize hash: 0.005891 ms
<t> hashing: sort chunks: 0.03939 ms
<t> hashing: hash runtime modules: 1.399196 ms
<t> hashing: hash chunks: 1.047529 ms
<t> hashing: hash digest: 0.034967 ms
<t> hashing: process full hash modules: 0.14798 ms
<t> hashing: 2.799878 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.051914 ms
<t> module assets: 0.13336 ms
<t> create chunk assets: 0.863996 ms
<t> process assets: 347.939346 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1631 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.647381 ms
<t> figure out provided exports: 4.492164 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008749 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.363078 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.24877 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.374535 ms
<t> trace exports usage in graph: 6.385367 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.116996 ms
<t> visitModules: visiting: 1.73126 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.780949 ms
<t> connectChunkGroups: 0.002107 ms
<t> cleanup: 0.00096 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.03033 ms
<t> modules: 2.005683 ms
<t> queue: 0.004195 ms
<t> maxSize: 0.028419 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.783784 ms
<t> sort relevant modules: 0.14171 ms
<t> find modules to concatenate: 3.884312 ms
<t> sort concat configurations: 0.023026 ms
<t> create concatenated modules: 3.926479 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.106518 ms
+ 1 hidden lines

2023-10-27 10:25:54: webpack 5.88.2 compiled in 3297 ms (52968b2f17ef1ec0)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 243.263153 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.788126 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 37 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 980 used items and pack 2 with 19 unused items
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.337734 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.771573 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.900746 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.21124 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.059982 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.283461 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.703189 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 1.017259 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'JavaScriptOptimizerPlugin|main.js': 1.416051 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 139.998807 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 3 files, 28 MiB)
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

Build at: 2023-10-27T14:25:54.887Z - Hash: 52968b2f17ef1ec0 - Time: 3862ms
Done in 5.34s.
```
Fri Oct 27 10:25:56 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.121
info New version: 0.0.122
Done in 0.11s.
