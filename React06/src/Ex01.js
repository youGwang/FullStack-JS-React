import React, { Component } from 'react'

/* rcc: class component 생성하는 단축키 

** React Hook 이라는 기능들이 생겨나게 되면서 
Function 컴포넌트에서 실행 되지 않았던
리액트의 중요 요소들을 Function 컴포넌트에서 사용할 수 있게 되었다.

ex) LifeCycle 같은 중요한 개념을 Function Component 에서 사용할 수 없었음
    React Hook 이 생겨나게 되면서 이제는 Function Component 에서도 
    LifeCycle 을 사용할 수 있게 됨

    React Hook  : use~로 시작되는 것들 (ustState, useRef, useContext...etc)

*/
export default class Ex01 extends Component {

componentDidMount(){
    /*componentDidMount : 화면이 마운트 됨!(렌더링이 끝나고 화면구성이 완료됨)
    => 데이터 가져오는 작업(무거운 작업들..)대표적으로 API call(ajax,fetch,axios..) 
    => API : 프론트엔드 - 백엔드 주고 받는 정보들 (id, pw 등)
    =>사용자가 쾌적하게 느끼도록 렌더링 후에 데이터 가져온다
    */
    console.log('3. componentDidMount - 화면 렌더링 완료!');
}

componentDidUpdate(){
    /* 값이 변경되어 갱신이 일어난 직후에 호출! */
    console.log('** 값이 변경되었습니다! **');
}

constructor(){
    console.log('1. constructor - 최초생성');
    /* constructor : 생성자
    => state, 함수, 변수 ... 값들을 초기화 할때 사용
    => 화면이 렌더링 되기 이전, 가장 최초의 단계 (컴포넌트의 유아기라 생각)
     */

    super();
    this.state = {
        num : 0
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
}

handleIncrement(){
    console.log('handle Increment Function');
    this.setState({
        num : this.state.num+=1
    })
}

handleDecrement(){
    console.log('handle Decrement Function');
    this.setState({
        num : this.state.num-=1

    })
}

  render() {
    /* render : 화면을 렌더링 할 때 
        => 화면을 구성하는 요소를 작성 (Dom요소들) */
    console.log('2. render - 화면이 렌더링 되는 중...');
    return (
      <div>
        <h1> Class Component : {this.state.num} </h1>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
      </div>
    )
  }
}
