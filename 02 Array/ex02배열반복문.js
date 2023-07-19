// 배열에 저장된 데이터를 반복문으로 출력하기!

// 1. for문
let nameList = ['서유광😜','신지영✌','서현록👏','김대혁❤']
for(let i=0;i<nameList.length;i++){
    console.log(nameList[i]);
}

// 2. for of문
let foodList = ['오이😢','피망😒','파프리카😢'];
for(let i of foodList){
    console.log(i);
}

// 3. forEach문
let colorList = new Array('빨강빨강❣','파랑파랑💙','노랑노랑💛');
colorList.forEach((element, index)=>{
    console.log(index, element);
})