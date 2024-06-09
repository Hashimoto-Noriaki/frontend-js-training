const number = 10;

if (number > 10) {
    console.log('10以上');
} else if (number === 10) {
    console.log('10');
} else {
    console.log('10未満');
}

const val = 10;
if (val) {
  console.log('真');
} else {
  console.log('偽');
}
//10
//0なら偽

const age = 100;
const hometown = '千葉';

// '埼玉かつ100以上'を出力する条件：年齢が100以上かつ出身地が埼玉
if (age <= 100 && hometown === '埼玉') {
  console.log('埼玉かつ100以上');
}

// '埼玉または100以上'を出力する条件：年齢が100以上または出身地が埼玉
if (age >= 100 || hometown === '千葉') {
  console.log('千葉または100以上');
}
//千葉または100以上

// const age = 27;
// const nation = 'イギリス';

// if (age >= 30 && nation === '日本') {
//   console.log('30以上の日本人');
// } else if (age <= 30 && nation === '日本') {
//   console.log('30以下または日本人');
// } else {
//   console.log('外国人');
// }
//外国人

// const age = 27;
// const nation = '日本';

// if (age >= 30 && nation === '日本') {
//   console.log('30以上の日本人');
// } else if (age <= 30 && nation === '日本') {
//   console.log('30以下または日本人');
// } else {
//   console.log('外国人');
// }
//30以下または日本人
