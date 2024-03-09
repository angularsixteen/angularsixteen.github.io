Sat Mar  9 09:43:48 AM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       1.6Gi       259Mi        10Gi        11Gi
Swap:          8.0Gi       971Mi       7.1Gi
System Storage
482M	.
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
    

Angular CLI: 17.2.3
Node: 20.11.1
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.2.4
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.3
@angular-devkit/build-angular   17.2.3
@angular-devkit/core            17.2.3
@angular-devkit/schematics      17.2.3
@angular/cli                    17.2.3
@schematics/angular             17.2.3
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.50s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.27s.
```
```bash
Latest version:     1.0.30001596
Installed version:  1.0.30001596
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1731.242378 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (79f727d525ab71f2 != 868e69256518638b)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1205.490726 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 6.606952 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (30.5 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (224 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/main.ts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|zone.js': 1.099243 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.758018 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle': 1.249479 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (224 KiB): 14.517051 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.853194 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.791461 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.608883 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 1.570494 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (30.5 MiB): 108.064875 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Pack 1 got empty and is removed
asset main.js 184 KiB {590} [emitted] (name: main)
asset styles.css 70 KiB {176} [emitted] (name: styles)
asset polyfills.js 33 KiB {260} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {688} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {176} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial]
  cached modules 78.5 KiB [cached] 1 module
  ./src/styles.scss?ngGlobalStyle [256] 50 bytes {176} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2191 ms (resolving: 1358 ms, restoring: 0 ms, integration: 0 ms, building: 833 ms, storing: 0 ms)
chunk {260} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {590} (runtime: runtime) main.js (main) 2.07 MiB [initial]
  ./src/main.ts + 88 modules [712] 2.07 MiB {590} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {688} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    46 new snapshots created
    39% root snapshot uncached (760 / 1926)
    16% children snapshot uncached (358 / 2284)
    1339 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 83% (20/24) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 77% (287/372) entries shared via 1 shared snapshots (40 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 47% (116/247) entries shared via 6 shared snapshots (10 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 48% (98/203) entries shared via 9 shared snapshots (16 times referenced)
    Managed files snapshot optimization: 72% (133/185) entries shared via 12 shared snapshots (22 times referenced)
    Managed missing snapshot optimization: 78% (192/247) entries shared via 12 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.246037 ms
<t> runtime requirements.chunks: 0.136565 ms
<t> runtime requirements.entries: 1.005043 ms
<t> finish module profiles: 4.051962 ms
<t> compute affected modules: 0.005128 ms
<t> finish modules: 19.845935 ms
<t> report dependency errors and warnings: 3.782925 ms
<t> optimize dependencies: 8.404903 ms
<t> create chunks: 2.454669 ms
<t> compute affected modules with chunk graph: 0.003914 ms
<t> optimize: 22.295691 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.387608 ms
    0% code generated (0 generated, 4 from cache)
<t> code generation: 0.647876 ms
<t> runtime requirements.modules: 0.204387 ms
<t> runtime requirements.chunks: 0.101486 ms
<t> runtime requirements.entries: 0.422512 ms
<t> runtime requirements: 0.927182 ms
<t> hashing: initialize hash: 0.005383 ms
<t> hashing: sort chunks: 0.051532 ms
<t> hashing: hash runtime modules: 1.042104 ms
<t> hashing: hash chunks: 1.126971 ms
<t> hashing: hash digest: 0.038951 ms
<t> hashing: process full hash modules: 0.155871 ms
<t> hashing: 2.598314 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.055284 ms
<t> module assets: 0.15504 ms
<t> create chunk assets: 0.956343 ms
<t> process assets: 321.523066 ms

LOG from webpack.Compiler
<t> make hook: 2205.481706 ms
<t> finish make hook: 0.083995 ms
<t> finish compilation: 27.717985 ms
<t> seal compilation: 367.735552 ms
<t> afterCompile hook: 0.108675 ms
<t> emitAssets: 5.863332 ms
<t> emitRecords: 0.071065 ms
<t> done hook: 76.774071 ms
<t> beginIdle: 0.352772 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 453 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 487 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 485 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i> 1483 ms resolve to new modules
     |  | 123 ms (parallelism 6.8) build modules > ./src/styles.scss?ngGlobalStyle
     | 123 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 100 ms (parallelism 7.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 100 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    277 ms build modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    3% really resolved (43 real resolves with 43 cached but invalid, 1640 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.93647 ms
<t> figure out provided exports: 4.94204 ms
    2% of exports of modules have been determined (9 no declared exports, 4 not cached, 0 flagged uncacheable, 236 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007995 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.264065 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.665797 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.494748 ms
<t> trace exports usage in graph: 3.844864 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.946033 ms
<t> visitModules: visiting: 1.594441 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.675613 ms
<t> connectChunkGroups: 0.002455 ms
<t> cleanup: 0.001262 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031195 ms
<t> modules: 2.328457 ms
<t> queue: 0.005364 ms
<t> maxSize: 0.033813 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.103982 ms
<t> sort relevant modules: 0.102803 ms
<t> find modules to concatenate: 6.4793 ms
<t> sort concat configurations: 0.001935 ms
<t> create concatenated modules: 4.194176 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.13323 ms
+ 1 hidden lines

2024-03-09 09:44:07: webpack 5.90.1 compiled in 4311 ms (4f3a972cd936bad2)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 412.304584 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 8.230708 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 46 fresh items in cache put into pack 1
<t> [webpack.cache.PackFileCacheStrategy] store pack: 31.181665 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 2 files, 31 MiB)
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

Initial chunk files | Names         |  Raw size | Estimated transfer size
main.js             | main          | 184.21 kB |                48.86 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.63 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

                    | Initial total | 288.11 kB |                68.39 kB

Build at: 2024-03-09T14:44:08.420Z - Hash: 4f3a972cd936bad2 - Time: 4942ms
Done in 6.26s.
```
Sat Mar  9 09:44:10 AM EST 2024
yarn version v1.22.21
info Current version: 0.0.487
info New version: 0.0.488
Done in 0.12s.
