Thu Jul 20 02:01:17 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       1.7Gi       870Mi        11Gi        11Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
408M	.
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
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.5
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@angular/cli                    16.1.4
@schematics/angular             16.1.4
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.47s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
```
Latest version:     1.0.30001517
Installed version:  1.0.30001516
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.1.5/angular-webpack/4e9698705292392ea591ef13313451b3b756a4f0.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.1.5/angular-webpack/4e9698705292392ea591ef13313451b3b756a4f0/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1749.697555 ms
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
chunk {179} (runtime: runtime) main.js (main) 1.83 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [652] 1.83 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    901 ms (resolving: 155 ms, restoring: 0 ms, integration: 0 ms, building: 746 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1047 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 1017 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.552786 ms
<t> runtime requirements.chunks: 0.406886 ms
<t> runtime requirements.entries: 1.454698 ms
<t> finish module profiles: 6.59743 ms
<t> compute affected modules: 0.005324 ms
<t> finish modules: 13.047644 ms
<t> report dependency errors and warnings: 3.560159 ms
<t> optimize dependencies: 11.173219 ms
<t> create chunks: 2.643147 ms
<t> compute affected modules with chunk graph: 0.00432 ms
<t> optimize: 22.128354 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.567825 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 431.933631 ms
<t> runtime requirements.modules: 0.344099 ms
<t> runtime requirements.chunks: 0.211485 ms
<t> runtime requirements.entries: 0.604124 ms
<t> runtime requirements: 1.761583 ms
<t> hashing: initialize hash: 0.010531 ms
<t> hashing: sort chunks: 0.054414 ms
<t> hashing: hash runtime modules: 1.192996 ms
<t> hashing: hash chunks: 1.39725 ms
<t> hashing: hash digest: 0.044203 ms
<t> hashing: process full hash modules: 0.154851 ms
<t> hashing: 3.061873 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061287 ms
<t> module assets: 0.137459 ms
<t> create chunk assets: 2.660085 ms
<t> process assets: 5760.878694 ms

LOG from webpack.Compiler
<t> make hook: 5106.292987 ms
<t> finish make hook: 0.134957 ms
<t> finish compilation: 23.239354 ms
<t> seal compilation: 6244.898747 ms
<t> afterCompile hook: 0.159833 ms
<t> emitAssets: 3.817354 ms
<t> emitRecords: 0.076369 ms
<t> done hook: 115.656598 ms
<t> beginIdle: 0.395571 ms

LOG from webpack.Compilation.ModuleProfile
     | 53 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 51 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 248 ms (parallelism 5.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 248 ms (parallelism 5.4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 37 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i> 994 ms resolve to new modules
<i>  | 248 ms (parallelism 5.4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 273 ms resolve to existing modules
<i>  |  | 282 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 282 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 196 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 196 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 355 ms (parallelism 3.1) build modules > ./src/main.ts
     |  | 32 ms (parallelism 3.8) build modules > ./src/app/app-routing.module.ts
     |  | 33 ms (parallelism 3.8) build modules > ./src/app/app.component.ts
<i>  | 430 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 191 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 144 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 145 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1609 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 219 ms (parallelism 5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 251 ms (parallelism 5.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 42 ms (parallelism 20.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 53 ms (parallelism 15.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 88 ms (parallelism 8.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 653 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3177 ms build modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (515 real resolves with 0 cached but invalid, 1160 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.912604 ms
<t> figure out provided exports: 7.899829 ms
    96% of exports of modules have been determined (9 no declared exports, 239 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.237257 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.339416 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 6.069715 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.506171 ms
<t> trace exports usage in graph: 4.264425 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.137308 ms
<t> visitModules: visiting: 1.831209 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.909336 ms
<t> connectChunkGroups: 0.001978 ms
<t> cleanup: 0.001197 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.02912 ms
<t> modules: 2.180844 ms
<t> queue: 0.004157 ms
<t> maxSize: 0.064065 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.978644 ms
<t> sort relevant modules: 0.111451 ms
<t> find modules to concatenate: 4.865151 ms
<t> sort concat configurations: 0.001697 ms
<t> create concatenated modules: 4.135141 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 224.342946 ms
<t> optimize asset: polyfills.js: 690.762349 ms
<t> optimize asset: main.js: 5309.905449 ms
<t> optimize js assets: 5369.839778 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 4.330309 ms
<t> optimize css assets: 6.131636 ms

LOG from webpack.FileSystemInfo
    757 new snapshots created
    0% root snapshot uncached (0 / 1160)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 96 timestamps 20 hashes 20 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3118/3675) entries shared via 2 shared snapshots (512 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (112/210) entries shared via 8 shared snapshots (13 times referenced)
    Managed items info in cache: 53 items
    Managed items snapshot optimization: 12% (108/924) entries shared via 7 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 81% (3169/3933) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3662/4199) entries shared via 186 shared snapshots (738 times referenced)

2023-07-20 14:02:04: webpack 5.86.0 compiled in 13114 ms (895ec586bae5fa7f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 814.366215 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 43.219332 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1036 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.696966 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.378327 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.703693 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 5.096374 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.825433 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.120652 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.230329 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/scanInternals.js': 1.427546 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|a9cb9faf17796f14|runtime': 7.569594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 3.817706 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 220.462775 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 1 files, 27 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 204.54 kB |                55.99 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes
styles.css          | styles        |   0 bytes |                       -

| Initial Total | 238.43 kB |                67.09 kB

Build at: 2023-07-20T18:02:05.448Z - Hash: 895ec586bae5fa7f - Time: 14394ms
Done in 16.08s.
```
