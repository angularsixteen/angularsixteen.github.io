Thu Nov  9 06:06:37 AM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.9Gi       1.6Gi       617Mi       8.8Gi       9.4Gi
Swap:          8.0Gi       1.4Gi       6.6Gi
System Storage
529M	.
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
    
Done in 0.49s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.31s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1644.5686970000002 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (609d6327c816665f != 69c7c98305c24cc0)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 986.569328 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 5.273997 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (29.8 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.430202 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.001174 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 39.009346 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.292798 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.66448 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.031801 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.33069 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.94345 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.206702 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/every.js': 5.487847 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (29.8 MiB): 103.153753 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 183 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 184 KiB = runtime.js 906 bytes main.js 183 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.02 MiB [initial]
  ./src/main.ts + 90 modules [339] 2.02 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1970 ms (resolving: 1153 ms, restoring: 0 ms, integration: 0 ms, building: 817 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    45 new snapshots created
    39% root snapshot uncached (759 / 1922)
    16% children snapshot uncached (357 / 2282)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (280/365) entries shared via 1 shared snapshots (39 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (105/232) entries shared via 6 shared snapshots (9 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 49% (100/205) entries shared via 9 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 68% (125/183) entries shared via 11 shared snapshots (21 times referenced)
    Managed missing snapshot optimization: 79% (194/246) entries shared via 13 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.165434 ms
<t> runtime requirements.chunks: 0.123755 ms
<t> runtime requirements.entries: 0.936194 ms
<t> finish module profiles: 3.487066 ms
<t> compute affected modules: 0.005429 ms
<t> finish modules: 18.738973 ms
<t> report dependency errors and warnings: 3.533989 ms
<t> optimize dependencies: 7.59613 ms
<t> create chunks: 2.360716 ms
<t> compute affected modules with chunk graph: 0.003311 ms
<t> optimize: 22.286846 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 5.980914 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.552762 ms
<t> runtime requirements.modules: 0.208084 ms
<t> runtime requirements.chunks: 0.088477 ms
<t> runtime requirements.entries: 0.368022 ms
<t> runtime requirements: 0.83108 ms
<t> hashing: initialize hash: 0.00465 ms
<t> hashing: sort chunks: 0.038494 ms
<t> hashing: hash runtime modules: 0.95891 ms
<t> hashing: hash chunks: 1.05909 ms
<t> hashing: hash digest: 0.034323 ms
<t> hashing: process full hash modules: 0.188505 ms
<t> hashing: 2.377371 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.09076 ms
<t> module assets: 0.126041 ms
<t> create chunk assets: 0.852098 ms
<t> process assets: 309.239113 ms

LOG from webpack.Compiler
<t> make hook: 1985.40204 ms
<t> finish make hook: 0.077026 ms
<t> finish compilation: 25.796562 ms
<t> seal compilation: 353.517239 ms
<t> afterCompile hook: 0.143312 ms
<t> emitAssets: 3.355996 ms
<t> emitRecords: 0.072491 ms
<t> done hook: 76.86757 ms
<t> beginIdle: 0.361264 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 384 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 385 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 388 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i> 1266 ms resolve to new modules
     | 49 ms (parallelism 2) integrate modules > ./src/main.ts
    57 ms integrate modules
     |  | 120 ms (parallelism 6.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 120 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 93 ms (parallelism 7.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 93 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    228 ms build modules
     | 49 ms (parallelism 2) restore modules > ./src/main.ts
    57 ms restore modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    3% really resolved (42 real resolves with 42 cached but invalid, 1637 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.952151 ms
<t> figure out provided exports: 4.833796 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007045 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.237804 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.095504 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.424268 ms
<t> trace exports usage in graph: 3.692896 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.9036 ms
<t> visitModules: visiting: 1.545977 ms
    207 queue items processed (94 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.595122 ms
<t> connectChunkGroups: 0.001837 ms
<t> cleanup: 0.0011 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.042164 ms
<t> modules: 2.119297 ms
<t> queue: 0.004088 ms
<t> maxSize: 0.029508 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.899916 ms
<t> sort relevant modules: 0.095029 ms
<t> find modules to concatenate: 6.071537 ms
<t> sort concat configurations: 0.00176 ms
<t> create concatenated modules: 3.999136 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.103333 ms
+ 1 hidden lines

2023-11-09 06:06:56: webpack 5.89.0 compiled in 3987 ms (0ec95979d01b1792)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 353.589209 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.417188 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 45 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 28.493914 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1038 items, 2 files, 30 MiB)
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
main.js             | main          | 183.05 kB |                48.93 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.95 kB |                68.47 kB

Build at: 2023-11-09T11:06:56.577Z - Hash: 0ec95979d01b1792 - Time: 4547ms
Done in 5.99s.
```
Thu Nov  9 06:06:58 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.154
info New version: 0.0.155
Done in 0.12s.
