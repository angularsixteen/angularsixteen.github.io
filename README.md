Tue Sep 26 07:00:46 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.3Gi       311Mi       9.7Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
439M	.
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
    

Angular CLI: 16.2.3
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.6
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.3
@angular-devkit/build-angular   16.2.3
@angular-devkit/core            16.2.3
@angular-devkit/schematics      16.2.3
@angular/cli                    16.2.3
@schematics/angular             16.2.3
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001539
Installed version:  1.0.30001539
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001539
Installed version:  1.0.30001539
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1594.25949 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (90b2fbaea8e7d4b5 != 9a9347e34e1ff0cb)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 320.258606 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.986733 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (109 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.096899 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (109 KiB): 16.327967 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.32004 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.194783 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.017869 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.931931 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/util/NotFoundError': 4.293463 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.8 MiB): 69.226082 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 206 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 207 KiB = runtime.js 906 bytes main.js 206 KiB
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
    39% root snapshot uncached (747 / 1910)
    16% children snapshot uncached (353 / 2267)
    1291 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 27% (51/188) entries shared via 4 shared snapshots (7 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 48% (88/185) entries shared via 9 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 80% (181/226) entries shared via 13 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 899.472491 ms
<t> finish make hook: 0.113246 ms
<t> finish compilation: 26.191358 ms
<t> seal compilation: 404.537789 ms
<t> afterCompile hook: 0.111158 ms
<t> emitAssets: 3.556003 ms
<t> emitRecords: 0.065165 ms
<t> done hook: 85.385199 ms
<t> beginIdle: 0.397858 ms

LOG from webpack.Compilation.ModuleProfile
     | 125 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 125 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 128 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 53 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 54 ms (parallelism 6.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
    583 ms resolve to new modules
+ 14 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.923888 ms
<t> compute affected modules: 0.004243 ms
<t> finish modules: 18.894131 ms
<t> report dependency errors and warnings: 3.338465 ms
<t> optimize dependencies: 6.971714 ms
<t> create chunks: 2.401901 ms
<t> compute affected modules with chunk graph: 0.00306 ms
<t> optimize: 24.462153 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.935577 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.372472 ms
<t> runtime requirements.modules: 0.072268 ms
<t> runtime requirements.chunks: 0.154257 ms
<t> runtime requirements.entries: 0.917735 ms
<t> runtime requirements: 1.525902 ms
<t> hashing: initialize hash: 0.006326 ms
<t> hashing: sort chunks: 0.040764 ms
<t> hashing: hash runtime modules: 1.414447 ms
<t> hashing: hash chunks: 1.133313 ms
<t> hashing: hash digest: 0.039661 ms
<t> hashing: process full hash modules: 0.148691 ms
<t> hashing: 2.898188 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.053098 ms
<t> module assets: 0.154681 ms
<t> create chunk assets: 0.923898 ms
<t> process assets: 356.415312 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1636 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.836044 ms
<t> figure out provided exports: 4.724967 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006617 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.405349 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 2.901782 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.369347 ms
<t> trace exports usage in graph: 3.435544 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.022553 ms
<t> visitModules: visiting: 1.67269 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.721446 ms
<t> connectChunkGroups: 0.001842 ms
<t> cleanup: 0.001018 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.030482 ms
<t> modules: 5.038447 ms
<t> queue: 0.006503 ms
<t> maxSize: 0.049116 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.916163 ms
<t> sort relevant modules: 0.101442 ms
<t> find modules to concatenate: 4.462518 ms
<t> sort concat configurations: 0.001437 ms
<t> create concatenated modules: 3.897004 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.148045 ms
+ 1 hidden lines

2023-09-26 07:01:04: webpack 5.88.2 compiled in 2907 ms (f04a48a7e6b196a9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 253.935093 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.135263 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.247174 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 26.581668 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 4 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 206.37 kB |                56.43 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 240.25 kB |                67.53 kB

Build at: 2023-09-26T11:01:04.743Z - Hash: f04a48a7e6b196a9 - Time: 3345ms
Done in 4.91s.
```
Tue Sep 26 07:01:06 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.71
info New version: 0.0.72
Done in 0.12s.
