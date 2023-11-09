Thu Nov  9 06:15:53 PM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.1Gi       1.2Gi       488Mi        11Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
530M	.
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
    

Angular CLI: 17.0.0
Node: 20.9.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 17.0.1
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.0
@angular-devkit/build-angular   17.0.0
@angular-devkit/core            17.0.0
@angular-devkit/schematics      17.0.0
@angular/cli                    17.0.0
@schematics/angular             17.0.0
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.29s.
```
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.0.0/angular-webpack/d98e144c9f922cce370e1f511cba35a263dc0ec7.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.0.0/angular-webpack/d98e144c9f922cce370e1f511cba35a263dc0ec7/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1638.999728 ms
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
    224 ms (resolving: 40 ms, restoring: 0 ms, integration: 0 ms, building: 184 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    3191 ms (resolving: 38 ms, restoring: 0 ms, integration: 0 ms, building: 3153 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.191574 ms
<t> runtime requirements.chunks: 0.14948 ms
<t> runtime requirements.entries: 1.013919 ms
<t> finish module profiles: 6.348326 ms
<t> compute affected modules: 0.005166 ms
<t> finish modules: 15.341803 ms
<t> report dependency errors and warnings: 3.58368 ms
<t> optimize dependencies: 7.832532 ms
<t> create chunks: 2.190828 ms
<t> compute affected modules with chunk graph: 0.003946 ms
<t> optimize: 23.646007 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.920947 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 402.151143 ms
<t> runtime requirements.modules: 0.264894 ms
<t> runtime requirements.chunks: 0.091731 ms
<t> runtime requirements.entries: 0.473519 ms
<t> runtime requirements: 1.061087 ms
<t> hashing: initialize hash: 0.006817 ms
<t> hashing: sort chunks: 0.054292 ms
<t> hashing: hash runtime modules: 1.265031 ms
<t> hashing: hash chunks: 1.232019 ms
<t> hashing: hash digest: 0.045503 ms
<t> hashing: process full hash modules: 0.174422 ms
<t> hashing: 2.965392 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066911 ms
<t> module assets: 0.151174 ms
<t> create chunk assets: 3.257963 ms
<t> process assets: 2860.42624 ms

LOG from webpack.Compiler
<t> make hook: 4634.288955 ms
<t> finish make hook: 0.218515 ms
<t> finish compilation: 25.316226 ms
<t> seal compilation: 3312.066856 ms
<t> afterCompile hook: 0.121839 ms
<t> emitAssets: 3.125457 ms
<t> emitRecords: 0.055497 ms
<t> done hook: 89.579458 ms
<t> beginIdle: 0.386719 ms

LOG from webpack.Compilation.ModuleProfile
    438 ms resolve to new modules
<w>  |  | 807 ms (parallelism 3.9) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 807 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 57 ms (parallelism 3.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 102 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 100 ms (parallelism 5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 407 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 140 ms (parallelism 3.2) build modules > ./src/main.ts
     | 149 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 196 ms (parallelism 4.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 196 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 615 ms (parallelism 4.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<w>  |  | 643 ms (parallelism 4.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 648 ms (parallelism 4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 52 ms (parallelism 10.5) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 31 ms (parallelism 19.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
<w>  | 2013 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 3581 ms build modules
+ 10 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (516 real resolves with 0 cached but invalid, 1085 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.752384 ms
<t> figure out provided exports: 10.42985 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.171954 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 9.399949 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.034548 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.475968 ms
<t> trace exports usage in graph: 3.91737 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.860293 ms
<t> visitModules: visiting: 1.451431 ms
    207 queue items processed (94 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.529687 ms
<t> connectChunkGroups: 0.001822 ms
<t> cleanup: 0.000991 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.024474 ms
<t> modules: 1.913887 ms
<t> queue: 0.004273 ms
<t> maxSize: 0.028336 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.83353 ms
<t> sort relevant modules: 0.096103 ms
<t> find modules to concatenate: 5.109335 ms
<t> sort concat configurations: 0.002033 ms
<t> create concatenated modules: 4.64232 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 164.745405 ms
<t> optimize asset: polyfills.js: 578.305677 ms
<t> optimize asset: main.js: 2487.926676 ms
<t> optimize js assets: 2532.42816 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.35462 ms
<t> optimize css assets: 12.677004 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1085)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3124/3685) entries shared via 2 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (125/236) entries shared via 8 shared snapshots (11 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 14% (132/941) entries shared via 12 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 81% (3184/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 91% (3818/4214) entries shared via 190 shared snapshots (742 times referenced)

2023-11-09 18:16:25: webpack 5.89.0 compiled in 9597 ms (08775a0c52737ad0)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1266.021471 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 48.60513 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.699036 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.164084 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.652022 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.536353 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.076039 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/exhaustMap.js': 1.021752 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/multicast.js': 1.361995 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|05ec4e774714278f|runtime': 8.818698 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.368858 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 159.843801 ms
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
main.js             | main          | 183.03 kB |                48.98 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.93 kB |                68.52 kB

Build at: 2023-11-09T23:16:27.567Z - Hash: 08775a0c52737ad0 - Time: 11330ms
Done in 12.86s.
```
