// 1. 랜덤한 수를 하나 뽑아준다.
// Math.random() : 0~1 사이의 난수 생성
let ranNum = parseInt(Math.random()*100+1)
console.log(ranNum);


// 2. 사용자로부터 숫자를 입력 받는다.
//    입력 > 랜덤 -> '입력한 숫자보다 작은 수 입니다.'
//    입력 < 랜덤 -> '입력한 숫자보다 큰 수 입니다.'
//    입력 = 랜덤 -> '정답입니다. 축하합니다! 🐱‍🐉'
//    알림팝업창의 형태로 출력!

while(true){
    let inputNum = Number(prompt('숫자를 입력해주세요'));

    if(inputNum > ranNum){
        alert('입력한 숫자보다 작은 수 입니다.');
    }else if(inputNum < ranNum){
        alert('입력한 숫자보다 큰 수 입니다.');
    }else{
        alert('정답입니다. 축하합니다! 🐱‍🐉');
        break;
    }
}