import React from 'react'
import { useState,useContext } from 'react';
import '../styles/sessionList.scss'
import Button from '@mui/material/Button';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import axios from 'axios';
import { appiumServer, AppContext } from '../Main';
import { SessionListItems } from '../components/SessionListItems';
import Box from "@mui/material/Box";


export const SessionList = () => {
  const [textArray,setTextArray]= useState([])
    const {  setSessionId,  setSessionDetails }= useContext(AppContext);
    const[log,setLog]=useState("");
    const getAllSessions =async ()=>{
    const {data}= await axios.get(`${appiumServer}/dashboard/api/sessions`)
    const count= data.result.count;
    setTextArray(data.result.rows)
    }
    function updateHandler (i,d){
      setSessionId(i);
      setSessionDetails(d);
    }
    return (
      <Box
        component="container"
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 0,
          m: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Button
          id="btn"
          onClick={getAllSessions}
          variant="outlined"
          startIcon={<BubbleChartIcon />}
        >
          Get All Sessions
        </Button>
        <Box
          component="container"
          sx={{
            p: 0,
            m: 0,
            width: "100%",
            height: "96%",
            overflowY:'scroll'
          }}
        >
          {textArray.map((item, index) => {
            return (
              <div className="sessionListItems">
                <button onClick={() => updateHandler(item.session_id, item)}>
                  <SessionListItems item={item} />
                </button>
              </div>
            );
          })}
        </Box>
      </Box>
    );
}
