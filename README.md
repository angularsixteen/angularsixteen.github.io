Wed Jan  3 03:11:54 AM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.5Gi       5.5Gi       122Mi       8.8Gi        13Gi
Swap:          8.0Gi       821Mi       7.2Gi
System Storage
469M	.
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
    

Angular CLI: 17.0.8
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.8
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.8
@angular-devkit/build-angular   17.0.8
@angular-devkit/core            17.0.8
@angular-devkit/schematics      17.0.8
@schematics/angular             17.0.8
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.29s.
```
```bash
Latest version:     1.0.30001572
Installed version:  1.0.30001572
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1632.1183660000002 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (6869711072a2938c != c15303505e139144)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 407.170527 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 3.794143 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (29.8 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 6.70839 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.583067 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 1.694807 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 2.444774 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.115762 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (29.8 MiB): 109.919752 ms
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
  ./src/main.ts + 87 modules [627] 2.02 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    1367 ms (resolving: 550 ms, restoring: 1 ms, integration: 0 ms, building: 816 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    45 new snapshots created
    39% root snapshot uncached (759 / 1924)
    16% children snapshot uncached (359 / 2284)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 75% (273/365) entries shared via 1 shared snapshots (38 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 45% (105/232) entries shared via 6 shared snapshots (9 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 49% (100/205) entries shared via 9 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 68% (125/183) entries shared via 11 shared snapshots (21 times referenced)
    Managed missing snapshot optimization: 79% (194/246) entries shared via 14 shared snapshots (25 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.403876 ms
<t> runtime requirements.chunks: 0.20898 ms
<t> runtime requirements.entries: 1.664814 ms
<t> finish module profiles: 5.829056 ms
<t> compute affected modules: 0.005836 ms
<t> finish modules: 26.116755 ms
<t> report dependency errors and warnings: 4.500466 ms
<t> optimize dependencies: 9.694199 ms
<t> create chunks: 2.831308 ms
<t> compute affected modules with chunk graph: 0.003095 ms
<t> optimize: 26.999451 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.954258 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.504748 ms
<t> runtime requirements.modules: 0.212151 ms
<t> runtime requirements.chunks: 0.108564 ms
<t> runtime requirements.entries: 0.539046 ms
<t> runtime requirements: 1.032164 ms
<t> hashing: initialize hash: 0.005139 ms
<t> hashing: sort chunks: 0.042376 ms
<t> hashing: hash runtime modules: 1.031996 ms
<t> hashing: hash chunks: 1.112227 ms
<t> hashing: hash digest: 0.037615 ms
<t> hashing: process full hash modules: 0.197447 ms
<t> hashing: 2.606823 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.05248 ms
<t> module assets: 0.155506 ms
<t> create chunk assets: 0.974457 ms
<t> process assets: 314.471488 ms

LOG from webpack.Compiler
<t> make hook: 1380.363987 ms
<t> finish make hook: 0.091541 ms
<t> finish compilation: 36.489187 ms
<t> seal compilation: 367.807407 ms
<t> afterCompile hook: 0.10512 ms
<t> emitAssets: 3.280987 ms
<t> emitRecords: 0.082663 ms
<t> done hook: 72.623828 ms
<t> beginIdle: 0.325698 ms

LOG from webpack.Compilation.ModuleProfile
     | 183 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 186 ms (parallelism 3) resolve to new modules > ./src/main.ts
     | 184 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
    663 ms resolve to new modules
     |  | 118 ms (parallelism 6.9) build modules > ./src/styles.scss?ngGlobalStyle
     | 118 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 91 ms (parallelism 7.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 91 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    225 ms build modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    2% really resolved (42 real resolves with 42 cached but invalid, 1639 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.11871 ms
<t> figure out provided exports: 7.774738 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.010203 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.337449 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.391114 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.538806 ms
<t> trace exports usage in graph: 4.377042 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.164692 ms
<t> visitModules: visiting: 1.931759 ms
    209 queue items processed (91 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.987837 ms
<t> connectChunkGroups: 0.002169 ms
<t> cleanup: 0.001422 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048208 ms
<t> modules: 2.481546 ms
<t> queue: 0.004637 ms
<t> maxSize: 0.031699 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.947215 ms
<t> sort relevant modules: 0.098834 ms
<t> find modules to concatenate: 4.64753 ms
<t> sort concat configurations: 0.002197 ms
<t> create concatenated modules: 8.259198 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.16739 ms
+ 1 hidden lines

2024-01-03 03:12:16: webpack 5.89.0 compiled in 3395 ms (5c7a2401469d3c75)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 354.329523 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 4.436612 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 45 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 43.391128 ms
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
main.js             | main          | 182.79 kB |                48.65 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 286.69 kB |                68.20 kB

Build at: 2024-01-03T08:12:17.040Z - Hash: 5c7a2401469d3c75 - Time: 3971ms
Done in 5.42s.
```
