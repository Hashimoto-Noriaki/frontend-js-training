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

function execute(param) {
  if (param === undefined) {
      return 'パラメータがありません';
  } else {
      return `パラメータは ${param} です`;
  }
}

const result1 = execute();
console.log(result1); // パラメータがありません

const result2 = execute('犬');
console.log(result2); // パラメータは犬です

//ここではパラメータがありませんが出力

//可変長引数
function execute(...args) {
  console.log(args);
}

execute('nori', 'sample@example.com', 'ぴーこ');

//オプション引数
function execute({ ...args }) {
  console.log(args.name);
  console.log(args.email);
  console.log(args.number);
}

execute({
  name: 'nori',
  email: 'sample@example.com',
  number: '1234',
});

// nori
// main.js:45 sample@example.com
// main.js:46 1234
