import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import { useState, createContext } from 'react' 

export const appiumServer="http://localhost:4723"

export const AppContext=createContext(
  {
  sessionId: '',
  setSessionId: () => {},
  sessionDetails: '',
  setSessionDetails: () => {},
  }
);
const AppWrapper= ()=>{
  const [sessionId,setSessionId] = useState("14456615-2109-4502-8fff-592d58f173c6");
  const [sessionDetails,setSessionDetails]=useState({
  "capabilities": {
    "platformName": "android",
    "app": "/Users/shubham2.keshari/Documents/proverbial_android.apk",
    "appProfiling": true,
    "automationName": "UiAutomator2",
    "console": true,
    "deviceName": "emulator-5554",
    "devicelog": true,
    "enablePerformanceLogging": true,
    "isRealMobile": true,
    "network": true,
    "platformVersion": "9",
    "visual": true,
    "platform": "LINUX",
    "webStorageEnabled": false,
    "takesScreenshot": true,
    "javascriptEnabled": true,
    "databaseEnabled": false,
    "networkConnectionEnabled": true,
    "locationContextEnabled": false,
    "warnings": {},
    "desired": {
      "platformName": "android",
      "app": "/Users/shubham2.keshari/Documents/proverbial_android.apk",
      "appProfiling": true,
      "automationName": "UiAutomator2",
      "console": true,
      "deviceName": "Pixel-Appium",
      "devicelog": true,
      "enablePerformanceLogging": true,
      "isRealMobile": true,
      "network": true,
      "platformVersion": "9",
      "visual": true
    },
    "deviceUDID": "emulator-5554",
    "appPackage": "com.lambdatest.proverbial",
    "pixelRatio": "2.625",
    "statBarHeight": 63,
    "viewportRect": {
      "left": 0,
      "top": 63,
      "width": 1080,
      "height": 2211
    },
    "deviceApiLevel": 28,
    "deviceManufacturer": "unknown",
    "deviceModel": "Android SDK built for arm64",
    "deviceScreenSize": "1080x2400",
    "deviceScreenDensity": 420
  },
  "device_info": {
    "total_cpu": 1,
    "total_memory": "1458880",
    "api_level": 28
  },
  "id": 20,
  "session_id": "14456615-2109-4502-8fff-592d58f173c6",
  "build_id": null,
  "project_id": null,
  "name": null,
  "platform": "LINUX",
  "platform_name": "ANDROID",
  "automation_name": "UiAutomator2",
  "device_name": "emulator-5554",
  "platform_version": "9",
  "app": "/Users/shubham2.keshari/Documents/proverbial_android.apk",
  "browser_name": "",
  "live_stream_port": null,
  "udid": "emulator-5554",
  "is_completed": true,
  "is_paused": false,
  "start_time": "2023-10-30T17:12:19.834Z",
  "end_time": "2023-10-30T17:12:30.586Z",
  "is_test_passed": true,
  "is_profiling_available": true,
  "is_http_logs_available": false,
  "session_status": "PASSED",
  "video_path": null,
  "session_status_message": null,
  "created_at": "2023-10-30T17:12:19.835Z",
  "updated_at": "2023-10-30T17:12:30.586Z"
});

  return (
  <AppContext.Provider value={{ sessionId, setSessionId, sessionDetails, setSessionDetails }}>
   <App />
   </AppContext.Provider>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppWrapper/>
  </React.StrictMode>,
)
