import React, { useState } from 'react'


const Ex02LikeList = () => {
     const[Like,setLike] = useState('♡')
     const[num,setNum] = useState(0)


    /* 좋아요를 조정할 수 있는 함수 */
    const handleLike = () => {
        
      if(Like == '♡') {
        setLike('❤')
        setNum(1)
      }else{
        setLike('♡')
        setNum(0)
      }

    }
  return (
    <div>
    <span onClick={handleLike}>{Like}</span>{" "}
    <span>좋아요 {num}개</span>
    </div>
  )
}

export default Ex02LikeList