import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Portfolio from './pages/Portfolio'
import Achievements from './pages/Achievements'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  HashLoader from "react-spinners/HashLoader";
import './App.css'

import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {
    AOS.init({duration:800});
  }, []);

 
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
     setLoading(true);
     setTimeout(()=>{
        setLoading(false);
     },2500)
  },[])

  return (
    <>
      {
        loading ?

     <div className='loader'>
      < HashLoader


        color={"red"}
       loading={loading}
        size={50}
      />
     </div> 

      :
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="achievements" element={<Achievements/>} />
        </Routes>
     </BrowserRouter>
      }
    </>
  )
} 

export default App 


// <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="education" element={<Education />} />
//           <Route path="portfolio" element={<Portfolio />} />
//           <Route path="achievements" element={<Achievements/>} />
//         </Routes>
//      </BrowserRouter>