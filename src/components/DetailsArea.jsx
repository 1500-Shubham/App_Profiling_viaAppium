import React,{useContext} from 'react'
import { AppContext } from '../Main';
import "../styles/home.scss"

export const DetailsArea = () => {
    const { sessionId, setSessionId, sessionDetails, setSessionDetails }= useContext(AppContext);

  return (
    <div className='detailsArea'>
    <div id='box1'>
    <p>Session ID  : {sessionDetails.session_id}</p>
    <br/>
    <p>Start Time  : {sessionDetails.start_time }</p>
    <br/>
    <p>Device Name : {sessionDetails.device_name }</p>
    <br/>
    <p>Total Cpu   : {sessionDetails.device_info.total_cpu }</p>
    </div>
    <div id='box2'>
    <p>OS : {sessionDetails.platform_name}</p>
    <br/>
    <p>End Time  : {sessionDetails.end_time }</p>
    <br/>
    <p>UDID : {sessionDetails.udid }</p>
    <br/>
    <p>Total Memory   : {((sessionDetails.device_info.total_memory)/1024).toFixed(2) } MB</p>
    </div>
    <div id='box3'>
    <p>OS Version: {sessionDetails.platform_version}</p>
    <br/>
    <p>Automation  : {sessionDetails.automation_name }</p>
    <br/>
    <p>App : {sessionDetails.app }</p>
    <br/>
    <p>API Level   : {sessionDetails.device_info.api_level }</p>
    </div>
    </div>
  )
}
