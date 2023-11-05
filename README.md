Sun Nov  5 07:17:51 AM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       3.3Gi       543Mi       9.6Gi        11Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
System Storage
535M	.
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
    

Angular CLI: 16.2.9
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.12
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.9
@angular-devkit/build-angular   16.2.9
@angular-devkit/core            16.2.9
@angular-devkit/schematics      16.2.9
@angular/cli                    16.2.9
@schematics/angular             16.2.9
rxjs                            7.8.1
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.27s.
```
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
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
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1598.027236 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (ede24c0dd48ce84e != aa4bb9ee274fa1e1)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 823.903048 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.715008 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (27.7 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (223 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.265736 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.322332 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.019725 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.047175 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (27.7 MiB): 67.979294 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (223 KiB): 75.211255 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 180 KiB {179} [emitted] (name: main)
asset styles.css 70 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 181 KiB = runtime.js 906 bytes main.js 180 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {179} (runtime: runtime) main.js (main) 1.87 MiB [initial]
  ./src/main.ts + 89 modules [768] 1.87 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1801 ms (resolving: 945 ms, restoring: 1 ms, integration: 0 ms, building: 855 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    45 new snapshots created
    39% root snapshot uncached (757 / 1924)
    16% children snapshot uncached (358 / 2282)
    1328 entries tested
    File info in cache: 102 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (280/365) entries shared via 1 shared snapshots (39 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 43% (90/211) entries shared via 6 shared snapshots (9 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 52% (106/205) entries shared via 11 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 68% (125/183) entries shared via 11 shared snapshots (21 times referenced)
    Managed missing snapshot optimization: 79% (194/246) entries shared via 14 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.166441 ms
<t> runtime requirements.chunks: 0.117096 ms
<t> runtime requirements.entries: 0.952206 ms
<t> finish module profiles: 3.318074 ms
<t> compute affected modules: 0.00517 ms
<t> finish modules: 19.352719 ms
<t> report dependency errors and warnings: 3.280823 ms
<t> optimize dependencies: 9.140819 ms
<t> create chunks: 2.144291 ms
<t> compute affected modules with chunk graph: 0.003082 ms
<t> optimize: 20.3622 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.478484 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.352214 ms
<t> runtime requirements.modules: 0.229608 ms
<t> runtime requirements.chunks: 0.081293 ms
<t> runtime requirements.entries: 0.374391 ms
<t> runtime requirements: 0.856801 ms
<t> hashing: initialize hash: 0.031447 ms
<t> hashing: sort chunks: 0.039592 ms
<t> hashing: hash runtime modules: 0.930076 ms
<t> hashing: hash chunks: 1.007675 ms
<t> hashing: hash digest: 0.035788 ms
<t> hashing: process full hash modules: 0.148304 ms
<t> hashing: 2.329359 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.051163 ms
<t> module assets: 0.141475 ms
<t> create chunk assets: 0.834417 ms
<t> process assets: 303.643379 ms

LOG from webpack.Compiler
<t> make hook: 1815.6420699999999 ms
<t> finish make hook: 0.073082 ms
<t> finish compilation: 25.985286 ms
<t> seal compilation: 347.894019 ms
<t> afterCompile hook: 0.100692 ms
<t> emitAssets: 3.193703 ms
<t> emitRecords: 0.069115 ms
<t> done hook: 70.225769 ms
<t> beginIdle: 0.327026 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 315 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 315 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 371 ms (parallelism 2.9) resolve to new modules > ./src/main.ts
     | 33 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 33 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 1111 ms resolve to new modules
     |  | 130 ms (parallelism 6.6) build modules > ./src/styles.scss?ngGlobalStyle
     | 130 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 99 ms (parallelism 7.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 99 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    260 ms build modules
+ 5 hidden lines

LOG from webpack.ResolverCachePlugin
    2% really resolved (42 real resolves with 42 cached but invalid, 1640 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.694345 ms
<t> figure out provided exports: 6.321801 ms
    1% of exports of modules have been determined (9 no declared exports, 3 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008209 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.233197 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.337684 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.723105 ms
<t> trace exports usage in graph: 4.761701 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.847385 ms
<t> visitModules: visiting: 1.448231 ms
    205 queue items processed (93 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.497851 ms
<t> connectChunkGroups: 0.001716 ms
<t> cleanup: 0.00099 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.030311 ms
<t> modules: 1.874062 ms
<t> queue: 0.00398 ms
<t> maxSize: 0.02793 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.81373 ms
<t> sort relevant modules: 0.092584 ms
<t> find modules to concatenate: 3.757931 ms
<t> sort concat configurations: 0.001689 ms
<t> create concatenated modules: 4.279343 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.112895 ms
+ 1 hidden lines

2023-11-05 07:18:19: webpack 5.88.2 compiled in 3759 ms (2b96e4a28e986a52)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 336.116843 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.182462 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 45 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 33.710446 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1036 items, 2 files, 28 MiB)
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
main.js             | main          | 180.24 kB |                48.24 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  33.00 kB |                10.61 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 284.17 kB |                67.75 kB

Build at: 2023-11-05T12:18:19.613Z - Hash: 2b96e4a28e986a52 - Time: 4307ms
Done in 5.79s.
```
