function plus1(number) {
  const result = number + 1;
  return result;
}

// const number = 20;
// const result = plus1(number);
// console.log(result);

//引数のない関数の定義
function showMessage() {
  const message = 'text';
  alert(message);
}

const number = 20;
const result = plus1(number);
console.log(result);

showMessage;
showMessage();


function threetimes(fn) {
  //3回関数をする処理
  fn(); //引数の処理を実行
  fn();
  fn();
}

const callfunction = function () {
  console.log('コールバック関数');
};

threetimes(callfunction);

function doTwice(fn) {
  fn();
  fn();
}

const sayHello = function () {
  console.log('Hello');
  return 'Hello';
};

doTwice(sayHello);