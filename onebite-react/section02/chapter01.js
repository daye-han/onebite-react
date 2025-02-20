// =========================
// 1. Truthy 와 Falsy
// =========================
// 1-1. Falsy한 값(7개)
// -> undefined, null, 0, -0, "", NaN, 0n;
// 1-2. Truthy한 값
// -> Falsy한 값을 제외한 나머지 모든 값
// -> "hi", 123, [], {}, 함수





// =========================
// 2. 단락평가
// =========================





// =========================
// 3. 구조분해할당
// =========================
// 3-1. 배열의 구조 분해 할당
let arr = [1,2,3];

let one1 = arr[0];
let two1 = arr[1];
let three1 = arr[2];

let[one2, two2, three2, four= 4] = arr; // four = 4 으로 기본값 설정 가능

// 3-2. 객체의 구조 분해 할당
let person = {
	name: '이정환',
	age: 27,
	hobby: '테니스',
}

let {
	name,
	age: myAge, // 변수명 변경
	hobby,
	extra = "hi",
} = person; // 객체임을 나타내는 중괄호 {} 사용


// 3-3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age: myAge, hobby, extra }) => {
	// console.log(name, myAge, hobby, extra);
}

func(person);



// =========================
// 4. Spread 연산자 & Rest 매개변수
// =========================
// 4-1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
	a : 1,
	b : 2,
}
let obj2 = {
	...obj1,
	c : 3,
	d : 4,
}

function funcA(p1, p2, p3) {

}
funcA(...arr1);


// 4-2. Rest 매개변수
// -> Rest : 나머지, 나머지 매개변수
function funcB(one, two, ...rest) {
	// 여기서 ...는 매개변수를 정의하는 소괄호 안에 사용되었으므로 spread 연산자가 아닌 rest 매개 변수를 나타냄
	// 첫번째 인수는 one 에, 두번째 인수는 two 에 그리고 나머지 모든 인수들을 "배열"에 저장하고 있음
  // 따라서 rest 매개변수 뒤에 매개변수를 선언할 수 없음
}
funcB(...arr1);





// =========================
// 5. 원시타입 VS 객체타입
// =========================
// 5-1. 원시타입
// -> Number, String, Boolean, Null, Undefined
// -> 값 자체로써 변수에 저장되고 복사됨

// 5-2. 객체타입
// -> Object, Array, Function, RegexExp
// -> 값 자체가 아닌 "참조값"을 통해 변수에 저장되고 복사됨

// 5-3. 객체타입 주의사항
// 1) 의도치 않게 값이 수정될 수 있다.
// 1-1) 얕은복사
// 객체의 참조값을 복사함. 원본 객체가 수정될 수 있어 위험
let o1 = {name : '이정환'};
let o2 = o1;

// 1-2) 깊은 복사
// 새로운 객체를 생성하면서 프로퍼티만 따로 복사함. 원본 객체가 수정될 일이 없어 안전
let o3 = {...o1};

// 2) 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다
// 2-1) 얕은 비교
// 참조값을 기준으로 비교
o1 === o2;

// 2-2) 깊은 비교
// 객체를 문자열로 변환하여 비교(프로퍼티 값을 기준으로 비교)
// JSON.stringify() 와 같은 함수 활용(객체를 문자열로 변환하는 기능)
JSON.stringify(o1) === JSON.stringify(o2);


// 3) 배열과 함수도 사실 객체이다




// =========================
// 6. 반복문으로 배열과 객체 순회하기
// =========================
// 6-1. 배열 순회
let arr3 = [1, 2, 3];

// 1) 배열 인덱스 : 인덱스 활용 가능
for (let i = 0; i < arr3.length; i++){
	// console.log(i);
}

// 2) for of 반복문
for (let item of arr3){
	// console.log(item);
}


// 6-2. 객체 순회
let person2 = {
	name: '이정환',
	age: 27,
	hobby: '테니스',
}

// 1) Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person2);

for(let i = 0; i < keys.length; i++){

}
for(let key of keys){
	const value = person2[key];
}

// 2) Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person2);

for(let value of values){

}

// 3) for in
for(let key in person){ // person 객체의 key 를 순서대로 key 변수에 할당

}





// =========================
// 7. 배열 메서드 - 요소 조작
// =========================
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength = arr4.push(4, 5, 6, 7);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr5 = [1, 2, 3];
const poppedItem = arr5.pop();

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr6 = [1, 2, 3];
const shiftedItem = arr6.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr7 = [1, 2, 3];
const newLength2 = arr7.unshift(0);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 기존 배열 수정 X
let arr8 = [1, 2, 3, 4, 5];
let sliced = arr8.slice(2, 5); // 시작, 끝(+1)
let sliced2 = arr8.slice(2); // 마지막 요소까지
let sliced3 = arr8.slice(-3); // 끝에서부터

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr9 = [1, 2];
let arr10 = [3, 4];

let concatedArr = arr9.concat(arr10);
// console.log(concatedArr);



// =========================
// 8. 배열 메서드 - 순회와 탐색
// =========================
// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr11 = [1, 2, 3];

arr11.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr11.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr12 = [1, 2, 3];
let isInclude = arr12.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 앞에서부터 탐색. 첫번째로 찾아낸 요소의 인덱스를 반환
let arr13 = [2, 2, 2];
let index = arr13.indexOf(20); // 존재하지 않는 값은 -1 반환


// 4. findIndex ???
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr14 = [1, 2, 3];
const findedIndex = arr14.findIndex(
  (item) => item === 999
);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
// findIndex 는 인덱스를, find는 요소를 반환
let arr15 = [
  { name: "이정환" },
  { name: "홍길동" },
];

const finded = arr15.find(
  (item) => item.name === "이정환"
);



// =========================
// 9. 배열 메서드 - 변형
// =========================
// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스"
);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 원본 배열을 사전순으로 정렬하는 메서드
// 숫자 대소 비교 X
arr3 = [10, 3, 5];
arr3.sort((a, b) => { // 비교 기준을 설정하는 콜백함수 설정
  if (a > b) {
    // b가 a앞에 와라
    return 1; // b, a 배치
  } else if (a < b) {
    // a가 b앞에 와라
    return -1; // a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리 유지
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 원본은 그대로, 정렬된 새로운 배열을 반환하는 메서드
arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");





// =========================
// 10. Date 객체와 날짜
// =========================
// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자. 새로운 date *객체* 생성. 현재 시간
console.log(date1);

let date2 = new Date("1997/01/07/10:10"); // 특정 날짜로 생성
let date3 = new Date(1997, 2, 1, 10, 10, 59); // 특정 날짜로 생성

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC) 로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();

let date4 = new Date(ts1); // 타임스탬프에 해당하는 시간으로 객체 생성
console.log(date4);


// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 월은 0부터 시작함. 1 더해서 사용
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();


// 4. 시간 수정하기
date1.setFullYear(2023); // 인수로 수정하고 싶은 값 넣기
date1.setMonth(2) // 3월로 설정됨


// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만 문자열로 출력
console.log(date1.toLocaleString()); // 현지화된 시간







