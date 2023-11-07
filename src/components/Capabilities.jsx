import React,{useContext} from 'react'
import { AppContext } from '../Main';
import "../styles/home.scss"

export const Capabilities = () => {
    const { sessionId, setSessionId, sessionDetails, setSessionDetails }= useContext(AppContext);
    const capabiltiesJson=sessionDetails.capabilities;
    const capabiltiesJsonKeys=Object.keys(capabiltiesJson);
    const capabiltiesJsonValues=Object.values(capabiltiesJson);
    const desiredCapabiltiesJson=sessionDetails.capabilities.desired;
    const desiredCapabiltiesJsonKeys=Object.keys(desiredCapabiltiesJson);
    const desiredCapabiltiesJsonValues=Object.values(desiredCapabiltiesJson);
    return (
    <div className='cap'>
        <div className='capabilities'>
        <h3>Capabilities:
        </h3>
        <br/>
            {
            capabiltiesJsonKeys.map((item,index)=>{
                return (
                    <div> 
                       
                       <span>{item} : {  (typeof(capabiltiesJsonValues[index])===undefined) ? <span> {"null"} </span>
                        : (typeof(capabiltiesJsonValues[index])==='string') ? <span> {capabiltiesJsonValues[index]} </span>
                        : (typeof(capabiltiesJsonValues[index])==='object') ? <span> {JSON.stringify(capabiltiesJsonValues[index])} </span>
                        :  <span> {capabiltiesJsonValues[index].toString()} </span>} </span>
                    <br/>   
                    <br/>
                    </div>
                )
            })
            }
        </div>
        <div className='desiredCapabilities'>
        <h3>Desired Capabilities: </h3>
        <br/>
          {
            desiredCapabiltiesJsonKeys.map((item,index)=>{
                return (
                    <div> 
                       <span>{item} : {(typeof(capabiltiesJsonValues[index])===undefined) ? <span> {"null"} </span>
                        : (typeof(desiredCapabiltiesJsonValues[index])==='string') ? <span> {desiredCapabiltiesJsonValues[index]} </span>
                        : (typeof(desiredCapabiltiesJsonValues[index])==='object') ? <span> {JSON.stringify(desiredCapabiltiesJsonValues[index])} </span>
                        :  <span> {desiredCapabiltiesJsonValues[index].toString()} </span>} </span>
                    <br/>
                    <br/>  
                    </div>
                )
            })
            }
        </div>
        </div>
  )
}
