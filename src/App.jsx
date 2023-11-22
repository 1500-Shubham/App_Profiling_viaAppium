import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import { Home } from './pages/Home'
import { SessionList } from './pages/SessionList'
import './styles/app.scss'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header />
    <div className='app'>
      <div className="col1">
      <SessionList/>
      </div>
      <div className="col2">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
      </div>
    </div>
     </BrowserRouter>
  </div>
  )
}

export default App
