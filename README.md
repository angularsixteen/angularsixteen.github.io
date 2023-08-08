Tue Aug  8 10:46:30 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.9Gi       3.2Gi       533Mi       9.2Gi        11Gi
Swap:          8.0Gi       991Mi       7.0Gi
System Storage
383M	.
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
    

Angular CLI: 16.1.8
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.8
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.8
@angular-devkit/build-angular   16.1.8
@angular-devkit/core            16.1.8
@angular-devkit/schematics      16.1.8
@schematics/angular             16.1.8
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1535.037419 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (a52bd3e6ee297b0b != 93a4f1bfd07bda6e)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 582.614815 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.920451 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (108 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.773697 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.192049 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (108 KiB): 10.004677 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.1 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.562668 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.187453 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.51243 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.163346 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.1 MiB): 62.564839 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 205 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 205 KiB = runtime.js 906 bytes main.js 205 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 906 bytes = runtime.js 906 bytes styles.css 0 bytes
chunk {179} (runtime: runtime) main.js (main) 1.83 MiB [initial]
  ./src/main.ts + 88 modules [652] 1.83 MiB {179} [built]
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
    39% root snapshot uncached (747 / 1907)
    16% children snapshot uncached (351 / 2263)
    1306 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/306) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 28% (53/188) entries shared via 4 shared snapshots (7 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 45% (82/183) entries shared via 9 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 56% (80/142) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 79% (179/226) entries shared via 12 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1125.336652 ms
<t> finish make hook: 0.09672 ms
<t> finish compilation: 29.11038 ms
<t> seal compilation: 397.924024 ms
<t> afterCompile hook: 0.107989 ms
<t> emitAssets: 3.597802 ms
<t> emitRecords: 0.058028 ms
<t> done hook: 89.61239 ms
<t> beginIdle: 0.34747 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 211 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 215 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 213 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 55 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 54 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 821 ms resolve to new modules
+ 14 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.103763 ms
<t> compute affected modules: 0.004863 ms
<t> finish modules: 21.594543 ms
<t> report dependency errors and warnings: 3.375372 ms
<t> optimize dependencies: 7.143779 ms
<t> create chunks: 2.424859 ms
<t> compute affected modules with chunk graph: 0.003741 ms
<t> optimize: 22.322735 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 7.725176 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.40227 ms
<t> runtime requirements.modules: 0.083639 ms
<t> runtime requirements.chunks: 0.152536 ms
<t> runtime requirements.entries: 3.58486 ms
<t> runtime requirements: 4.166163 ms
<t> hashing: initialize hash: 0.006995 ms
<t> hashing: sort chunks: 0.044969 ms
<t> hashing: hash runtime modules: 1.371722 ms
<t> hashing: hash chunks: 1.141495 ms
<t> hashing: hash digest: 0.035489 ms
<t> hashing: process full hash modules: 0.147341 ms
<t> hashing: 2.855445 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.052931 ms
<t> module assets: 0.124059 ms
<t> create chunk assets: 0.894677 ms
<t> process assets: 348.414263 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1633 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.724419 ms
<t> figure out provided exports: 8.061414 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007662 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.400818 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 2.963196 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.345083 ms
<t> trace exports usage in graph: 3.57338 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.046931 ms
<t> visitModules: visiting: 1.709775 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.785179 ms
<t> connectChunkGroups: 0.001813 ms
<t> cleanup: 0.001035 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.026329 ms
<t> modules: 2.070319 ms
<t> queue: 0.003803 ms
<t> maxSize: 0.027852 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.893187 ms
<t> sort relevant modules: 0.098958 ms
<t> find modules to concatenate: 4.31342 ms
<t> sort concat configurations: 0.001509 ms
<t> create concatenated modules: 4.250839 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.146059 ms
+ 1 hidden lines

2023-08-08 10:46:51: webpack 5.86.0 compiled in 3069 ms (d902fc5b5c62f5bb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 276.432452 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.975794 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.663699 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 32.451757 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 4 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.54 kB |                55.88 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.43 kB |                66.99 kB

Build at: 2023-08-08T14:46:52.389Z - Hash: d902fc5b5c62f5bb - Time: 3538ms
Done in 4.92s.
```
