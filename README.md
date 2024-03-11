Mon Mar 11 08:40:19 AM EDT 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       1.3Gi       579Mi        11Gi        11Gi
Swap:          8.0Gi       370Mi       7.6Gi
System Storage
438M	.
```
```bash
yarn run v1.22.22
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.2.3
Node: 20.11.1
Package Manager: yarn 1.22.22
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
    
Done in 0.52s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
```bash
Latest version:     1.0.30001597
Installed version:  1.0.30001596
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1842.14654 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/package.json invalidated because hashes differ (c217c3c1e01506f3 != 1d7bdd15ad5e7a02)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularsixteen/node_modules/caniuse-lite invalidated because hashes differ (caniuse-lite@1.0.30001597 != caniuse-lite@1.0.30001596)
    [webpack.cache.PackFileCacheStrategy] Restored pack from /home/kushal/src/angular/angularsixteen/.angular/cache/17.2.3/angular-webpack/e2b8afca2652bb7e11890d6225b75d2f2faf21fd.pack, but build dependencies have changed.
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1277.369933 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen|request=|/home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle
asset main.js 184 KiB {590} [emitted] (name: main)
asset styles.css 70 KiB {176} [emitted] (name: styles)
asset polyfills.js 33 KiB {260} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 12.6 KiB [emitted]
asset runtime.js 906 bytes {688} [emitted] (name: runtime)
Entrypoint main 185 KiB = runtime.js 906 bytes main.js 184 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 70.9 KiB = runtime.js 906 bytes styles.css 70 KiB
chunk {176} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [256] 50 bytes {176} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    2481 ms (resolving: 1319 ms, restoring: 0 ms, integration: 0 ms, building: 1162 ms, storing: 0 ms)
chunk {260} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [728] 104 KiB {260} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1599 ms (resolving: 1455 ms, restoring: 0 ms, integration: 0 ms, building: 144 ms, storing: 0 ms)
chunk {590} (runtime: runtime) main.js (main) 2.07 MiB [initial] [rendered]
  ./src/main.ts + 88 modules [712] 2.07 MiB {590} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {688} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.252507 ms
<t> runtime requirements.chunks: 0.146704 ms
<t> runtime requirements.entries: 1.113028 ms
<t> finish module profiles: 7.661905 ms
<t> compute affected modules: 0.008492 ms
<t> finish modules: 20.306162 ms
<t> report dependency errors and warnings: 4.221317 ms
<t> optimize dependencies: 9.042921 ms
<t> create chunks: 2.610113 ms
<t> compute affected modules with chunk graph: 0.005026 ms
<t> optimize: 21.547389 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.908994 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 395.490693 ms
<t> runtime requirements.modules: 0.298452 ms
<t> runtime requirements.chunks: 0.093013 ms
<t> runtime requirements.entries: 0.593638 ms
<t> runtime requirements: 1.240029 ms
<t> hashing: initialize hash: 0.007266 ms
<t> hashing: sort chunks: 0.052622 ms
<t> hashing: hash runtime modules: 1.198574 ms
<t> hashing: hash chunks: 1.204518 ms
<t> hashing: hash digest: 0.04501 ms
<t> hashing: process full hash modules: 0.172685 ms
<t> hashing: 2.905405 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066775 ms
<t> module assets: 0.138042 ms
<t> create chunk assets: 3.035148 ms
<t> process assets: 3411.164311 ms

LOG from webpack.Compiler
<t> make hook: 3494.288403 ms
<t> finish make hook: 0.123763 ms
<t> finish compilation: 32.240752 ms
<t> seal compilation: 3855.882846 ms
<t> afterCompile hook: 0.130282 ms
<t> emitAssets: 3.677563 ms
<t> emitRecords: 0.062673 ms
<t> done hook: 98.797396 ms
<t> beginIdle: 0.425641 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 440 ms (parallelism 3) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 486 ms (parallelism 3) resolve to new modules > ./src/main.ts
<i>  | 485 ms (parallelism 3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 39 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 39 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 39 ms (parallelism 9) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 39 ms (parallelism 9) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i> 1769 ms resolve to new modules
     | 37 ms (parallelism 9.6) resolve to existing modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
    56 ms resolve to existing modules
<i>  |  | 289 ms (parallelism 4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 289 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 245 ms (parallelism 4.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 245 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 165 ms (parallelism 3.3) build modules > ./src/main.ts
     | 172 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
     |  | 36 ms (parallelism 4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 235 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 146 ms (parallelism 6.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 98 ms (parallelism 4.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 126 ms (parallelism 4.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 375 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i> 1327 ms build modules

LOG from webpack.ResolverCachePlugin
    31% really resolved (517 real resolves with 0 cached but invalid, 1157 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.055196 ms
<t> figure out provided exports: 13.734906 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.552375 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 10.359671 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.718693 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.572962 ms
<t> trace exports usage in graph: 4.360853 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.034796 ms
<t> visitModules: visiting: 1.73963 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.825043 ms
<t> connectChunkGroups: 0.00214 ms
<t> cleanup: 0.001261 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035181 ms
<t> modules: 2.349708 ms
<t> queue: 0.004822 ms
<t> maxSize: 0.034747 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.033427 ms
<t> sort relevant modules: 0.104375 ms
<t> find modules to concatenate: 4.432059 ms
<t> sort concat configurations: 0.002082 ms
<t> create concatenated modules: 4.947947 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 192.396035 ms
<t> optimize asset: polyfills.js: 741.265205 ms
<t> optimize asset: main.js: 2955.028796 ms
<t> optimize js assets: 2999.248567 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.336702 ms
<t> optimize css assets: 15.6375 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1157)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3131/3692) entries shared via 2 shared snapshots (514 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (138/251) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 58 items
    Managed items snapshot optimization: 12% (112/939) entries shared via 9 shared snapshots (14 times referenced)
    Managed files snapshot optimization: 81% (3192/3955) entries shared via 178 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 87% (3683/4215) entries shared via 188 shared snapshots (742 times referenced)

2024-03-11 08:40:52: webpack 5.90.1 compiled in 9199 ms (4f3a972cd936bad2)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 734.587382 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 19.326751 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 3.142923 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.139197 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 7.52562 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 3.371188 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.725148 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.398373 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/observable/fromEventPattern.js': 1.357304 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/timeInterval': 1.33339 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.919078 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 10.699739 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk590': 5.625197 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 250.531264 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 1 files, 31 MiB)
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

Build at: 2024-03-11T12:40:53.850Z - Hash: 4f3a972cd936bad2 - Time: 10424ms
Done in 12.01s.
```
