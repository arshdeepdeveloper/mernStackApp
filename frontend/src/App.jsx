import React from 'react' 
import Home from './Home/Home'
import Course from './Component/Course'
import { Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Component/Signup'
import Login1 from './Component/Login1'
function App() {
  return (
    <> 
      <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Course' element={<Courses />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Login1' element={<Login1 />} />
    </Routes>
    </div>
    </>
  )
}

export default App
