// rafce + Enter
import './App.css';
import MemberBox from '../src/components/MemberBox'
import React from 'react'

const AppExample = () => {

    /* 여러분의 팀원을 소개해주세요!
    이름 : 홍길동
    성별 : 여성 / 남성
    좋아하는 노래 : 아이브 - I AM

    단, Component와 props 의 개념을 이용할 것
    -MemberBox 라는 컴포넌트를 생성하기

    혹시 너무 빨리 끝내버린 사람은 디자인 하고 있기!

    */

    // let man = "남성"
    // let woman = "여성"

    let {man, woman} = {
        man : '남성',
        woman : '여성'
    }

  return (
    <div>
        <MemberBox name="서유광" gender={man} music="김광석-이등병의 편지"></MemberBox>
        <MemberBox name="김소희" gender={woman} music="엠블랙-y"></MemberBox>
        <MemberBox name="박정현" gender={man} music="아이유 - 아이와 나의 바다"></MemberBox>
        <MemberBox name="이선아" gender={woman} music="뉴진스-OMG"></MemberBox>
    </div>
  )
}

export default AppExample