Thu Jul 13 08:14:39 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.4Gi       2.5Gi       499Mi       9.4Gi        10Gi
Swap:          8.0Gi       617Mi       7.4Gi
System Storage
376M	.
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
    

Angular CLI: 16.1.4
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.4
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@schematics/angular             16.1.4
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.30s.
```
Latest version:     1.0.30001515
Installed version:  1.0.30001515
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001515
Installed version:  1.0.30001515
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1673.34194 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (9cfed948210f3706 != 651cc9be44f28e70)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 374.70178 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.833235 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.1 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 1.756785 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.429032 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.078064 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.679678 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.1 MiB): 87.499401 ms
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
    39% root snapshot uncached (747 / 1905)
    15% children snapshot uncached (351 / 2265)
    1300 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/306) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (71/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 49% (90/183) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 56% (80/142) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 78% (177/226) entries shared via 11 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 988.130555 ms
<t> finish make hook: 0.12358 ms
<t> finish compilation: 27.499299 ms
<t> seal compilation: 413.295956 ms
<t> afterCompile hook: 0.181301 ms
<t> emitAssets: 3.569028 ms
<t> emitRecords: 0.061812 ms
<t> done hook: 93.328195 ms
<t> beginIdle: 0.342062 ms

LOG from webpack.Compilation.ModuleProfile
     | 168 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 175 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 173 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 38 ms (parallelism 5.8) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 38 ms (parallelism 5.8) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    620 ms resolve to new modules
     |  | 144 ms build modules > ./src/main.ts
     |  | 36 ms (parallelism 5.7) build modules > ./src/app/app.component.ts
     | 193 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    193 ms build modules
+ 2 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.150172 ms
<t> compute affected modules: 0.005143 ms
<t> finish modules: 19.272443 ms
<t> report dependency errors and warnings: 4.030193 ms
<t> optimize dependencies: 7.675837 ms
<t> create chunks: 2.528075 ms
<t> compute affected modules with chunk graph: 0.003438 ms
<t> optimize: 25.981678 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.893793 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.378547 ms
<t> runtime requirements.modules: 0.106734 ms
<t> runtime requirements.chunks: 0.166096 ms
<t> runtime requirements.entries: 0.968768 ms
<t> runtime requirements: 1.643168 ms
<t> hashing: initialize hash: 0.007092 ms
<t> hashing: sort chunks: 0.04368 ms
<t> hashing: hash runtime modules: 1.457792 ms
<t> hashing: hash chunks: 1.151793 ms
<t> hashing: hash digest: 0.037011 ms
<t> hashing: process full hash modules: 0.147513 ms
<t> hashing: 3.017456 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.053676 ms
<t> module assets: 0.146245 ms
<t> create chunk assets: 1.010238 ms
<t> process assets: 362.325012 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1631 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.010488 ms
<t> figure out provided exports: 5.152315 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007961 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.424428 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.359454 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.42129 ms
<t> trace exports usage in graph: 3.5863 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.060187 ms
<t> visitModules: visiting: 1.787856 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.837328 ms
<t> connectChunkGroups: 0.001717 ms
<t> cleanup: 0.000963 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.028698 ms
<t> modules: 2.325827 ms
<t> queue: 0.004648 ms
<t> maxSize: 0.033215 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.94289 ms
<t> sort relevant modules: 0.103338 ms
<t> find modules to concatenate: 8.783028 ms
<t> sort concat configurations: 0.002495 ms
<t> create concatenated modules: 4.343561 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.17452 ms
+ 1 hidden lines

2023-07-13 08:14:58: webpack 5.86.0 compiled in 3081 ms (f6932bfeb2ce7d8b)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 296.478628 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.771756 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 37 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 980 used items and pack 2 with 19 unused items
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.859419 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.57299 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.604648 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.167178 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.356903 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.955365 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators|request=|../observable/zip': 1.009608 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.087871 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk666': 1.423053 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 145.016337 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 3 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.79 kB |                55.99 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.67 kB |                67.10 kB

Build at: 2023-07-13T12:14:59.081Z - Hash: f6932bfeb2ce7d8b - Time: 3696ms
Done in 5.51s.
```
