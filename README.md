Sun Dec 10 06:34:42 AM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       2.5Gi       287Mi        11Gi        13Gi
Swap:          8.0Gi        17Mi       8.0Gi
System Storage
450M	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.0.6
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.6
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.6
@angular-devkit/build-angular   17.0.6
@angular-devkit/core            17.0.6
@angular-devkit/schematics      17.0.6
@schematics/angular             17.0.6
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
```bash
Latest version:     1.0.30001568
Installed version:  1.0.30001566
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.0.6/angular-webpack/edbb14e3a31c9aead1f83683ffac81a073ab4e34.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.0.6/angular-webpack/edbb14e3a31c9aead1f83683ffac81a073ab4e34/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1693.7732879999999 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 183 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 184 KiB = runtime.js 906 bytes main.js 183 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.02 MiB [initial] [rendered]
  ./src/main.ts + 90 modules [339] 2.02 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1216 ms (resolving: 29 ms, restoring: 1 ms, integration: 0 ms, building: 1186 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    3094 ms (resolving: 27 ms, restoring: 0 ms, integration: 0 ms, building: 3067 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.163617 ms
<t> runtime requirements.chunks: 0.119349 ms
<t> runtime requirements.entries: 0.932907 ms
<t> finish module profiles: 6.004929 ms
<t> compute affected modules: 0.005355 ms
<t> finish modules: 13.5859 ms
<t> report dependency errors and warnings: 3.701278 ms
<t> optimize dependencies: 7.84187 ms
<t> create chunks: 2.272 ms
<t> compute affected modules with chunk graph: 0.00312 ms
<t> optimize: 24.390305 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 5.636546 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 363.442524 ms
<t> runtime requirements.modules: 0.232809 ms
<t> runtime requirements.chunks: 0.095527 ms
<t> runtime requirements.entries: 0.488622 ms
<t> runtime requirements: 1.038168 ms
<t> hashing: initialize hash: 0.007302 ms
<t> hashing: sort chunks: 0.062565 ms
<t> hashing: hash runtime modules: 1.207132 ms
<t> hashing: hash chunks: 1.225167 ms
<t> hashing: hash digest: 0.047702 ms
<t> hashing: process full hash modules: 0.179449 ms
<t> hashing: 2.915708 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.06509 ms
<t> module assets: 0.141651 ms
<t> create chunk assets: 3.223192 ms
<t> process assets: 2873.792336 ms

LOG from webpack.Compiler
<t> make hook: 5243.48442 ms
<t> finish make hook: 0.102101 ms
<t> finish compilation: 23.33817 ms
<t> seal compilation: 3286.28586 ms
<t> afterCompile hook: 0.129769 ms
<t> emitAssets: 3.508584 ms
<t> emitRecords: 0.064515 ms
<t> done hook: 98.485806 ms
<t> beginIdle: 0.412378 ms

LOG from webpack.Compilation.ModuleProfile
     | 39 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     | 48 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 48 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
    384 ms resolve to new modules
<w>  |  | 783 ms (parallelism 3.9) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 783 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 306 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 92 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 93 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1498 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 327 ms (parallelism 3.9) build modules > ./src/main.ts
<i>  | 348 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w>  |  | 616 ms (parallelism 4.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 616 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 381 ms (parallelism 4.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 376 ms (parallelism 4.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 160 ms (parallelism 5.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 81 ms (parallelism 6.6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 49 ms (parallelism 10.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<i>  | 1074 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 4329 ms build modules
+ 3 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (516 real resolves with 0 cached but invalid, 1166 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.787373 ms
<t> figure out provided exports: 8.235434 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.442623 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.794068 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.099314 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.588845 ms
<t> trace exports usage in graph: 3.788948 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.95509 ms
<t> visitModules: visiting: 1.54376 ms
    207 queue items processed (94 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.614076 ms
<t> connectChunkGroups: 0.002043 ms
<t> cleanup: 0.001209 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.022542 ms
<t> modules: 5.003773 ms
<t> queue: 0.008294 ms
<t> maxSize: 0.093333 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.961139 ms
<t> sort relevant modules: 0.099964 ms
<t> find modules to concatenate: 3.941951 ms
<t> sort concat configurations: 0.001907 ms
<t> create concatenated modules: 3.925836 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 177.940146 ms
<t> optimize asset: polyfills.js: 629.542478 ms
<t> optimize asset: main.js: 2484.759608 ms
<t> optimize js assets: 2529.484044 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 13.804595 ms
<t> optimize css assets: 18.672779 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1166)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3124/3685) entries shared via 2 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 49% (115/236) entries shared via 7 shared snapshots (10 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 11% (102/941) entries shared via 9 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 80% (3182/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 87% (3683/4214) entries shared via 188 shared snapshots (742 times referenced)

2023-12-10 06:35:13: webpack 5.89.0 compiled in 10236 ms (357c75b0b830b2e4)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1282.435876 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 52.65369 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.099214 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.27533 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 4.176093 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 4.070653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 3.076633 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.921068 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/of.js': 1.06111 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 1.498978 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|05ec4e774714278f|runtime': 8.233284 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.370235 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 199.040238 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1038 items, 1 files, 30 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
- Generating index html...
Unable to locate stylesheet: /home/kushal/src/angular/angularsixteen/docs/assts/css/pico.min.css
31 rules skipped due to selector errors:
  :where() -> Empty sub-selector
  [role=link]:is([aria-current],,) -> Empty sub-selector
  a:is([aria-current],,) -> Empty sub-selector
  [role=link].secondary:is([aria-current],,) -> Empty sub-selector
  a.secondary:is([aria-current],,) -> Empty sub-selector
  [role=link].contrast:is([aria-current],,) -> Empty sub-selector
  a.contrast:is([aria-current],,) -> Empty sub-selector
  [role=button]:is([aria-current],,) -> Empty sub-selector
  button:is([aria-current],,) -> Empty sub-selector
  input[type=button]:is([aria-current],,) -> Empty sub-selector
  input[type=reset]:is([aria-current],,) -> Empty sub-selector
  input[type=submit]:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).secondary:is([aria-current],,) -> Empty sub-selector
  input[type=reset]:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).contrast:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).outline:is([aria-current],,) -> Empty sub-selector
  input[type=reset].outline:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).outline.secondary:is([aria-current],,) -> Empty sub-selector
  input[type=reset].outline:is([aria-current],,) -> Empty sub-selector
  :is(button,input[type=submit],input[type=button],[role=button]).outline.contrast:is([aria-current],,) -> Empty sub-selector
  :where(select,textarea):is() -> Empty sub-selector
  input:not([type=submit],[type=button],[type=reset],[type=checkbox],[type=radio],[readonly]):is() -> Empty sub-selector
  :where(select,textarea):is() -> Empty sub-selector
  input:not([type=submit],[type=button],[type=reset],[role=switch],[readonly]):is() -> Empty sub-selector
  :where(input,select,textarea)[aria-invalid=false]:is() -> Empty sub-selector
  :where(input,select,textarea)[aria-invalid=true]:is() -> Empty sub-selector
  [type=file]:is() -> Empty sub-selector
  [type=file]:is() -> Empty sub-selector
  [type=file]:is() -> Empty sub-selector
  dialog article .close:is([aria-current],,) -> Empty sub-selector
  nav :where(a,[role=link]):is([aria-current],,) -> Empty sub-selector
✔ Index html generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 183.27 kB |                49.04 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 287.17 kB |                68.59 kB

Build at: 2023-12-10T11:35:15.279Z - Hash: 357c75b0b830b2e4 - Time: 12108ms
Done in 13.66s.
```
Sun Dec 10 06:35:17 AM EST 2023
yarn version v1.22.21
info Current version: 0.0.209
info New version: 0.0.210
Done in 0.12s.
