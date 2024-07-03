const user = {
    name:'橋本',
    alertName: function(){
        window.alert(this.name);
    },
};

console.log(user);

function execute({ animal1, animal2, animal3 }) {
    return { animal1, animal2, animal3 };
}
    const result = execute({ animal1: '犬', animal2: '猫', animal3: '猿' });
    console.log(result);
  //{animal1: '犬', animal2: '猫', animal3: '猿'}

//1から1000までJavaScriptで出力させてください。
//そして３の倍数がFizz,5の倍数がBuZZを出力させてください。

function fizzbuzz() {
    for (i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
      } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('Buzz');
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log(i);
      }
    }
  }
fizzbuzz();

//1
//2
//Fizz
//4
//Buzz
//15がFizzBuzz
//以下100まで繰り返し
