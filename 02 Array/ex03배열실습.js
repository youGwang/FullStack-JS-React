// 1. 주어진 데이터를 담은 배열을 생성한다.
let numList = [23, 54, 78, 13, 44];
// 2. 반복문을 활용해 최대값을 찾아준다.
let maxNum = numList[0];
for(let i=0;i<numList.length;i++){
    // maxNum과 numList 안의 값을 비교
    if(maxNum < numList[i]){
        maxNum = numList[i]
    }
}

// 3. 결과를 팝업창으로 출려해준다.
// alert('최댓값 >>'+ maxNum)
alert(`최댓값 >> ${maxNum}`)