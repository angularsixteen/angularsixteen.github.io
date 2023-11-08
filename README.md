Wed Nov  8 10:12:40 AM EST 2023

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       1.6Gi       866Mi       9.5Gi       9.9Gi
Swap:          8.0Gi       1.7Gi       6.3Gi
System Storage
536M	.
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
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.28s.
```
The --update-db command is deprecated.
Please use npx update-browserslist-db@latest instead.
Browserslist DB update will still be made.
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
The --update-db command is deprecated.
Please use npx update-browserslist-db@latest instead.
Browserslist DB update will still be made.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.0.0/angular-webpack/95b6d701ac9e04ec8a9995c79ed54c36c68d2dad.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.0.0/angular-webpack/95b6d701ac9e04ec8a9995c79ed54c36c68d2dad/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 1693.88141 ms
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
    1303 ms (resolving: 31 ms, restoring: 0 ms, integration: 0 ms, building: 1272 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    3224 ms (resolving: 29 ms, restoring: 0 ms, integration: 0 ms, building: 3195 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.192374 ms
<t> runtime requirements.chunks: 0.133939 ms
<t> runtime requirements.entries: 0.99018 ms
<t> finish module profiles: 5.902101 ms
<t> compute affected modules: 0.005197 ms
<t> finish modules: 13.843196 ms
<t> report dependency errors and warnings: 3.725078 ms
<t> optimize dependencies: 10.466108 ms
<t> create chunks: 2.270119 ms
<t> compute affected modules with chunk graph: 0.003494 ms
<t> optimize: 21.796507 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 6.087868 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 355.402696 ms
<t> runtime requirements.modules: 0.231354 ms
<t> runtime requirements.chunks: 0.088548 ms
<t> runtime requirements.entries: 0.516746 ms
<t> runtime requirements: 1.061605 ms
<t> hashing: initialize hash: 0.012911 ms
<t> hashing: sort chunks: 0.063454 ms
<t> hashing: hash runtime modules: 1.244843 ms
<t> hashing: hash chunks: 1.270267 ms
<t> hashing: hash digest: 0.045604 ms
<t> hashing: process full hash modules: 0.172646 ms
<t> hashing: 2.999182 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064672 ms
<t> module assets: 0.135807 ms
<t> create chunk assets: 3.227265 ms
<t> process assets: 2885.35209 ms

LOG from webpack.Compiler
<t> make hook: 5416.315094 ms
<t> finish make hook: 0.112557 ms
<t> finish compilation: 23.515778 ms
<t> seal compilation: 3290.354857 ms
<t> afterCompile hook: 0.125473 ms
<t> emitAssets: 9.039481 ms
<t> emitRecords: 0.076921 ms
<t> done hook: 87.026411 ms
<t> beginIdle: 0.438975 ms

LOG from webpack.Compilation.ModuleProfile
     | 83 ms (parallelism 2.5) resolve to new modules > ./src/main.ts
<i>  | 207 ms (parallelism 5.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 61 ms (parallelism 5.2) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 61 ms (parallelism 5.2) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i> 619 ms resolve to new modules
<i>  | 206 ms (parallelism 5.9) resolve to existing modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i> 228 ms resolve to existing modules
<w>  |  | 699 ms (parallelism 4.6) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 699 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 323 ms (parallelism 3.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 131 ms (parallelism 4.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 131 ms (parallelism 4.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i>  | 1617 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 369 ms (parallelism 3.8) build modules > ./src/main.ts
<i>  | 393 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w>  |  | 548 ms (parallelism 4.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 548 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 277 ms (parallelism 5.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<i>  |  | 274 ms (parallelism 5.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 70 ms (parallelism 5.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 69 ms (parallelism 5.3) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 183 ms (parallelism 4.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 49 ms (parallelism 12.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 923 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<w> 4185 ms build modules
+ 1 hidden lines

LOG from webpack.ResolverCachePlugin
    30% really resolved (516 real resolves with 0 cached but invalid, 1177 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 0.778715 ms
<t> figure out provided exports: 8.372143 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 1.530571 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 8.898343 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.901095 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.444996 ms
<t> trace exports usage in graph: 3.682131 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 0.94727 ms
<t> visitModules: visiting: 1.553999 ms
    207 queue items processed (94 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 1.628346 ms
<t> connectChunkGroups: 0.00214 ms
<t> cleanup: 0.001248 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.031169 ms
<t> modules: 2.036269 ms
<t> queue: 0.004551 ms
<t> maxSize: 0.029401 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 0.866728 ms
<t> sort relevant modules: 0.126296 ms
<t> find modules to concatenate: 4.035712 ms
<t> sort concat configurations: 0.001906 ms
<t> create concatenated modules: 4.012492 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 181.503286 ms
<t> optimize asset: polyfills.js: 695.240045 ms
<t> optimize asset: main.js: 2514.735365 ms
<t> optimize js assets: 2560.837094 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.362966 ms
<t> optimize css assets: 15.103745 ms

LOG from webpack.FileSystemInfo
    759 new snapshots created
    0% root snapshot uncached (0 / 1177)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3124/3685) entries shared via 2 shared snapshots (513 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 56% (132/236) entries shared via 8 shared snapshots (12 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 13% (118/941) entries shared via 9 shared snapshots (20 times referenced)
    Managed files snapshot optimization: 80% (3182/3953) entries shared via 177 shared snapshots (720 times referenced)
    Managed missing snapshot optimization: 87% (3669/4214) entries shared via 186 shared snapshots (743 times referenced)

2023-11-08 10:13:21: webpack 5.89.0 compiled in 10415 ms (9a2f4648c4598418)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1279.695369 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.876487 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1038 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.773578 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 2.303979 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 3.983295 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 2.415707 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 1.711023 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.083754 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.447276 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|05ec4e774714278f|runtime': 8.083587 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 4.383744 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 161.104554 ms
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
main.js             | main          | 183.12 kB |                49.00 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 287.02 kB |                68.55 kB

Build at: 2023-11-08T15:13:23.573Z - Hash: 9a2f4648c4598418 - Time: 12103ms
Done in 13.70s.
```
Wed Nov  8 10:13:25 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.147
info New version: 0.0.148
Done in 0.12s.
