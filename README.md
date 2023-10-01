Sun Oct  1 04:33:57 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.7Gi       3.3Gi       644Mi       9.2Gi        11Gi
Swap:          8.0Gi       3.0Mi       8.0Gi
System Storage
478M	.
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.7
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cli                    16.2.4
@schematics/angular             16.2.4
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001541
Installed version:  1.0.30001541
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001541
Installed version:  1.0.30001541
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1847.532813 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (55e8610afa396cf0 != 7778addc667edfaf)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 906.723823 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.537722 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (109 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.651521 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.678691 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (109 KiB): 17.03509 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.9 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.667912 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.532201 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.93653 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.056936 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.9 MiB): 99.856689 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
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
    39% root snapshot uncached (747 / 1905)
    15% children snapshot uncached (350 / 2262)
    1306 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 75% (231/307) entries shared via 1 shared snapshots (32 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 38% (71/188) entries shared via 5 shared snapshots (8 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 50% (93/185) entries shared via 10 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 55% (80/145) entries shared via 6 shared snapshots (14 times referenced)
    Managed missing snapshot optimization: 78% (177/226) entries shared via 11 shared snapshots (21 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1547.2207859999999 ms
<t> finish make hook: 0.128109 ms
<t> finish compilation: 32.252165 ms
<t> seal compilation: 406.854801 ms
<t> afterCompile hook: 0.105668 ms
<t> emitAssets: 3.621327 ms
<t> emitRecords: 0.062325 ms
<t> done hook: 93.905685 ms
<t> beginIdle: 0.366251 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 324 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 325 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 328 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
     | 60 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i> 1177 ms resolve to new modules
     | 33 ms (parallelism 3) integrate modules > ./src/styles.scss?ngGlobalStyle
     | 34 ms (parallelism 3) integrate modules > ./node_modules/zone.js/fesm2015/zone.js
     | 33 ms (parallelism 3) integrate modules > ./src/main.ts
    108 ms integrate modules
     |  | 31 ms (parallelism 6.2) build modules > ./src/app/app.component.ts
     | 61 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    61 ms build modules
     | 33 ms (parallelism 3) restore modules > ./src/styles.scss?ngGlobalStyle
     | 34 ms (parallelism 3) restore modules > ./node_modules/zone.js/fesm2015/zone.js
     | 33 ms (parallelism 3) restore modules > ./src/main.ts
    108 ms restore modules
+ 4 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 4.985373 ms
<t> compute affected modules: 0.005929 ms
<t> finish modules: 23.680748 ms
<t> report dependency errors and warnings: 3.544236 ms
<t> optimize dependencies: 7.556825 ms
<t> create chunks: 2.640583 ms
<t> compute affected modules with chunk graph: 0.002792 ms
<t> optimize: 22.050869 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 11.076706 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.41658 ms
<t> runtime requirements.modules: 0.066877 ms
<t> runtime requirements.chunks: 0.175643 ms
<t> runtime requirements.entries: 1.054577 ms
<t> runtime requirements: 1.676962 ms
<t> hashing: initialize hash: 0.0067 ms
<t> hashing: sort chunks: 0.050805 ms
<t> hashing: hash runtime modules: 1.59844 ms
<t> hashing: hash chunks: 1.414667 ms
<t> hashing: hash digest: 0.043838 ms
<t> hashing: process full hash modules: 0.175849 ms
<t> hashing: 3.414329 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.062315 ms
<t> module assets: 0.174654 ms
<t> create chunk assets: 0.993643 ms
<t> process assets: 355.374511 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (35 real resolves with 35 cached but invalid, 1631 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 5.143207 ms
<t> figure out provided exports: 4.78526 ms
    1% of exports of modules have been determined (2 no declared exports, 3 not cached, 0 flagged uncacheable, 235 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.020033 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.395867 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.16608 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.372827 ms
<t> trace exports usage in graph: 3.74958 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.129338 ms
<t> visitModules: visiting: 1.851336 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.903419 ms
<t> connectChunkGroups: 0.002193 ms
<t> cleanup: 0.00117 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033137 ms
<t> modules: 2.109335 ms
<t> queue: 0.003895 ms
<t> maxSize: 0.027425 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.883087 ms
<t> sort relevant modules: 0.119199 ms
<t> find modules to concatenate: 4.440628 ms
<t> sort concat configurations: 0.001341 ms
<t> create concatenated modules: 4.065425 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.167893 ms
+ 1 hidden lines

2023-10-01 04:34:21: webpack 5.88.2 compiled in 3809 ms (ea54a56e532ece27)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] Node.js doesn't offer a (nice) way to introspect the ESM dependency graph yet.
    Until a full solution is available webpack uses an experimental ESM tracking based on parsing.
    As best effort webpack parses the ESM files to guess dependencies. But this can lead to expensive and incorrect tracking.
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 279.630833 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.64464 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 36 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.73749 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 38.925044 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 4 files, 28 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 207.71 kB |                56.44 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 241.59 kB |                67.54 kB

Build at: 2023-10-01T08:34:21.863Z - Hash: ea54a56e532ece27 - Time: 4292ms
Done in 5.87s.
```
