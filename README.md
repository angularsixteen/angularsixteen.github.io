Sat Jan  6 05:10:39 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       2.4Gi       288Mi        11Gi        13Gi
Swap:          8.0Gi       646Mi       7.4Gi
System Storage
472M	.
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
    

Angular CLI: 17.0.9
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.9
@angular-devkit/build-angular   17.0.9
@angular-devkit/core            17.0.9
@angular-devkit/schematics      17.0.9
@angular/cli                    17.0.9
@schematics/angular             17.0.9
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.49s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.29s.
```
```bash
Latest version:     1.0.30001574
Installed version:  1.0.30001572
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.0.9/angular-webpack/66521627a56ea4ae021d54b941c91aaa5fcae399.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.0.9/angular-webpack/66521627a56ea4ae021d54b941c91aaa5fcae399/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2452.500409 ms
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
  ./src/main.ts + 87 modules [627] 2.02 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1641 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 1600 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    4157 ms (resolving: 38 ms, restoring: 0 ms, integration: 0 ms, building: 4119 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.244117 ms
<t> runtime requirements.chunks: 0.184519 ms
<t> runtime requirements.entries: 1.3501 ms
<t> finish module profiles: 9.628781 ms
<t> compute affected modules: 0.006024 ms
<t> finish modules: 22.881634 ms
<t> report dependency errors and warnings: 5.170267 ms
<t> optimize dependencies: 10.583395 ms
<t> create chunks: 3.18368 ms
<t> compute affected modules with chunk graph: 0.004695 ms
<t> optimize: 32.273807 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 8.555298 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 518.984718 ms
<t> runtime requirements.modules: 0.262228 ms
<t> runtime requirements.chunks: 0.108401 ms
<t> runtime requirements.entries: 0.526259 ms
<t> runtime requirements: 1.127163 ms
<t> hashing: initialize hash: 0.008264 ms
<t> hashing: sort chunks: 0.055046 ms
<t> hashing: hash runtime modules: 1.35786 ms
<t> hashing: hash chunks: 1.415371 ms
<t> hashing: hash digest: 0.051107 ms
<t> hashing: process full hash modules: 0.195432 ms
<t> hashing: 3.283963 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.076088 ms
<t> module assets: 0.155648 ms
<t> create chunk assets: 3.649691 ms
<t> process assets: 4129.60388 ms

LOG from webpack.Compiler
<t> make hook: 7343.545945 ms
<t> finish make hook: 0.231075 ms
<t> finish compilation: 37.744818 ms
<t> seal compilation: 4713.297731 ms
<t> afterCompile hook: 0.148257 ms
<t> emitAssets: 4.677046 ms
<t> emitRecords: 0.100262 ms
<t> done hook: 132.797154 ms
<t> beginIdle: 0.426768 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 247 ms (parallelism 6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 73 ms (parallelism 6) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 86 ms (parallelism 5.9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 119 ms (parallelism 5.7) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 119 ms (parallelism 5.7) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i> 1059 ms resolve to new modules
<i>  | 247 ms (parallelism 6) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 277 ms resolve to existing modules
<w>  |  | 909 ms (parallelism 4.5) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 909 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 411 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 111 ms (parallelism 6.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 168 ms (parallelism 4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2147 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 447 ms (parallelism 3.9) build modules > ./src/main.ts
<i>  | 474 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w>  |  | 676 ms (parallelism 4.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 676 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 396 ms (parallelism 5.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 363 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 94 ms (parallelism 5.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 87 ms (parallelism 5.9) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 79 ms (parallelism 9.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 45 ms (parallelism 17.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1064 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 5275 ms build modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (516 real resolves with 0 cached but invalid, 1119 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.109497 ms
<t> figure out provided exports: 11.722398 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 5.512725 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.277207 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.165849 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.608572 ms
<t> trace exports usage in graph: 5.323133 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.234104 ms
<t> visitModules: visiting: 2.113646 ms
    209 queue items processed (91 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.225119 ms
<t> connectChunkGroups: 0.002968 ms
<t> cleanup: 0.001683 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.0392 ms
<t> modules: 3.012767 ms
<t> queue: 0.006972 ms
<t> maxSize: 0.04572 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.269661 ms
<t> sort relevant modules: 0.129154 ms
<t> find modules to concatenate: 7.214748 ms
<t> sort concat configurations: 0.004134 ms
<t> create concatenated modules: 5.493444 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 210.377582 ms
<t> optimize asset: polyfills.js: 907.614974 ms
<t> optimize asset: main.js: 3620.1900379999997 ms
<t> optimize js assets: 3682.153563 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.447794 ms
<t> optimize css assets: 17.788738 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1119)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3124/3685) entries shared via 2 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 58% (137/236) entries shared via 9 shared snapshots (12 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 13% (125/941) entries shared via 10 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 80% (3182/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 90% (3804/4214) entries shared via 188 shared snapshots (743 times referenced)

2024-01-06 17:11:18: webpack 5.89.0 compiled in 14535 ms (5c7a2401469d3c75)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1695.96226 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 66.021588 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/app/app.component.ts': 2.998625 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.528624 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.038417 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 6.363666 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 2.153704 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 3.644657 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.350165 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.511181 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/exhaustMap.js': 1.392003 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/expand': 1.202588 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/flatMap.js': 1.848512 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|0d92ed4ae47266c2|runtime': 12.463486 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.503897 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 240.293084 ms
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
main.js             | main          | 182.79 kB |                48.65 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.69 kB |                68.20 kB

Build at: 2024-01-06T22:11:20.620Z - Hash: 5c7a2401469d3c75 - Time: 16815ms
Done in 18.37s.
```
Sat Jan  6 05:11:23 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.276
info New version: 0.0.277
Done in 0.12s.
