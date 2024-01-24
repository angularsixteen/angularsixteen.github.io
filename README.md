Wed Jan 24 12:05:35 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       1.6Gi       305Mi        12Gi        13Gi
Swap:          8.0Gi       512Ki       8.0Gi
System Storage
431M	.
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
    

Angular CLI: 17.1.0
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.0
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.0
@angular-devkit/build-angular   17.1.0
@angular-devkit/core            17.1.0
@angular-devkit/schematics      17.1.0
@schematics/angular             17.1.0
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.49s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.27s.
```
```bash
Latest version:     1.0.30001579
Installed version:  1.0.30001579
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.1.1/angular-webpack/1ff66c7803f3deb5203cb2c522d1f6c8be67b4dc.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.1.1/angular-webpack/1ff66c7803f3deb5203cb2c522d1f6c8be67b4dc/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 2245.830241 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 184 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.03 MiB [initial] [rendered]
  ./src/main.ts + 87 modules [627] 2.03 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1595 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 1554 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2279 ms (resolving: 38 ms, restoring: 0 ms, integration: 0 ms, building: 2241 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.371802 ms
<t> runtime requirements.chunks: 0.286567 ms
<t> runtime requirements.entries: 2.292888 ms
<t> finish module profiles: 8.879976 ms
<t> compute affected modules: 0.007482 ms
<t> finish modules: 23.622042 ms
<t> report dependency errors and warnings: 5.161792 ms
<t> optimize dependencies: 10.610359 ms
<t> create chunks: 3.243138 ms
<t> compute affected modules with chunk graph: 0.004152 ms
<t> optimize: 30.991962 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 11.192014 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 485.910784 ms
<t> runtime requirements.modules: 0.262603 ms
<t> runtime requirements.chunks: 0.102146 ms
<t> runtime requirements.entries: 0.545033 ms
<t> runtime requirements: 1.148897 ms
<t> hashing: initialize hash: 0.007 ms
<t> hashing: sort chunks: 0.05622 ms
<t> hashing: hash runtime modules: 1.397049 ms
<t> hashing: hash chunks: 1.34778 ms
<t> hashing: hash digest: 0.051397 ms
<t> hashing: process full hash modules: 0.192004 ms
<t> hashing: 3.262578 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.077483 ms
<t> module assets: 0.149336 ms
<t> create chunk assets: 3.708185 ms
<t> process assets: 4049.332838 ms

LOG from webpack.Compiler
<t> make hook: 6860.8883829999995 ms
<t> finish make hook: 0.137899 ms
<t> finish compilation: 37.721517 ms
<t> seal compilation: 4601.514254 ms
<t> afterCompile hook: 0.156013 ms
<t> emitAssets: 10.206581 ms
<t> emitRecords: 0.075162 ms
<t> done hook: 94.272768 ms
<t> beginIdle: 0.42979 ms

LOG from webpack.Compilation.ModuleProfile
     | 109 ms (parallelism 2.5) resolve to new modules > ./src/main.ts
<i>  | 360 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 91 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 92 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i> 1067 ms resolve to new modules
<i>  | 359 ms (parallelism 4) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 383 ms resolve to existing modules
<w>  |  | 572 ms (parallelism 3.9) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 572 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 395 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 144 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 128 ms (parallelism 6.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 2067 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 435 ms (parallelism 3.9) build modules > ./src/main.ts
     |  | 46 ms (parallelism 5.2) build modules > ./src/app/app.component.ts
<i>  | 503 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 486 ms (parallelism 4.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 486 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 392 ms (parallelism 4.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 483 ms (parallelism 4.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 70 ms (parallelism 13.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 145 ms (parallelism 6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 63 ms (parallelism 15.3) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 51 ms (parallelism 20.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 1204 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 4840 ms build modules
+ 6 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (516 real resolves with 0 cached but invalid, 1175 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.137866 ms
<t> figure out provided exports: 16.106694 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.829265 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.624657 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.425789 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.651763 ms
<t> trace exports usage in graph: 5.060404 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.290706 ms
<t> visitModules: visiting: 2.20575 ms
    209 queue items processed (91 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.283076 ms
<t> connectChunkGroups: 0.003087 ms
<t> cleanup: 0.00173 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048975 ms
<t> modules: 3.055743 ms
<t> queue: 0.006418 ms
<t> maxSize: 0.045561 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.230843 ms
<t> sort relevant modules: 0.116566 ms
<t> find modules to concatenate: 5.605411 ms
<t> sort concat configurations: 0.002343 ms
<t> create concatenated modules: 5.461387 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 215.313482 ms
<t> optimize asset: polyfills.js: 924.189891 ms
<t> optimize asset: main.js: 3544.644146 ms
<t> optimize js assets: 3599.79403 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 12.459365 ms
<t> optimize css assets: 17.918115 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1175)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3124/3685) entries shared via 2 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 60% (142/236) entries shared via 9 shared snapshots (13 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 14% (136/941) entries shared via 10 shared snapshots (21 times referenced)
    Managed files snapshot optimization: 81% (3183/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 87% (3677/4214) entries shared via 187 shared snapshots (739 times referenced)

2024-01-24 12:06:16: webpack 5.89.0 compiled in 13738 ms (464757a160a6c9e5)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2107.275641 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 65.708721 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.948139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.36205 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 6.366654 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 4.598783 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.185618 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.246427 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/never.js': 1.364811 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/combineLatest': 1.293018 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.513774 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|0d92ed4ae47266c2|runtime': 11.47062 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.399398 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 238.697546 ms
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
main.js             | main          | 184.30 kB |                49.06 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 288.20 kB |                68.61 kB

Build at: 2024-01-24T17:06:19.254Z - Hash: 464757a160a6c9e5 - Time: 16407ms
Done in 18.02s.
```
Wed Jan 24 12:06:21 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.335
info New version: 0.0.336
Done in 0.11s.
