const MemberBox = ({name, gender, music}) => {



    return(

    <div className="item-border">

      <p>{name}</p>
      <p>{gender}</p>
      <h3>{music}</h3>
      
    </div>

    )
}

export default MemberBox