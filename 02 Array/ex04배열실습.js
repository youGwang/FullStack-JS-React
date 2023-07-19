// 1. 주어진 데이터를 담은 배열을 생성한다. (1~8)
let numList = [1,2,3,4,5,6,7,8];

// 2. 데이터에서 홀수인 숫자를 찾고 개수를 세준다.

// 홀수를 넣어줄 배열
let oddList = [];
// 홀수의 개수
let oddNum = 0;

// for(let i=0; i<numList.length; i++){
//     // 홀수인지 판별
//     if(numList[i]%2 == 1){
//         oddList[oddNum] = numList[i];
//         oddNum++;
//     }
// }

for(let i of numList){
    if(i%2 == 1){
        oddList[oddNum] = i;
        oddNum++;
    }
}

// 3. 결과를 팝업창으로 출력해준다.
console.log(oddList);
console.log(oddNum);
alert(`list에 들어있는 홀수는 ${oddList}이며, 총 ${oddNum}개입니다.`)