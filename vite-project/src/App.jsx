import React from 'react'
import App3 from './App3'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App2 from './App2'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      

        <Routes>



          <Route path='/' element={<App3 />} />
          <Route path='/app2' element={<App2 />} />


        </Routes>

      </BrowserRouter>

    </div>
  )
}
