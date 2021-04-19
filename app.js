var hello='Hello World';
alert(hello);

// かけ算
alert(4+3);

// 引き算
alert(8 - 5);

// 掛け算
alert(2 * 6);

// 割り算
alert(10 / 2);

// 文字列の結合
alert('Hello'+'World');

// 変数の結合
var str1 = 'Hello';
var str2 = 'World!!!';
alert(str1 + str2);

// 四則演算
var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// 条件分岐 while
var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num*2;
  count = count+1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do...while文
var max = 100;
var num = 1;
var count = 0;

do{
  num = num*2;
  count = count+1;
}while(num < max);

alert(count);

// for文
var i;
var num = 0;

for (i=1;i<11;i++){
  num = num+i;
}

alert('1から10まで足し算した結果は' + num + 'です');

// 関数
// メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}