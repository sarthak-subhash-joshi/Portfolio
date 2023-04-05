import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Achievements.css'

const Achievements = () => {
  return (
    <>
      <Navbar/>
      <div className='achievements-main-container'>
      <div style={{textAlign:'center', marginBottom:'100px'}}>
        <h4>⭐ACHIEVEMENTS⭐</h4>
      </div>
        <div className='row acievement-container'>
        <div className='col-lg-6'>
               <h4 style={{textAlign:'center', marginBottom:'15px',color:'#0081B4'}}><i class="fa-solid fa-shield-halved"></i>  Web Develeopment Competition</h4>
               <p style={{margin:'50px'}}> I have secured first runner up in web development competition which was conducted by PCCOE ACM. In this competition participants need to make a landing page for the student chapters in PCCOE in 3 hrs.</p>
          </div>
          <div className='col-lg-6 acievement-container-col'> 
               <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                     <div className="carousel-inner">
                           <div className="carousel-item active" data-bs-interval="5000">
                                <img src="Images/award_sarthak.jpeg" className="d-block w-100" alt="..." />
                            </div>
                             <div className="carousel-item" data-bs-interval="5000">
                                 <img src="Images/award.jpeg" className="d-block w-100" alt="..." />
                              </div>
                            </div>
                           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span className="visually-hidden">Previous</span>
                           </button>
                           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                           <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                           </button>
                         </div>
                      </div>

 


                      <div className='col-lg-6 acievement-container-col'>
               <h4 style={{textAlign:'center', marginBottom:'15px',color:'#0081B4'}}><i class="fa-solid fa-shield-halved"></i>  Research Paper </h4>
               <p style={{margin:'50px 50px 10px'}}>Research paper on : "Analysis ofVaccination effect on COVID-19cases"</p>
               <p style={{margin:'10px 50px'}}>It got published in 'INTERNATIONAL JOURNAL FOR RESEARCH AND DEVELOPMENT IN TECHNOLOGY' For Volume -15 , Issue-6 , June-2021 in IJRDT</p>
               <a href="research_paper.pdf" download='research_paper.pdf'style={{margin:'10px 50px'}}> <button className='gallery-btn'>Download Paper</button></a>
          </div>
          <div className='col-lg-6'>
               <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                <img src="Images/certificate.jpg" className="d-block w-100" alt="..." />
                            </div>
                      </div>    
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Achievements 









