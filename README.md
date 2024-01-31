Wed Jan 31 03:30:17 PM EST 2024

# Angular Fifteen


This project is live at [https://angularsixteen.github.io](https://angularsixteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.8Gi       1.3Gi       1.2Gi        10Gi        10Gi
Swap:          8.0Gi       768Ki       8.0Gi
System Storage
547M	.
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
    

Angular CLI: 17.1.1
Node: 20.11.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.1.1
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1701.1
@angular-devkit/build-angular   17.1.1
@angular-devkit/core            17.1.1
@angular-devkit/schematics      17.1.1
@schematics/angular             17.1.1
rxjs                            7.8.1
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 1.08s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.57s.
```
```bash
Latest version:     1.0.30001581
Installed version:  1.0.30001581
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularsixteen/.angular/cache/17.1.1/angular-webpack/ac82307052762e2be7eae9305c3788fcc57c2b93.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularsixteen/.angular/cache/17.1.1/angular-webpack/ac82307052762e2be7eae9305c3788fcc57c2b93/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3568.022255 ms
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
  ./src/main.ts + 88 modules [225] 2.03 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    484 ms (resolving: 51 ms, restoring: 1 ms, integration: 0 ms, building: 432 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 50 bytes (javascript) 78.5 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 78.5 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularsixteen/src/styles.scss?ngGlobalStyle styles
    6568 ms (resolving: 48 ms, restoring: 0 ms, integration: 0 ms, building: 6520 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.312391 ms
<t> runtime requirements.chunks: 0.280275 ms
<t> runtime requirements.entries: 1.938773 ms
<t> finish module profiles: 22.70909 ms
<t> compute affected modules: 0.013409 ms
<t> finish modules: 29.843658 ms
<t> report dependency errors and warnings: 7.245501 ms
<t> optimize dependencies: 13.340099 ms
<t> create chunks: 4.171513 ms
<t> compute affected modules with chunk graph: 0.007396 ms
<t> optimize: 44.732194 ms
    4 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 10.055489 ms
    100% code generated (4 generated, 0 from cache)
<t> code generation: 656.040647 ms
<t> runtime requirements.modules: 0.311371 ms
<t> runtime requirements.chunks: 0.11693 ms
<t> runtime requirements.entries: 0.674327 ms
<t> runtime requirements: 1.405436 ms
<t> hashing: initialize hash: 0.009538 ms
<t> hashing: sort chunks: 0.069014 ms
<t> hashing: hash runtime modules: 1.86314 ms
<t> hashing: hash chunks: 1.797386 ms
<t> hashing: hash digest: 0.064325 ms
<t> hashing: process full hash modules: 0.263372 ms
<t> hashing: 4.355232 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.097642 ms
<t> module assets: 0.221368 ms
<t> create chunk assets: 4.246716 ms
<t> process assets: 4815.492073 ms

LOG from webpack.Compiler
<t> make hook: 8347.465815 ms
<t> finish make hook: 0.232308 ms
<t> finish compilation: 59.890876 ms
<t> seal compilation: 5556.570047 ms
<t> afterCompile hook: 0.165969 ms
<t> emitAssets: 4.342362 ms
<t> emitRecords: 0.079753 ms
<t> done hook: 137.711348 ms
<t> beginIdle: 0.605726 ms

LOG from webpack.Compilation.ModuleProfile
     | 148 ms (parallelism 2.5) resolve to new modules > ./src/main.ts
     | 120 ms (parallelism 5.6) resolve to new modules > ./node_modules/@angular/common/fesm2022/http.mjs
     | 120 ms (parallelism 5.6) resolve to new modules > ./node_modules/@angular/common/fesm2022/common.mjs
     | 101 ms (parallelism 10.5) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    808 ms resolve to new modules
<e>  |  | 1410 ms (parallelism 4.6) build modules > ./src/styles.scss?ngGlobalStyle
<e>  | 1410 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 118 ms (parallelism 3.7) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 155 ms (parallelism 6.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 152 ms (parallelism 6.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 763 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 261 ms (parallelism 3.3) build modules > ./src/main.ts
<i>  | 284 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e>  |  | 1013 ms (parallelism 4.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<e>  | 1013 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 941 ms (parallelism 4.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
<e>  |  | 1060 ms (parallelism 4.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
<w>  |  | 966 ms (parallelism 4.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 130 ms (parallelism 6) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 137 ms (parallelism 6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 153 ms (parallelism 6.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<e>  | 3387 ms build modules > 6 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<e> 6864 ms build modules
+ 5 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (517 real resolves with 0 cached but invalid, 1114 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.956658 ms
<t> figure out provided exports: 19.268986 ms
    96% of exports of modules have been determined (9 no declared exports, 240 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 3 additional calculations due to dependencies)
<t> store provided exports into cache: 2.426354 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 26.256979 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 5.537771 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.779168 ms
<t> trace exports usage in graph: 6.331123 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.615101 ms
<t> visitModules: visiting: 2.752431 ms
    211 queue items processed (92 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.879902 ms
<t> connectChunkGroups: 0.005236 ms
<t> cleanup: 0.001957 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.067021 ms
<t> modules: 3.688546 ms
<t> queue: 0.011757 ms
<t> maxSize: 0.11478 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.633555 ms
<t> sort relevant modules: 0.159214 ms
<t> find modules to concatenate: 7.279972 ms
<t> sort concat configurations: 0.002901 ms
<t> create concatenated modules: 7.503165 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 291.56934 ms
<t> optimize asset: polyfills.js: 1023.737644 ms
<t> optimize asset: main.js: 4273.18187 ms
<t> optimize js assets: 4337.533202 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 14.759175 ms
<t> optimize css assets: 18.476 ms

LOG from webpack.FileSystemInfo
    760 new snapshots created
    0% root snapshot uncached (0 / 1114)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 107 timestamps 21 hashes 21 timestamp hash combinations
    File timestamp snapshot optimization: 67% (20/30) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3140/3694) entries shared via 3 shared snapshots (515 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 55% (137/251) entries shared via 9 shared snapshots (14 times referenced)
    Managed items info in cache: 59 items
    Managed items snapshot optimization: 14% (132/943) entries shared via 12 shared snapshots (18 times referenced)
    Managed files snapshot optimization: 81% (3196/3960) entries shared via 178 shared snapshots (721 times referenced)
    Managed missing snapshot optimization: 91% (3818/4215) entries shared via 190 shared snapshots (742 times referenced)

2024-01-31 15:31:07: webpack 5.89.0 compiled in 17514 ms (43bd23f68444a62c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularsixteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularsixteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularsixteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularsixteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2364.59629 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 72.989611 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1039 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.400349 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/core/fesm2022/core.mjs': 5.342395 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/router/fesm2022/router.mjs': 7.335969 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/@angular/platform-browser/fesm2022|request=|@angular/common': 1.135104 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.160141 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/common.mjs': 3.39873 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/index.js': 2.73536 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/operators/index.js': 1.75119 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm/internal/operators/elementAt.js': 1.867356 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularsixteen/node_modules/rxjs/dist/esm|request=|./internal/operators/delayWhen': 1.262107 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@angular/common/fesm2022/http.mjs': 1.999378 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularsixteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularsixteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularsixteen/src/main.ts|71b455c9002e2680|runtime': 12.652719 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 6.64717 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 275.355294 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1039 items, 1 files, 30 MiB)
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
main.js             | main          | 183.85 kB |                48.88 kB
styles.css          | styles        |  70.05 kB |                 8.40 kB
polyfills.js        | polyfills     |  32.97 kB |                10.65 kB
runtime.js          | runtime       | 906 bytes |               510 bytes

| Initial Total | 287.75 kB |                68.43 kB

Build at: 2024-01-31T20:31:10.821Z - Hash: 43bd23f68444a62c - Time: 20530ms
Done in 23.81s.
```
