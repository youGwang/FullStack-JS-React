// 1. 이모티콘, 행의 개수 입력 받기
let emoji = prompt('이모티콘 입력하세요.');
let rowNum = Number(prompt('출력할 행의 개수를 입력하세요.'));


// 2. 이모티콘을 행의 개수에 맞춰
//    피라미드 형태로 출력하는 함수 만들기
//    g함수 매개변수 -> 이모티콘, 행의 개수
const pyramid = (emoji, rowNum) =>{
    // 피라미드 형태로 출력

    for(let i=1; i<=rowNum; i++){
        for(let j=1;j<=i;j++){
            document.write(emoji);
            
        }
    document.write('<br>');
    }

}

pyramid(emoji,rowNum);