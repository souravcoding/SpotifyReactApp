import React from 'react'
import "./sidebaroption.css"

function SideBarOption(props) {
    return (
        <div className="sidebaroption"> 
        {props.Icon && <props.Icon className="side_icon"/>  }
          {props.Icon ? <h4>{props.title}</h4> : <p>{props.title}</p>}
        </div>
    )
}

 export default SideBarOption
