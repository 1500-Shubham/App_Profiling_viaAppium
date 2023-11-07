import React from 'react'
import '../styles/sessionList.scss'

export const SessionListItems = (props) => {
//    console.log(props.item.session_id)
//    console.log(props.fun(5));
    
  return (
    <div className='itemsList'>
    <span id='android'>{props.item.platform_name} {props.item.platform_version}   </span>
    <span id='emulator'>{props.item.device_name}</span>
   <br/> 
   <br/> 
     <p>{props.item.session_id}</p>
     {/* <p> {JSON.stringify(props.item)}</p> */}
    </div>
  )
}
