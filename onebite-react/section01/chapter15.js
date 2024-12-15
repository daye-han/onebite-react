// 객체
// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자(내장함수) 활용
let obj2 = {}; // 객체 리터럴 방법(대부분 사용)


// 2. 객체 프로퍼티(객체 속성)
// key : value
// key - 문자열, 숫자. 띄어쓰기가 포함된 문자열은 예외적으로 따옴표 사용
let person = {
	name: "이정환", // name 프로퍼티
	age: 27, // age 프로퍼티
	hobby: "테니스", // hobby 프로퍼티
	extra: {},
	"like cat": true,
};


// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name;
let name2 = person.name2; // 존재하지 않는 것은 undefined로 출력

let age = person["age"]; // 대괄호 안에 key를 명시. key를 쌍따옴표로 작성, 그렇지 않으면 변수로 인식함.

let property = "hobby";
let hobby = person[property]; // key값에 변수로 입력

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe develop";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "빵";

// 3-4. 프로퍼티를 삭제하는 방법 - delete 연산자 사용
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 - in 연산자
let result1 = "name" in person; // name 프로퍼티가 in 우측 객체 안에 있는가
let result2 = "cat" in person;


