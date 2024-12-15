// 1. 상수 객체
// 상수에 저장한 객체에 프로퍼티 추가/수정/삭제가 가능함
const animal = {
	type: "고양이",
	name: "나비",
}
animal.color = "black"; // 추가
animal.name = "야옹이"; // 수정
delete animal.color; // 삭제

console.log(animal);


// 2. 메서드
// 값이 함수인 프로퍼티를 말함
const person = {
	name: "이정환",
	// 메서드 선언
	sayHi: function () { //익명함수
		console.log("hi");
	},
	sayBye: () => { //화살표함수
		console.log("bye");
	},
	sayHo() {
		console.log("ho");
	}
}

person.sayHi();
person["sayHo"]();