import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecentProjects.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink} from "react-router-dom"

const RecentProjects = () => {
   
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  
  return (
    <>
      <div className='RecentProjects-main-container'>
       <div className='ReactProjectsContainer'>
        <div style={{textAlign:'center',color:'white'}} data-aos="zoom-out">
           <h2>My Recent Work</h2>
        </div>

      <div className='row recent-projects-row'>
       <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} data-aos="zoom-in">
          <img src="Images/ansh.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Portfolio Website for Photographers Team</h5>
           <p className="card-text">It is a Portfolio website for nanded based photographers team 'Ansh Eventography'.</p>
         <a href="https://ansh-eventography.netlify.app/" className="btn btn-success" target={'_blank'}>View Project</a>
        </div>
       </div>
       <div className="card col-lg-6 col-md-6" style={{width:'18rem'}} data-aos="zoom-in">
          <img src="Images/portfolio.jpg" className="card-img-top" alt="..."/>
        <div className="card-body"> 
          <h5 className="card-title">Portfolio Website</h5>
           <p className="card-text">Its my own portfolio website</p>
         <a href="#" className="btn btn-success">View Project</a>
        </div>
       </div>
       <NavLink to="/portfolio"><p className="navLink"><button className='View-more-btn' >View More</button></p></NavLink>
      </div>
      </div>
     </div>
     
    
    </>
  )
}

export default RecentProjects