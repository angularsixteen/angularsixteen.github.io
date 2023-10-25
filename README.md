Wed Oct 25 05:10:20 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.2Gi       4.8Gi       262Mi       9.2Gi        13Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
459M	.
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

Angular: 16.2.10
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
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1690.004387 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (1473c759086d89db != 7ac9a8b407ce2f64)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 821.288305 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.232791 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (109 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 4.107636 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (109 KiB): 11.649448 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.9 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.689791 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.252625 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.077184 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.9 MiB): 55.081458 ms
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
    39% root snapshot uncached (747 / 1908)
    16% children snapshot uncached (351 / 2263)
    1306 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 27% (51/188) entries shared via 4 shared snapshots (7 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 43% (80/185) entries shared via 8 shared snapshots (14 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 80% (181/226) entries shared via 13 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1364.83834 ms
<t> finish make hook: 0.095669 ms
<t> finish compilation: 26.051521 ms
<t> seal compilation: 393.350346 ms
<t> afterCompile hook: 0.13383 ms
<t> emitAssets: 3.129602 ms
<t> emitRecords: 0.066367 ms
<t> done hook: 90.073341 ms
<t> beginIdle: 0.43584 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 291 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 292 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 295 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 50 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 50 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i> 1077 ms resolve to new modules
+ 15 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.117802 ms
<t> compute affected modules: 0.004923 ms
<t> finish modules: 17.741803 ms
<t> report dependency errors and warnings: 4.148342 ms
<t> optimize dependencies: 8.169634 ms
<t> create chunks: 2.525142 ms
<t> compute affected modules with chunk graph: 0.00286 ms
<t> optimize: 25.910944 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 7.41777 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.42144 ms
<t> runtime requirements.modules: 0.065219 ms
<t> runtime requirements.chunks: 0.166864 ms
<t> runtime requirements.entries: 1.043814 ms
<t> runtime requirements: 1.466586 ms
<t> hashing: initialize hash: 0.005403 ms
<t> hashing: sort chunks: 0.039994 ms
<t> hashing: hash runtime modules: 1.40617 ms
<t> hashing: hash chunks: 1.088234 ms
<t> hashing: hash digest: 0.035538 ms
<t> hashing: process full hash modules: 0.182302 ms
<t> hashing: 2.878532 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05245 ms
<t> module assets: 0.124459 ms
<t> create chunk assets: 0.900774 ms
<t> process assets: 341.97192 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1634 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.731639 ms
<t> figure out provided exports: 4.657979 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008543 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.355098 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.68592 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.382359 ms
<t> trace exports usage in graph: 3.673001 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.102801 ms
<t> visitModules: visiting: 1.722446 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.787579 ms
<t> connectChunkGroups: 0.00205 ms
<t> cleanup: 0.001362 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.037618 ms
<t> modules: 2.051402 ms
<t> queue: 0.004117 ms
<t> maxSize: 0.028305 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.880412 ms
<t> sort relevant modules: 0.096848 ms
<t> find modules to concatenate: 8.144723 ms
<t> sort concat configurations: 0.001663 ms
<t> create concatenated modules: 5.109988 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.133961 ms
+ 1 hidden lines

2023-10-25 17:10:42: webpack 5.88.2 compiled in 3454 ms (3a49b0fbd02a039f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 233.823126 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.403142 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.225403 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 32.632103 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 4 files, 28 MiB)
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

Build at: 2023-10-25T21:10:42.727Z - Hash: 3a49b0fbd02a039f - Time: 3877ms
Done in 5.20s.
```
Wed Oct 25 05:10:45 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.119
info New version: 0.0.120
Done in 0.11s.
