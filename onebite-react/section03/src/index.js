/* CJS(Common JS 모듈 시스템) */
/* 내장함수 require을 경로의 값을 가져옴 */
// const moduleData = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

/* 객체 구조 분해 할당으로 가져오기 */
/* const {add, sub} = require("./math");
console.log(add(1,2));
console.log(sub(1,2)); */


/* ESM(ES 모듈 시스템) */
// import mul from "./math.js"; // default는 중괄호 없이 불러옴, 네이밍은 자유롭게 설정 가능
import mul, {add, sub} from "./math.js"; // 파일 확장자 명시 필요
// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(3,4));

import randomColor from "randomcolor"; // 라이브러리에서 값을 가져올 때는 경로 명시X from 뒤에 라이브러리 이름만 명시하면 됨
const color = randomColor();
console.log(color);