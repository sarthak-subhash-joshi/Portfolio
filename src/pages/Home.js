import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import RecentProjects from '../components/RecentProjects'
import Footer from '../components/Footer'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <>
        <div className='homeMainContainer'>
          <Navbar/>
          <Intro/>
          <RecentProjects/>
          <Profile/>
          <Footer/>
         </div>
    </>
  )
}

export default Home