Fri Jun 30 12:22:00 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.5Gi       352Mi       9.5Gi        12Gi
Swap:          8.0Gi        54Mi       7.9Gi
System Storage
370M	.
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
    

Angular CLI: 16.1.3
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.3
@angular-devkit/build-angular   16.1.3
@angular-devkit/core            16.1.3
@angular-devkit/schematics      16.1.3
@schematics/angular             16.1.3
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1828.408065 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (3167dbb7aa7ddcbb != 0750eb4ddfb740de)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 583.053456 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.056105 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (108 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.240448 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (108 KiB): 10.583116 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.877911 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.214357 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.217893 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.867154 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.644005 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.313354 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/joinAllInternals.js': 3.668306 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.335974 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27 MiB): 68.19895 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 205 KiB {179} [emitted] (name: main)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
asset styles.css 0 bytes {532} [emitted] (name: styles)
Entrypoint main 206 KiB = runtime.js 906 bytes main.js 205 KiB
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
    15% children snapshot uncached (350 / 2263)
    1303 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/306) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (71/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 49% (90/183) entries shared via 9 shared snapshots (15 times referenced)
    Managed files snapshot optimization: 56% (80/142) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 80% (181/226) entries shared via 12 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1176.032274 ms
<t> finish make hook: 0.099114 ms
<t> finish compilation: 27.181996 ms
<t> seal compilation: 414.803887 ms
<t> afterCompile hook: 0.09926 ms
<t> emitAssets: 3.493503 ms
<t> emitRecords: 0.058803 ms
<t> done hook: 92.402222 ms
<t> beginIdle: 0.407027 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 212 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 215 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 213 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 60 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 837 ms resolve to new modules
     |  | 32 ms (parallelism 6.2) build modules > ./src/app/app.component.ts
     | 60 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    61 ms build modules
+ 12 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 3.811649 ms
<t> compute affected modules: 0.004592 ms
<t> finish modules: 19.908971 ms
<t> report dependency errors and warnings: 3.427299 ms
<t> optimize dependencies: 7.038234 ms
<t> create chunks: 2.450918 ms
<t> compute affected modules with chunk graph: 0.003105 ms
<t> optimize: 25.523536 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 7.164663 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.539243 ms
<t> runtime requirements.modules: 0.109429 ms
<t> runtime requirements.chunks: 0.201466 ms
<t> runtime requirements.entries: 1.155944 ms
<t> runtime requirements: 1.890398 ms
<t> hashing: initialize hash: 0.005842 ms
<t> hashing: sort chunks: 0.039995 ms
<t> hashing: hash runtime modules: 1.40282 ms
<t> hashing: hash chunks: 1.105417 ms
<t> hashing: hash digest: 0.035861 ms
<t> hashing: process full hash modules: 0.143622 ms
<t> hashing: 2.832791 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.053725 ms
<t> module assets: 0.151627 ms
<t> create chunk assets: 0.919998 ms
<t> process assets: 364.815322 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1633 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.724841 ms
<t> figure out provided exports: 4.557297 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.005969 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.417131 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 2.887681 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.364942 ms
<t> trace exports usage in graph: 3.519325 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.054505 ms
<t> visitModules: visiting: 1.744088 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.79313 ms
<t> connectChunkGroups: 0.001777 ms
<t> cleanup: 0.001149 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.027546 ms
<t> modules: 2.10902 ms
<t> queue: 0.003753 ms
<t> maxSize: 0.028442 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.896516 ms
<t> sort relevant modules: 0.102832 ms
<t> find modules to concatenate: 7.708284 ms
<t> sort concat configurations: 0.001815 ms
<t> create concatenated modules: 4.093943 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.120004 ms
+ 1 hidden lines

2023-06-30 12:22:18: webpack 5.86.0 compiled in 3425 ms (bcf52d509ffb3bb7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 276.824813 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.77924 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 4.494841 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 36.416855 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 4 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.70 kB |                55.98 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.58 kB |                67.09 kB

Build at: 2023-06-30T16:22:19.389Z - Hash: bcf52d509ffb3bb7 - Time: 3912ms
Done in 5.51s.
```
Fri Jun 30 12:22:21 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.13
info New version: 0.0.14
Done in 0.12s.
