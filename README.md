Tue Jun 13 10:23:48 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.0Gi       1.7Gi       775Mi       8.6Gi       9.2Gi
Swap:          8.0Gi       2.2Gi       5.8Gi
System Storage
309M	.
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
    

Angular CLI: 16.0.5
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.5
@angular-devkit/build-angular   16.0.5
@angular-devkit/core            16.0.5
@angular-devkit/schematics      16.0.5
@schematics/angular             16.0.5
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
```
Latest version:     1.0.30001502
Installed version:  1.0.30001502
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001502
Installed version:  1.0.30001502
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1839.87815 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (1feb0002b27ed42e != 6c45f10e7d671abe)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 526.711175 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.995381 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (101 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 4.879328 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (101 KiB): 28.640812 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.270194 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.314924 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.01102 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.942325 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.409712 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/single.js': 3.578322 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.320204 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27 MiB): 90.171174 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.83 MiB [initial]
  ./src/main.ts + 88 modules [470] 1.83 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 79 bytes (css/mini-extract) [cached] 2 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    35 new snapshots created
    39% root snapshot uncached (745 / 1907)
    15% children snapshot uncached (348 / 2260)
    1302 entries tested
    File info in cache: 85 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (224/297) entries shared via 1 shared snapshots (31 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 29% (51/173) entries shared via 3 shared snapshots (6 times referenced)
    Managed items info in cache: 52 items
    Managed items snapshot optimization: 44% (80/181) entries shared via 8 shared snapshots (14 times referenced)
    Managed files snapshot optimization: 60% (80/134) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 81% (181/224) entries shared via 13 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1192.770062 ms
<t> finish make hook: 0.201169 ms
<t> finish compilation: 29.530506 ms
<t> seal compilation: 413.825112 ms
<t> afterCompile hook: 0.136075 ms
<t> emitAssets: 4.404676 ms
<t> emitRecords: 0.061143 ms
<t> done hook: 97.969384 ms
<t> beginIdle: 0.439269 ms

LOG from webpack.Compilation.ModuleProfile
     | 200 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 203 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 201 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 83 ms (parallelism 4.7) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 82 ms (parallelism 4.7) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 30 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 820 ms resolve to new modules
     | 30 ms (parallelism 3) integrate modules > ./src/styles.scss?ngGlobalStyle
     | 30 ms (parallelism 3) integrate modules > ./src/main.ts
     | 30 ms (parallelism 3) integrate modules > ./node_modules/zone.js/fesm2015/zone.js
    100 ms integrate modules
     | 30 ms (parallelism 3) restore modules > ./src/styles.scss?ngGlobalStyle
     | 30 ms (parallelism 3) restore modules > ./src/main.ts
     | 30 ms (parallelism 3) restore modules > ./node_modules/zone.js/fesm2015/zone.js
    100 ms restore modules
+ 4 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.457099 ms
<t> compute affected modules: 0.005128 ms
<t> finish modules: 20.925435 ms
<t> report dependency errors and warnings: 4.103484 ms
<t> optimize dependencies: 8.399875 ms
<t> create chunks: 2.81228 ms
<t> compute affected modules with chunk graph: 0.003236 ms
<t> optimize: 24.777336 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 7.458735 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.417085 ms
<t> runtime requirements.modules: 0.07954 ms
<t> runtime requirements.chunks: 0.178884 ms
<t> runtime requirements.entries: 0.890878 ms
<t> runtime requirements: 1.519883 ms
<t> hashing: initialize hash: 0.007058 ms
<t> hashing: sort chunks: 0.044142 ms
<t> hashing: hash runtime modules: 1.523601 ms
<t> hashing: hash chunks: 1.235896 ms
<t> hashing: hash digest: 0.063142 ms
<t> hashing: process full hash modules: 0.158461 ms
<t> hashing: 3.160474 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.059345 ms
<t> module assets: 0.138929 ms
<t> create chunk assets: 0.926152 ms
<t> process assets: 362.494639 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (34 real resolves with 34 cached but invalid, 1635 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.832233 ms
<t> figure out provided exports: 4.927633 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 234 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006435 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.586999 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.280883 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.484698 ms
<t> trace exports usage in graph: 4.266177 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.23949 ms
<t> visitModules: visiting: 1.985502 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.042077 ms
<t> connectChunkGroups: 0.002323 ms
<t> cleanup: 0.001246 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038116 ms
<t> modules: 2.309971 ms
<t> queue: 0.004275 ms
<t> maxSize: 0.03229 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.939275 ms
<t> sort relevant modules: 0.113727 ms
<t> find modules to concatenate: 7.969828 ms
<t> sort concat configurations: 0.001612 ms
<t> create concatenated modules: 4.515318 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.156307 ms
+ 1 hidden lines

2023-06-13 10:24:07: webpack 5.80.0 compiled in 3453 ms (4fbfd3058c02c9dc)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 304.515503 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.330669 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 35 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.961682 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 35.841776 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1033 items, 4 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.57 kB |                55.90 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.45 kB |                67.02 kB

Build at: 2023-06-13T14:24:08.520Z - Hash: 4fbfd3058c02c9dc - Time: 3985ms
Done in 5.78s.
```
