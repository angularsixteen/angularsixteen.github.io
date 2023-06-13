Tue Jun 13 06:19:25 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.3Gi       658Mi       940Mi        10Gi       9.7Gi
Swap:          8.0Gi        46Mi       8.0Gi
System Storage
335M	.
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
    

Angular CLI: 16.0.0
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.0
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0
@angular-devkit/build-angular   16.0.0
@angular-devkit/core            16.0.0
@angular-devkit/schematics      16.0.0
@schematics/angular             16.0.0
rxjs                            7.8.1
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.29s.
```
Latest version:     1.0.30001502
Installed version:  1.0.30001482
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/16.0.5/angular-webpack/4f8ad407c21ba7741f56144a2c1b4a9df9790572.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/16.0.5/angular-webpack/4f8ad407c21ba7741f56144a2c1b4a9df9790572/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1756.042248 ms
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
  ./src/main.ts + 88 modules [470] 1.83 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    896 ms (resolving: 156 ms, restoring: 0 ms, integration: 0 ms, building: 740 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 79 bytes (css/mini-extract) [initial] [rendered]
  dependent modules 79 bytes [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1054 ms (resolving: 33 ms, restoring: 0 ms, integration: 0 ms, building: 1021 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.572215 ms
<t> runtime requirements.chunks: 0.445064 ms
<t> runtime requirements.entries: 1.824119 ms
<t> finish module profiles: 10.790112 ms
<t> compute affected modules: 0.005138 ms
<t> finish modules: 13.649085 ms
<t> report dependency errors and warnings: 3.393452 ms
<t> optimize dependencies: 11.254388 ms
<t> create chunks: 2.844041 ms
<t> compute affected modules with chunk graph: 0.00532 ms
<t> optimize: 22.919157 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.610558 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 361.495865 ms
<t> runtime requirements.modules: 0.266823 ms
<t> runtime requirements.chunks: 0.087848 ms
<t> runtime requirements.entries: 0.458139 ms
<t> runtime requirements: 1.043421 ms
<t> hashing: initialize hash: 0.007255 ms
<t> hashing: sort chunks: 0.05862 ms
<t> hashing: hash runtime modules: 1.187995 ms
<t> hashing: hash chunks: 1.240603 ms
<t> hashing: hash digest: 0.046696 ms
<t> hashing: process full hash modules: 0.165824 ms
<t> hashing: 2.913839 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.063132 ms
<t> module assets: 0.146325 ms
<t> create chunk assets: 3.038391 ms
<t> process assets: 5378.706164 ms

LOG from webpack.Compiler
<t> make hook: 5319.028719 ms
<t> finish make hook: 0.280675 ms
<t> finish compilation: 27.873119 ms
<t> seal compilation: 5793.016382 ms
<t> afterCompile hook: 0.1766 ms
<t> emitAssets: 4.645859 ms
<t> emitRecords: 0.070168 ms
<t> done hook: 138.704999 ms
<t> beginIdle: 0.538497 ms

LOG from webpack.Compilation.ModuleProfile
     | 54 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 52 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 275 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 280 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i> 1035 ms resolve to new modules
<i>  | 275 ms (parallelism 5) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 301 ms resolve to existing modules
<i>  |  | 285 ms (parallelism 3.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 285 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 194 ms (parallelism 3.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 194 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 362 ms (parallelism 3.1) build modules > ./src/main.ts
<i>  | 423 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 191 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 139 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 113 ms (parallelism 6.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 1692 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 297 ms (parallelism 4.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 291 ms (parallelism 4.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 40 ms (parallelism 21.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 51 ms (parallelism 15.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 144 ms (parallelism 5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 824 ms build modules > 5 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 3427 ms build modules
+ 5 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (514 real resolves with 0 cached but invalid, 1158 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.909453 ms
<t> figure out provided exports: 8.17995 ms
    96% of exports of modules have been determined (9 no declared exports, 238 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.329622 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.508724 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.459655 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.470648 ms
<t> trace exports usage in graph: 6.943511 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.2531 ms
<t> visitModules: visiting: 1.97122 ms
    203 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.048314 ms
<t> connectChunkGroups: 0.001883 ms
<t> cleanup: 0.001459 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031324 ms
<t> modules: 2.324814 ms
<t> queue: 0.004295 ms
<t> maxSize: 0.033156 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.912476 ms
<t> sort relevant modules: 0.111812 ms
<t> find modules to concatenate: 4.798522 ms
<t> sort concat configurations: 0.00185 ms
<t> create concatenated modules: 4.209123 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 286.67014 ms
<t> optimize asset: polyfills.js: 607.641616 ms
<t> optimize asset: main.js: 4914.184618 ms
<t> optimize js assets: 4972.696038 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 8.708401 ms
<t> optimize css assets: 13.737234 ms

LOG from webpack.FileSystemInfo
    755 new snapshots created
    0% root snapshot uncached (0 / 1158)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 85 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3111/3666) entries shared via 2 shared snapshots (511 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 50% (97/195) entries shared via 6 shared snapshots (11 times referenced)
    Managed items info in cache: 52 items
    Managed items snapshot optimization: 10% (90/921) entries shared via 6 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 81% (3169/3923) entries shared via 175 shared snapshots (718 times referenced)
    Managed missing snapshot optimization: 87% (3662/4197) entries shared via 186 shared snapshots (738 times referenced)

2023-06-13 06:20:16: webpack 5.80.0 compiled in 12883 ms (4fbfd3058c02c9dc)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 768.623162 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 35.68603 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1033 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 3.053053 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.550459 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.490772 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.422296 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.885708 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.426736 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/concatAll.js': 1.224763 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/throttleTime.js': 1.409602 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|b4adf73a96b89792|runtime': 8.288736 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.107682 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 225.984458 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1033 items, 1 files, 27 MiB)
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

Build at: 2023-06-13T10:20:18.238Z - Hash: 4fbfd3058c02c9dc - Time: 14175ms
Done in 15.94s.
```
Tue Jun 13 06:20:20 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.0
info New version: 0.0.1
Done in 0.12s.
