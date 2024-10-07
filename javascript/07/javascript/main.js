// const number = 10;

// if (number > 10) {
//     console.log('10以上');
// } else if (number === 10) {
//     console.log('10');
// } else {
//     console.log('10未満');
// }

// const val = 10;
// if (val) {
//   console.log('真');
// } else {
//   console.log('偽');
// }
//10
//0なら偽


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


//三項演算子
const planet = true;
const people = planet ? '地球人' : '宇宙人';
console.log(people);

const isLate = false;
const result = isLate ? 'はよ寝ろ' : 'ええやん';
console.log(result);

//地球人
//ええやん

const favoriteSports = '野球';

switch (favoriteSports) {
  case '野球':
    console.log('ホームラン');
    break;
  case 'サッカー':
    console.log('シュート');
    break;
  case 'バスケ':
    console.log('ダンク');
    break;
  case 'バレー':
    console.log('スパイク');
    break;
  default:
    console.log('他のスポーツがイイ');
}
//ホームラン

const favorite_sports = '野球';

if (favorite_sports === '野球') {
  console.log('野球');
} else if (favorite_sports === 'サッカー') {
  console.log('サッカー');
} else if (favorite_sports === 'バスケ') {
  console.log('バスケ');
} else if (favorite_sports === 'バレー') {
  console.log('バレー');
} else {
  console.log('スポーツ嫌い');
}
//野球

var text =
  '名前:Hashimoto Noriaki\n 電話:0290-69-1259\n 住所:埼玉県さいたま市XX345';
console.log(text.match(/\d\d\d\d-\d\d-\d\d\d\d/g));
//0290-69-125
var note =
  '名前:Hashimoto Noriaki\n 電話:090-1655-7197\n 住所:埼玉県さいたま市XX345';
console.log(note.match(/\d\d\d-\d\d\d\d-\d\d\d\d/g));
//090-1655-7197

// var text = "名前：佐藤直樹\n電話：03-1234-5678\n住所：兵庫県西脇市町1-2-3";
// text.match(/\d\d-\d\d\d\d-\d\d\d\d/g);



// const count = 30; //　変数

// // // 整形前
// if (0) {
//   console.log('０です');
// } else if (count < 10) console.log('1０より下です');
// else if (count <= 30) console.log('11以上です');
// else {
//   console.log('31以上です');
// }
//11以上です

// 整形後
// if (0) {
//   console.log('０です');
// } else if (count < 10) {
//   console.log('1０より下です');
// } else if (count === 30) {
//   console.log('30ちょうどです');
// } else {
//   console.log('31以上です');
// }
//30ちょうどです
