// 반복문

for(idx = 0; idx < 10; idx++){
	if(idx % 2 === 0){
		continue; // 반복문 내에서 continue 아래 코드들은 실행하지 않고 다음 반복 회차로 넘어감!
	}
	console.log(idx);
	if(idx >= 5){
		break; // 반복문 종료!
	}
}