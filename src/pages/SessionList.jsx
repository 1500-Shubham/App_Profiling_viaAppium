import React from 'react'
import { useState,useContext } from 'react';
import '../styles/sessionList.scss'
import Button from '@mui/material/Button';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import axios from 'axios';
import { appiumServer, AppContext } from '../Main';
import { SessionListItems } from '../components/SessionListItems';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";


export const SessionList = () => {
    const [textArray,setTextArray]= useState([])
    const { sessionId, setSessionId, sessionDetails, setSessionDetails }= useContext(AppContext);
    const[log,setLog]=useState("");
    const getAllSessions =async ()=>{
    const {data}= await axios.get(`${appiumServer}/dashboard/api/sessions`)
    const count= data.result.count;
    setTextArray(data.result.rows)
    // var myJsonString = JSON.stringify(textArray);
    // setLog(JSON.stringify(JSON.parse(myJsonString),null,2))
    // console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
    }
    function updateHandler (i,d){
      setSessionId(i);
      setSessionDetails(d);
      // console.log(sessionDetails)
    }
    return (
    <div className='sessionList'>
        {/* <button id='btn' onClick={getAllSessions}>Get All Sessions</button> */}
        <Button id='btn' onClick={getAllSessions} variant="outlined" startIcon={<BubbleChartIcon />}>Get All Sessions</Button>
        <div id='txtarea'>
            {
             textArray.map((item,index)=>{
              return (
                
              
                <div className='sessionListItems'>
                  <button onClick={() =>updateHandler(item.session_id,item)}> <SessionListItems item={item}/></button> 
                </div>
              )
             }) 
            }
        </div>
    </div>
  )
}
