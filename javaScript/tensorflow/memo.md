## エラー対応

以下のエラーがでたとき、一番上に出ているエラーを参考にする。今回の対応では package.json 内に"type": "module" を追加する。ES module に対応するためで、詳しくは JS の歴史を参考にすること。

(node:75489) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/snakashima/develop/nakashima/playGround/javaScript/tensorflow/test2.js:1
import \* as tf from "@tensorflow/tfjs-core";
^^^^^^

SyntaxError: Cannot use import statement outside a module
at internalCompileFunction (node:internal/vm:77:18)
at wrapSafe (node:internal/modules/cjs/loader:1290:20)
at Module.\_compile (node:internal/modules/cjs/loader:1342:27)
at Module.\_extensions..js (node:internal/modules/cjs/loader:1437:10)
at Module.load (node:internal/modules/cjs/loader:1212:32)
at Module.\_load (node:internal/modules/cjs/loader:1028:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
at node:internal/main/run_main_module:28:49
