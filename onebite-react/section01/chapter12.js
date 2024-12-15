// 함수 표현식과 화살표 함수

// 1. 함수 표현식
function funcA(){
	console.log("func A");
}
funcA();

let varA = function func() {
	console.log("var A");
}
varA();

// varB(); // error : 함수가 아니기 때문에 호이스팅 안됨
let varB = function () { // 익명함수
	console.log("var B");
}


// 2. 화살표 함수
let varC = () => {
	console.log("var C");
}
varC();

let varD = () => 1;
console.log(varD());

let varE = (value) => value + 1
console.log(varE(10));

let varF = (value) => {
	return value + 1; // 중괄호 있을 땐 return 사용
}
console.log(varE(10));