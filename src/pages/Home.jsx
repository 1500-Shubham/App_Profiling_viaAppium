import React from 'react'
import "../styles/home.scss"
import { useState,useContext,useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from "axios"
import {AppContext, appiumServer} from "../Main"
import ReactApexCharts from 'react-apexcharts'
import { DetailsArea } from '../components/detailsArea';
import { Capabilities } from '../components/Capabilities';

export const Home = () => {
  const { sessionId, setSessionId, sessionDetails, setSessionDetails }= useContext(AppContext);
  const[log,setLog]=useState("");
  const[chart,setChart]=useState(false);
  const[cpuChart,setCpuChart]=useState({
            series: [
                        {
                          name: "CPU Used (%)",
                          data: [28, 29, 33, 36, 32, 32, 33]
                        },
                        {
                          name: "Total CPU Used (%)",
                          data: [12, 11, 14, 18, 17, 13, 13]
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
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                  text: 'Timestamp (sec)'
                }
              },
              yaxis: {
                title: {
                  text: 'CPU (%)'
                },
                min: 0,
                max: 400
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
                          data: [28, 29, 33, 36, 32, 32, 33]
                        },
                        {
                          name: "Total Memory Used (MB)",
                          data: [12, 11, 14, 18, 17, 13, 13]
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
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                  text: 'Timestamp (sec)'
                }
              },
              yaxis: {
                title: {
                  text: 'Memory (MB)'
                },
                min: 0,
                max: 2000
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

  useEffect(()=>{},[]); 
  
  const textLog= async()=>{
    setChart(false);
   const {data}= await axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/logs/text`)
  var count= data.result.count;
  // var textArray=[]
  // for(var i=0;i<count;++i){
  //   textArray.push({
  //     command_name:data.result.rows[i].command_name,
  //     created_at: data.result.rows[i].created_at,
  //     end_time: data.result.rows[i].end_time,
  //     is_error: data.result.rows[i].is_error,
  //     log_id: data.result.rows[i].log_id,
  //     params: data.result.rows[i].params,
  //     response: data.result.rows[i].response,
  //     screen_shot: data.result.rows[i].screen_shot,
  //     session_id: data.result.rows[i].session_id,
  //     start_time: data.result.rows[i].start_time,
  //     title: data.result.rows[i].title,
  //     title_info: data.result.rows[i].title_info,
  //     updated_at: data.result.rows[i].updated_at})
  // }
  var textArray=data.result.rows;
  var myJsonString = JSON.stringify(textArray);
  setLog( JSON.stringify(JSON.parse(myJsonString),null,2))
  console.log(JSON.stringify(JSON.parse(myJsonString),null,2))

  }
  const deviceLog= async()=>{
    setChart(false);
    const {data}= await axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/logs/device`)
    var count= data.result.count;
    var textArray=data.result.rows;
    var myJsonString = JSON.stringify(textArray);
    setLog( JSON.stringify(JSON.parse(myJsonString),null,2))
    console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
  }
  const appProfiling= async()=>{
    setChart(false);
    const {data}= await axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/profiling_data`)
    var textArray=data.result;
    var myJsonString = JSON.stringify(textArray);
    setLog( JSON.stringify(JSON.parse(myJsonString),null,2))
    console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
  }
  const displayChart = async()=>{
    setChart(true);
    const {data}= await axios.get(`${appiumServer}/dashboard/api/sessions/${sessionId}/profiling_data`)
    var textArray=data.result;
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
    // var myJsonString = JSON.stringify(totalMemory);
    // console.log(JSON.stringify(JSON.parse(myJsonString),null,2))
    setCpuChart((oldCpuChart)=>{
      const newChart=oldCpuChart
      newChart.series[0].data=cpu
      newChart.series[1].data=totalCpu
      newChart.options.xaxis.categories=timestamp
      return newChart
    })
    setMemoryChart((oldMemoryChart)=>{
      const newChart=oldMemoryChart
      newChart.series[0].data=memory
      newChart.series[1].data=totalMemory
      newChart.options.xaxis.categories=timestamp
      return newChart
    })
  }
    return (
    <div className='home'>
        <DetailsArea/>
        <Capabilities/>
        <div className='buttons'>
        <button onClick={()=>textLog()}>Text Logs</button>
        <button onClick={()=>deviceLog()}>Device Logs</button>
        <button onClick={()=>appProfiling()}>App Profiling Logs</button>
        <button onClick={()=>displayChart()}>CPU and Memory</button>
        </div>
        {!chart ? (
        <textarea className='textarea' value={log}></textarea>
          ) : (
        <div className='textarea2'>    
        <ReactApexCharts  options={cpuChart.options} series={cpuChart.series} type="line" height={350} width={500} />
        <ReactApexCharts  options={memoryChart.options} series={memoryChart.series} type="line" height={350} width={500} />
        </div>
        )}
    </div>
  )
}
