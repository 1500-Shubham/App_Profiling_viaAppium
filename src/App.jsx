import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/Header'
import { Home } from './pages/Home'
import { SessionList } from './pages/SessionList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className="col1">
      <SessionList/>
      </div>
      <div className="col2">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          </BrowserRouter>
      </div>
    </div>

  )
}

export default App
