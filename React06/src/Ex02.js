import React, {useState, useEffect} from 'react'

const Ex02 = () => {

    // 1. constructor 를 대체 하는 곳!
    //  => state, 변수 등을 초기화 하는 곳
    console.log('1. constructor를 대체! => 함수 초기화');

    const [num, setNum] = useState(0)
  
  /*
    3. 화면 갱신 직후 - componentDidMount 대체
        *callback 함수 : 함수안에 함수  ex)useEffect(()=>{})
        -useEffect 라는 리액트 훅을 사용
        -useEffect (콜백함수, 비어있는 배열)
        -useEffect(()=>{},[])
        => 화면의 렌더링이 끝났을 때 (Mount) 첫번째 인자에 있는 콜백함수를 호출
        - API Call 과 같은 무거운 작업 
        -> UX 불편함을 줄만한 작업들을 여기에 한다~~
    */
    useEffect(()=>{
        console.log('3. 화면 렌더링 완료!');
    }, [])

    /*4. 값이 변화했을 때 - componentDidUpdate 대체
        -useEffect 사용
        -useEffect(콜백함수,[변화를 감지할 state])
        -useEffect(()=>{},[num])
        => num 이라는 state가 변할 때 마다 콜백함수를 호출
    
    */
    useEffect(()=>{
        console.log('** 값이 변화했습니다! **');
        //처음 실행될때도 변화라고 인지하고 로그 출력된다.
    },[num])
    return (

    <div>
        {console.log('2.render를 대체 => return문 안')}
        <h1> Function Component : {num} </h1>
        <button onClick={()=>{setNum(num+1)}}>+1</button>
        <button onClick={()=>{setNum(num-1)}}>-1</button>
    </div>
  )
}

export default Ex02