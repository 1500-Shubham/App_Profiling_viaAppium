import React from 'react'
import '../styles/sessionList.scss'
import Paper from '@mui/material/Paper';


export const SessionListItems = (props) => {
//    console.log(props.item.session_id)
//    console.log(props.fun(5));

  return (
    
    <div className='itemsList'>
    <Paper boxShadow='yellow' elevation={3}>
    <span id='android'>{props.item.platform_name} {props.item.platform_version}   </span>
    <span id='emulator'>{props.item.device_name}</span>
   <br/> 
   <br/> 
     <p>{props.item.session_id}</p>
     {/* <p> {JSON.stringify(props.item)}</p> */}
     </Paper>
    </div>
    
  )
}
