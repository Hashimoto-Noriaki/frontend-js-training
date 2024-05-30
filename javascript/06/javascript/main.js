// デフォルト引数を持つ関数
function executeWithDefault(arg = 'test') {
  return arg;
}

// デフォルト引数を持つ関数の実行
console.log(executeWithDefault()); // 'test'
console.log(executeWithDefault('foo')); // 'foo'

// キーワード引数を持つ関数
function executeWithKeywords({ arg1, arg2, arg3 }) {
  return { arg1, arg2, arg3 };
}

// キーワード引数を持つ関数の実行
const result = executeWithKeywords({ arg1: 'test1', arg2: 'test2', arg3: 'test3' });
console.log(result); // { arg1: 'test1', arg2: 'test2', arg3: 'test3' }
