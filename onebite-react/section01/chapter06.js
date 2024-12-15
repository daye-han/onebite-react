// 형 변환
// 값의 타입을 변경하는 것

// 1. 묵시적 현 변환
// 자바스크립트 엔진이 알아서 형 변환 하는 것
let num1 = 10;
let str1 = "20";

console.log(num1 + str1);
console.log(num1 - str1);
console.log(num1 * str1);
console.log(num1 % str1);


// 2. 명시적 형 변환
// 내장함수를 이용해서 직접 형 변환을 명시
// 문자열 -> 숫자 : Number(), parseInt()
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

let strToNum3 = parseInt(str2);
console.log(strToNum3);


// 숫자 -> 문자열 : String()
let num2 = 20;
let numToStr2 = String(num1);

