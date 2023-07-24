 //span 요소 가져오기
        //(1) getElement~
        let getSpan1 = document.getElementById('spanTag')
        console.log(getSpan1);
        let getSpan2 = document.getElementsByTagName('span')
        console.log(getSpan2[0]);
        // (2) querySelector~
        // (2-1). 태그 선택자
        let selSpan1 = document.querySelector('span')
        console.log(selSpan1);
        // (2-2). 아이디 선택자
        let selSpan2 = document.querySelector('#spanTag')
        console.log(selSpan2);

        // querySelector : CSS 선택자로 요소 검색
        // querySelectorAll : CSS 선택자로 모든 요소 검색

        //Dom 스타일 제어
        //요소.style.속성 = 값

        const clickFunc = ()=>{
            //글자 크기 25px -> fontSize
            getSpan1.style.fontSize = '25px'
            //글자 색상 tomato -> color
            selSpan1.style.color = 'tomato'
            //글자 굵기 900 -> fontWeight
            selSpan1.style.fontWeight = '900'
        }