// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

/* CJS(Common JS 모듈 시스템) */
/* (내보내는 파일)module.exports -> (사용 파일)require */
/* module 내장 객체에 exports 프로퍼티 값으로 객체를 저장해서 내보내기 */
/* module.exports = {
    add, // add로 add함수를(키, 벨류 값이 같은 경우 이름 하나만 명시 가능)
    sub : sub, // sub로 sub함수를
} */

/* ESM(ES 모듈 시스템) */
/* 객체를 리터럴로 생성? */
export { add, sub };