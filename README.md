Mon Sep 25 04:27:20 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.4Gi       3.8Gi       280Mi        10Gi        13Gi
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
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001539
Installed version:  1.0.30001538
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1603.257494 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (5fc0e2392c5a86b2 != 456141549894b7d1)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001539 != caniuse-lite@1.0.30001538)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/16.2.3/angular-webpack/05dd36a17729aeceef809c43bf1bef1c5344f599.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 851.270576 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.89 MiB [initial] [rendered]
  ./src/main.ts + 89 modules [768] 1.89 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1033 ms (resolving: 892 ms, restoring: 1 ms, integration: 0 ms, building: 140 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1447 ms (resolving: 890 ms, restoring: 0 ms, integration: 0 ms, building: 557 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.421096 ms
<t> runtime requirements.chunks: 0.459598 ms
<t> runtime requirements.entries: 1.550821 ms
<t> finish module profiles: 6.869001 ms
<t> compute affected modules: 0.004655 ms
<t> finish modules: 13.531979 ms
<t> report dependency errors and warnings: 3.56103 ms
<t> optimize dependencies: 7.76952 ms
<t> create chunks: 2.890835 ms
<t> compute affected modules with chunk graph: 0.003408 ms
<t> optimize: 19.786163 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.410686 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 339.079366 ms
<t> runtime requirements.modules: 0.321573 ms
<t> runtime requirements.chunks: 0.087569 ms
<t> runtime requirements.entries: 0.494672 ms
<t> runtime requirements: 1.131511 ms
<t> hashing: initialize hash: 0.008481 ms
<t> hashing: sort chunks: 0.058414 ms
<t> hashing: hash runtime modules: 1.300376 ms
<t> hashing: hash chunks: 1.310066 ms
<t> hashing: hash digest: 0.048274 ms
<t> hashing: process full hash modules: 0.172642 ms
<t> hashing: 3.113402 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.074135 ms
<t> module assets: 0.15235 ms
<t> create chunk assets: 3.016478 ms
<t> process assets: 3106.634251 ms

LOG from webpack.Compiler
<t> make hook: 2689.473132 ms
<t> finish make hook: 0.120379 ms
<t> finish compilation: 24.000972 ms
<t> seal compilation: 3495.22057 ms
<t> afterCompile hook: 0.13657 ms
<t> emitAssets: 3.623658 ms
<t> emitRecords: 0.061611 ms
<t> done hook: 99.553416 ms
<t> beginIdle: 0.39929 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 297 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 300 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 298 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 86 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 48 ms (parallelism 5.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 1258 ms resolve to new modules
<i>  |  | 210 ms (parallelism 2.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 210 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 256 ms (parallelism 2.5) build modules > ./src/main.ts
<i>  | 283 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 36 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 213 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 100 ms (parallelism 3.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 100 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 47 ms (parallelism 4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 82 ms (parallelism 5.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 91 ms (parallelism 5.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 224 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 1043 ms build modules
+ 6 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1161 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.050175 ms
<t> figure out provided exports: 7.840065 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.274391 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.855958 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.384526 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.370044 ms
<t> trace exports usage in graph: 3.639058 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.301258 ms
<t> visitModules: visiting: 1.981827 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.088919 ms
<t> connectChunkGroups: 0.001945 ms
<t> cleanup: 0.001368 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032416 ms
<t> modules: 2.077632 ms
<t> queue: 0.00418 ms
<t> maxSize: 0.029402 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.859657 ms
<t> sort relevant modules: 0.109736 ms
<t> find modules to concatenate: 4.5216 ms
<t> sort concat configurations: 0.001979 ms
<t> create concatenated modules: 4.174785 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 251.654752 ms
<t> optimize asset: polyfills.js: 709.422042 ms
<t> optimize asset: main.js: 2657.827242 ms
<t> optimize js assets: 2718.962818 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 1.556193 ms
<t> optimize css assets: 1.992271 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1161)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3677) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 42% (89/210) entries shared via 7 shared snapshots (9 times referenced)
    Managed items info in cache: 54 items
    Managed items snapshot optimization: 11% (105/928) entries shared via 11 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3174/3938) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3668/4199) entries shared via 187 shared snapshots (741 times referenced)

2023-09-25 04:27:49: webpack 5.88.2 compiled in 7789 ms (f04a48a7e6b196a9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 368.525213 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.882525 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.444968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.116247 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.5551 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.077196 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.017796 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.120262 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.246366 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/empty.js': 1.004236 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/scheduler|request=|./Action': 1.345759 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a79ac85f0e081bf5|runtime': 8.52594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.767074 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 201.167396 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 28 MiB)
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

Build at: 2023-09-25T08:27:50.057Z - Hash: f04a48a7e6b196a9 - Time: 8537ms
Done in 10.07s.
```
Mon Sep 25 04:27:52 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.69
info New version: 0.0.70
Done in 0.12s.
