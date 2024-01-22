Mon Jan 22 05:55:05 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       3.0Gi       302Mi        11Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
430M	.
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
Done in 0.31s.
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1565.7646869999999 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (eed8a63cc713e05d != 4ff9e8b2cebedbe3)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1172.271595 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 4.198913 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (29.9 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.313601 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.169269 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.231461 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.451398 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (29.9 MiB): 56.12219 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 60.065783 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 184 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 2.03 MiB [initial]
  ./src/main.ts + 87 modules [627] 2.03 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2049 ms (resolving: 1300 ms, restoring: 0 ms, integration: 0 ms, building: 749 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    45 new snapshots created
    39% root snapshot uncached (759 / 1924)
    16% children snapshot uncached (361 / 2287)
    1336 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (280/365) entries shared via 1 shared snapshots (39 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 44% (103/232) entries shared via 6 shared snapshots (9 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 49% (100/205) entries shared via 9 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 68% (125/183) entries shared via 11 shared snapshots (21 times referenced)
    Managed missing snapshot optimization: 79% (194/246) entries shared via 13 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.187129 ms
<t> runtime requirements.chunks: 0.118843 ms
<t> runtime requirements.entries: 0.933981 ms
<t> finish module profiles: 3.544557 ms
<t> compute affected modules: 0.004762 ms
<t> finish modules: 18.550054 ms
<t> report dependency errors and warnings: 3.446759 ms
<t> optimize dependencies: 9.454985 ms
<t> create chunks: 2.2812 ms
<t> compute affected modules with chunk graph: 0.003666 ms
<t> optimize: 21.241251 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.159986 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.618639 ms
<t> runtime requirements.modules: 0.186043 ms
<t> runtime requirements.chunks: 0.081866 ms
<t> runtime requirements.entries: 0.443108 ms
<t> runtime requirements: 0.885729 ms
<t> hashing: initialize hash: 0.005301 ms
<t> hashing: sort chunks: 0.043961 ms
<t> hashing: hash runtime modules: 0.928577 ms
<t> hashing: hash chunks: 0.967834 ms
<t> hashing: hash digest: 0.034786 ms
<t> hashing: process full hash modules: 0.1454 ms
<t> hashing: 2.261617 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.053435 ms
<t> module assets: 0.138269 ms
<t> create chunk assets: 0.842548 ms
<t> process assets: 305.311602 ms

LOG from webpack.Compiler
<t> make hook: 2064.914052 ms
<t> finish make hook: 0.074347 ms
<t> finish compilation: 25.574143 ms
<t> seal compilation: 350.598811 ms
<t> afterCompile hook: 0.106059 ms
<t> emitAssets: 3.299675 ms
<t> emitRecords: 0.079628 ms
<t> done hook: 80.036016 ms
<t> beginIdle: 0.340313 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 433 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 435 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 437 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i> 1409 ms resolve to new modules
     | 50 ms (parallelism 2) integrate modules > ./src/main.ts
    57 ms integrate modules
     |  | 103 ms (parallelism 7.3) build modules > ./src/styles.scss?ngGlobalStyle
     | 103 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 77 ms (parallelism 8.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 77 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    200 ms build modules
     | 50 ms (parallelism 2) restore modules > ./src/main.ts
    57 ms restore modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    2% really resolved (42 real resolves with 42 cached but invalid, 1639 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.89981 ms
<t> figure out provided exports: 4.711029 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007369 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.231745 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.178189 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.451961 ms
<t> trace exports usage in graph: 3.492817 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.839688 ms
<t> visitModules: visiting: 1.507676 ms
    209 queue items processed (91 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.557554 ms
<t> connectChunkGroups: 0.001909 ms
<t> cleanup: 0.001087 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031261 ms
<t> modules: 2.053681 ms
<t> queue: 0.003862 ms
<t> maxSize: 0.028344 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.863635 ms
<t> sort relevant modules: 0.089947 ms
<t> find modules to concatenate: 3.863835 ms
<t> sort concat configurations: 0.001787 ms
<t> create concatenated modules: 4.009818 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.125899 ms
+ 1 hidden lines

2024-01-22 17:55:25: webpack 5.89.0 compiled in 3983 ms (464757a160a6c9e5)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 409.794477 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 5.584184 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 45 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 51.19276 ms
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
main.js             | main          | 184.30 kB |                49.06 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 288.20 kB |                68.61 kB

Build at: 2024-01-22T22:55:26.628Z - Hash: 464757a160a6c9e5 - Time: 4664ms
Done in 6.02s.
```
Mon Jan 22 05:55:29 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.330
info New version: 0.0.331
Done in 0.12s.
