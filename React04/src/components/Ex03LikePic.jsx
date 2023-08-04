import React from 'react'


const Ex03LikePic = ({name, group, content, imgSrc}) => {
  return (
    <div>
       
       <img src={imgSrc} width="200px"/>
        <p>
            <span>{name}</span>{" "}
            <span>{group}</span>
        </p>
        <p>{content}</p>

    </div>
  )
}

export default Ex03LikePic