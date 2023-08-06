import React, { useRef } from 'react'

const Ex07 = () => {
    const inputRef = useRef()
    const imgRef = useRef()

    const chImg = () =>{
          inputRef.current.value=='고양이'?
              
         imgRef.current.src = 'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTNfMTYy/MDAxNjA3ODM0MjEzNDk0.4wKy2adfWXyAb9Wd8EG3hvfhNcw041TJZyq7St6kNWgg.G5v5qy_1q5zuf_g8JilElHe_GgzsWfnx-HEaI5mGBXQg.GIF.no1yoongoo/%EA%B7%80%EC%97%AC%EC%9A%B4%EB%83%A5%EC%9D%B4.gif?type=w800'
            : imgRef.current.src = 'https://phoneky.co.uk/thumbs/screensavers/down/fun/cutelittle_d4flje7u.gif'
            
            inputRef.current.value = ""
            inputRef.current.focus()
      
        }
        
    
    

  return (
    <div>
        <p> 희망하는 사진이 있으신가요?</p>
        <input type='text' ref={inputRef}/>
        <button onClick={chImg}>변경!</button>

        <div>
            <img src='
        https://phoneky.co.uk/thumbs/screensavers/down/fun/cutelittle_d4flje7u.gif'
        width='200px' ref={imgRef}
            ></img>
        </div>

    </div>
  )
}

export default Ex07