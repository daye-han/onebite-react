// 콜백 함수

function main(value) {
	console.log(value);

	sub();
}
function sub() {
	console.log("i am sub fn");
}

main(sub); // main 함수의 인수로 sub 함수 전달

main(function () {
	console.log("i am sub");
})

main(() => {
	console.log("i am sub");
})