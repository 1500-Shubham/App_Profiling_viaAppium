import React from 'react'
import "../styles/home.scss"
import { useState,useContext,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from "axios"
import {AppContext, appiumServer} from "../Main"
import ReactApexCharts from 'react-apexcharts'
import { DetailsArea } from '../components/detailsArea';
import { Capabilities } from '../components/Capabilities';

//MATERIAL UI
import Box from "@mui/material/Box";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const Home = () => {
  const { sessionId, setSessionId, sessionDetails, setSessionDetails }= useContext(AppContext);
  const[log,setLog]=useState({});
  const[tLog,setTLog]=useState({});
  const[dLog,setDLog]=useState({});
  const[aLog,setALog]=useState({});
  const[display,setDisplay]=useState([true,false,false,false]);
  const[cpuChart,setCpuChart]=useState({
            series: [
                        {
                          name: "CPU Used (%)",
                          data: []
                        },
                        {
                          name: "Total CPU Used (%)",
                          data: []
                        }
                      ],
            options: {
              chart: {
                height: 350,
                type: 'area',
                // dropShadow: {
                //   enabled: true,
                //   color: '#000',
                //   top: 18,
                //   left: 7,
                //   blur: 10,
                //   opacity: 0.2
                // },
                // toolbar: {
                //   show: false
                // }
              },
              // colors: ['#77B6EA', '#545454'],
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'CPU Profiling',
                align: 'left'
              },
              // grid: {
              //   borderColor: '#e7e7e7',
              //   row: {
              //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              //     opacity: 0.5
              //   },
              // },
              // markers: {
              //   size: 1
              // },
              xaxis: {
                categories: [],
                title: {
                  text: 'Timestamp (sec)'
                }
              },
              yaxis: {
                title: {
                  text: 'CPU (%)'
                },
                min: 0,
                max: 100*(parseInt(sessionDetails.device_info.total_cpu))
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
  })
  const[memoryChart,setMemoryChart]=useState({
            series: [
                        {
                          name: "Memory Used (MB)",
                          data: []
                        },
                        {
                          name: "Total Memory Used (MB)",
                          data: []
                        }
                      ],
            options: {
              chart: {
                height: 350,
                type: 'area',
                // dropShadow: {
                //   enabled: true,
                //   color: '#000',
                //   top: 18,
                //   left: 7,
                //   blur: 10,
                //   opacity: 0.2
                // },
                // toolbar: {
                //   show: false
                // }
              },
              // colors: ['#77B6EA', '#545454'],
              // dataLabels: {
              //   enabled: false,
              // },
              stroke: {
                curve: 'smooth'
              },
              title: {
                text: 'Memory Profiling',
                align: 'left'
              },
              // grid: {
              //   borderColor: '#e7e7e7',
              //   row: {
              //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              //     opacity: 0.5
              //   },
              // },
              // markers: {
              //   size: 1
              // },
              xaxis: {
                categories: [],
                title: {
                  text: 'Timestamp (sec)'
                }
              },
              yaxis: {
                title: {
                  text: 'Memory (MB)'
                },
                min: 0,
                max: parseInt(((sessionDetails.device_info.total_memory)/1024).toFixed(2))
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
  })

  useEffect(()=>{
  
   axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/logs/text`).then((res)=>{
  const {data}= res
  var count= data.result.count;
  var textArray=data.result.rows;
  var myJsonString = JSON.stringify(textArray);
  setTLog( JSON.stringify(JSON.parse(myJsonString),null,2))
  // console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
  }).catch(error => {
     console.log(error)
  })

   axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/logs/device`).then((res)=>{
  const {data}= res
  var count= data.result.count;
  var textArray=data.result.rows;
  var myJsonString = JSON.stringify(textArray);
  setDLog( JSON.stringify(JSON.parse(myJsonString),null,2))
  // console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
  }).catch(error => {
     console.log(error)
  })

   axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/profiling_data`)
  .then((res)=>{
    const {data}= res;
    var textArray=data.result;
    var myJsonString = JSON.stringify(textArray);
    setALog( JSON.stringify(JSON.parse(myJsonString),null,2))
    // console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
    // ********Creating Charts************
    const n=textArray.length;
    const timestamp=[],cpu=[],totalCpu=[],memory=[],totalMemory=[];
    const baseTime = (new Date(textArray[0].timestamp)).getTime();
    for(var i =0;i<n;++i){
      timestamp.push(`${(((new Date(textArray[i].timestamp)).getTime()-baseTime)/1000).toFixed(1)}s`);
      cpu.push(`${textArray[i].cpu}`);
      totalCpu.push(`${textArray[i].total_cpu_used}`)
      memory.push(`${(textArray[i].memory/1024).toFixed(2)}`)
      totalMemory.push(`${(textArray[i].total_memory_used/1024).toFixed(2)}`)
    }
    setCpuChart((oldCpuChart)=>{
      const newChart=oldCpuChart
      newChart.series[0].data=cpu
      newChart.series[1].data=totalCpu
      newChart.options.xaxis.categories=timestamp
      newChart.options.yaxis.max=100*(parseInt(sessionDetails.device_info.total_cpu))
      return newChart
    })
    setMemoryChart((oldMemoryChart)=>{
      const newChart=oldMemoryChart
      newChart.series[0].data=memory
      newChart.series[1].data=totalMemory
      newChart.options.xaxis.categories=timestamp
      newChart.options.yaxis.max=parseInt(((sessionDetails.device_info.total_memory)/1024).toFixed(2))
      return newChart
    })
    // var div = document.getElementById('textarea2');
    //  div.innerHTML = 
    //  <div>
    //   <ReactApexCharts  options={cpuChart.options} series={cpuChart.series} type="line" height={350} width={500} />
    //   <ReactApexCharts  options={memoryChart.options} series={memoryChart.series} type="line" height={350} width={500} />
    //  </div>
  })

  },[sessionId]); 

  const [value, setValue] = useState('one');

  const handleChange = (e, newValue) => {
    setValue(newValue);
    // console.log(e.target.value + " " + newValue)
    if(newValue==='one'){

    }else if(newValue==='two'){

    }else if(newValue==='three'){

    }else {

    }
    
  }
    return (
    <div className='home'>
        <DetailsArea/>
        <Capabilities/>
        
        {/* //OLD DESIGN */}
        {/* <div id='buttons'>
        <button onClick={()=>{ setDisplay([true,false,false,false])}}>Text Logs</button>
        <button onClick={()=>{setDisplay([false,true,false,false])}}>Device Logs</button>
        <button onClick={()=>{ setDisplay([false,false,true,false])}}>App Profiling Logs</button>
        <button onClick={()=>{ setDisplay([false,false,false,true])}}>CPU and Memory</button>
        </div>
        {display[0] ? (<textarea className='textarea' value={tLog}></textarea>) 
        : display[1] ? (<textarea className='textarea' value={dLog}></textarea>)
        : display[2] ? (<textarea className='textarea' value={aLog}></textarea>) 
        : (
        <div id='textarea2'>    
        <ReactApexCharts  options={cpuChart.options} series={cpuChart.series} type="line" height={350} width={800} />
        <ReactApexCharts  options={memoryChart.options} series={memoryChart.series} type="line" height={350} width={800} />
        </div>
        )} */}
        
        {/* //NEW DESIGN */}
          <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='primary'
            indicatorColor='primary'
            aria-label="secondary tabs example"
            centered
          >
            <Tab onClick={()=>{ setDisplay([true,false,false,false])}} value="one" label="Text Logs" />
            <Tab onClick={()=>{setDisplay([false,true,false,false])}} value="two" label="Device Logs" />
            <Tab onClick={()=>{ setDisplay([false,false,true,false])}} value="three" label="App Profiling Logs" />
            <Tab onClick={()=>{ setDisplay([false,false,false,true])}} value="four" label="CPU and Memory" />
          </Tabs>
        </Box>
        {display[0] ? (<textarea className='textarea' value={tLog}></textarea>) 
        : display[1] ? (<textarea className='textarea' value={dLog}></textarea>)
        : display[2] ? (<textarea className='textarea' value={aLog}></textarea>) 
        : (
        <div id='textarea2'>    
        <ReactApexCharts  options={cpuChart.options} series={cpuChart.series} type="line" height={350} width={800} />
        <ReactApexCharts  options={memoryChart.options} series={memoryChart.series} type="line" height={350} width={800} />
        </div>
        )}
    </div>
  )
}
