// 변수 : 데이터를 담을 공간 
let num = 3;
// let -> 변수 선언 키워드
// num -> 변수 이름
// 3 -> 변수에 할당된 값

// 재선언 : 같은 변수 이름으로 다시 변수를 선언하는 것
// 재할당 : 선언된 변수에 다시 값을 할당하는 것

// var : 재선언0, 재할당0
var var1 = 1;
console.log('ver 최소 선언', var1);
var var1 = 2;
console.log('var 다시 선언', var1);
var1 = 3;
console.log('var 다시 할당', var1);

// let
let let1 = 4;
console.log('let 최초 선언', let1);
// let let1 
let1 = 5;
console.log('let 다시 할당',let1)

// const
const con1 = 6;
console.log('const 최초 선언', con1);
// const con1
// con1 = 7;
// console.log('const 다시 할당', con1)