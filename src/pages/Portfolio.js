import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'

const Portfolio = () => {
  return (
   <> 
    <Navbar/>
    <div className=''>
        <div style={{textAlign:'center',color:'white'}} >
           <h2>My Recent Work</h2>
        </div>
      <div className='row recent-projects-row'>
        <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} >
          <img src="Images/ansh.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Portfolio Website for Photographers Team</h5>
           <p className="card-text">It is a Portfolio website for nanded based photographers team 'Ansh Eventography'.</p>
         <a href="https://ansh-eventography.netlify.app/" className="btn btn-success" target={'_blank'}>View Project</a>
        </div>
       </div>
       <div className="card col-lg-6 col-md-6" style={{width:'18rem'}}>
          <img src="Images/portfolio.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Portfolio Website</h5>
           <p className="card-text">Its my own portfolio website</p>
         <a href="#" className="btn btn-success">View Project</a>
        </div>
       </div>

       <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} >
          <img src="Images/ToDo.jpg" className="card-img-top" alt="..." style={{height:'130px'}}/>
        <div className="card-body"> 
          <h5 className="card-title">Todo List</h5>
           <p className="card-text">To do app is for storing list items,also it can be used for writing notes. In this local storage is implemented which helps to store data locally.</p>
         <a href="https://dolistsarthak.netlify.app/" className="btn btn-success" target={'_blank'}>View Project</a>
        </div>
       </div>

      </div>
      </div>


      <div style={{textAlign:'center',color:'white'}} >
           <h2>API Based Projects</h2>
        </div>
      <div className='row recent-projects-row'>
        <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} >
          <img src="Images/unsplash.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Unsplash colne</h5>
           <p className="card-text">It is unsplash clone made using unsplash API. It will show the images of the word that you have searched for.</p>
         <a href="https://image-gallery-sarthak.netlify.app" className="btn btn-success" target={'_blank'}>View Project</a>
        </div>
       </div>
      </div>
        
      
      <div style={{textAlign:'center',color:'white'}} >
           <h2>Learning Projects</h2>
        </div>
      <div className='row recent-projects-row'>
        <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} >
          <img src="Images/Tindog.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Tindog Website</h5>
           <p className="card-text">Tinder for dogs. This website was made using HTML, CSS and Javascript.</p>
         <a href="https://tindog-website-sarthak.netlify.app/" className="btn btn-success" target={'_blank'}>View Project</a>
        </div>
       </div>
       <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} >
          <img src="Images/DrumKit.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Drum Kit</h5>
           <p className="card-text">Durm Kit was made using Javascript. This is responsible to click as well as after pressing mentioned keys.</p>
         <a href="https://drumkit-sarthak.netlify.app/" className="btn btn-success" target={'_blank'}>View Project</a>
        </div>
       </div> 
      </div>
  
    <Footer/>
   </>
  )
} 

export default Portfolio