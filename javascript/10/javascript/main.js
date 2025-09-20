//基本
const plus1 = (number) => {
 return number + 1;
};
// 関数の実行
const number = 10;
const result = plus1(number);
console.log(result);
//11

//無名関数をアロー関数で定義
const message = (count) => {
    return count + 1;
};

const count = 10;
const result = message(count);
console.log(result);
//11と出力