import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  return (
   <>
    <Navbar/>
    
    <div className='about-main-container'>
      <h2><span className='about-start'> <span className='about-end'>Ab</span>ou</span>t Me</h2>
      <div className='about-me'>
         <p>Hi I am Sarthak Joshi. I am engineering student currently in third year. I design beautiful simple designs and I love what I do.  </p>
      </div>
      <div className='row row-about'>
        <div className='col-lg-3 about-col'>
              <p className='about-p-tag'><strong>Degree :  </strong>BTECH</p>
              <p className='about-p-tag'><strong>Website :  </strong>Available</p>
              <p className='about-p-tag'><strong>Birthday :  </strong>30 Nov 2002</p>
              <p className='about-p-tag'><strong>City:  </strong>Pune</p>
        </div>        
        <div className='col-lg-5 about-col-2' data-aos="fade-up">
          <img src="./Images/sarthak-img.jpg" alt="" />
        </div>
        <div className='col-lg-4 about-col'>
              <p className='about-p-tag'><strong>Age :  </strong>20</p>
              <p className='about-p-tag'><strong>Email : </strong>sarthakjoshi3011@gmail.com</p>
              <p className='about-p-tag'><strong>Phone :  </strong>9175781599</p>
              <p className='about-p-tag'><strong>Freelance :  </strong>Available</p>
        </div>
      </div>
    </div>
 
    <Footer/>
   </>
  )
}

export default About

