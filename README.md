Mon Aug  7 11:46:52 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       2.7Gi       395Mi       9.5Gi        11Gi
Swap:          8.0Gi       1.1Gi       6.9Gi
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
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1649.704305 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (93a4f1bfd07bda6e != d68addd6dc5ad1da)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 614.676531 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.165461 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (108 KiB) because of request to: ProgressPlugin|counts
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 5.42393 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (108 KiB): 27.764233 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.1 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.611156 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.156758 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.305937 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.176987 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.1 MiB): 77.438252 ms
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
    39% root snapshot uncached (747 / 1905)
    16% children snapshot uncached (351 / 2263)
    1306 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/306) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (71/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 51% (93/183) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 56% (80/142) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 78% (177/226) entries shared via 11 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1237.134841 ms
<t> finish make hook: 0.131803 ms
<t> finish compilation: 26.333881 ms
<t> seal compilation: 406.59581 ms
<t> afterCompile hook: 0.110531 ms
<t> emitAssets: 3.703015 ms
<t> emitRecords: 0.066021 ms
<t> done hook: 100.404778 ms
<t> beginIdle: 0.32602 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 229 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 232 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 230 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i> 890 ms resolve to new modules
     |  | 33 ms (parallelism 6.2) build modules > ./src/app/app.component.ts
     | 63 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    63 ms build modules
+ 12 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.196751 ms
<t> compute affected modules: 0.004092 ms
<t> finish modules: 18.5621 ms
<t> report dependency errors and warnings: 3.538889 ms
<t> optimize dependencies: 10.692231 ms
<t> create chunks: 2.430554 ms
<t> compute affected modules with chunk graph: 0.003911 ms
<t> optimize: 25.313729 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.797316 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.391041 ms
<t> runtime requirements.modules: 0.076789 ms
<t> runtime requirements.chunks: 0.155665 ms
<t> runtime requirements.entries: 0.934696 ms
<t> runtime requirements: 1.535685 ms
<t> hashing: initialize hash: 0.006481 ms
<t> hashing: sort chunks: 0.042989 ms
<t> hashing: hash runtime modules: 1.384903 ms
<t> hashing: hash chunks: 1.087775 ms
<t> hashing: hash digest: 0.036013 ms
<t> hashing: process full hash modules: 0.150727 ms
<t> hashing: 2.815793 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.054326 ms
<t> module assets: 0.132312 ms
<t> create chunk assets: 0.89878 ms
<t> process assets: 354.151303 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1631 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.044998 ms
<t> figure out provided exports: 4.625139 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006717 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.406023 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.262604 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.43598 ms
<t> trace exports usage in graph: 3.690478 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.099827 ms
<t> visitModules: visiting: 1.753674 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.803268 ms
<t> connectChunkGroups: 0.002119 ms
<t> cleanup: 0.000996 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.027395 ms
<t> modules: 2.09924 ms
<t> queue: 0.003889 ms
<t> maxSize: 0.028265 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.898701 ms
<t> sort relevant modules: 0.101683 ms
<t> find modules to concatenate: 4.262938 ms
<t> sort concat configurations: 0.001577 ms
<t> create concatenated modules: 5.742531 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.120713 ms
+ 1 hidden lines

2023-08-07 23:47:11: webpack 5.86.0 compiled in 3300 ms (d902fc5b5c62f5bb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 298.43376 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 7.893509 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.583513 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 32.773596 ms
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

Build at: 2023-08-08T03:47:11.681Z - Hash: d902fc5b5c62f5bb - Time: 3839ms
Done in 5.43s.
```
