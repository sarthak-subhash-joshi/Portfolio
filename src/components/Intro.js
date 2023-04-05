import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intro.css'
import Typewriter from "typewriter-effect";
import { NavLink} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

const Intro = () => {
    useEffect(() => {
       AOS.init({duration:2000});
     }, []);

  
  return (
    <>
      <div className='row intro-container'>
        <div className='col-lg-6 intro-col-1' data-aos="fade-down">
               <div className='my-intro'>
                  <h3>Hello , my name is <span className='my-name'>Sarthak Joshi</span></h3>
                  <h3 className='typescript-text-h3'>I 'm a<span className='my-name'><Typewriter onInit={(typewriter)=> { typewriter
                 .typeString("Web Developer") 
                 .pauseFor(1500)
                 .deleteAll()
                 .typeString("Web Designer")
                 .pauseFor(1500)
                 .deleteAll()
                 .typeString("Engineering Student")
                 .pauseFor(1500)
                 .deleteAll()
                 .typeString("Web Developer") 
                 .pauseFor(1500)
                 .deleteAll()
                 .typeString("Web Designer")
                 .pauseFor(1500)
                 .deleteAll()
                 .typeString("Engineering Student")
                 .pauseFor(1500)
                 .deleteAll()
                 .typeString("Web Developer") 
                 .pauseFor(1500)
                 .start();
            }} /></span></h3>
                  
                  <p>I am skilled in web development, particurly front end development. I am familier with web development teachnologies such as HTML,CSS,JavaScript,Bootstrap and ReactJs</p>
                
                  <NavLink to="/about"><p className="navLink">  <button className='gallery-btn'>More About Me</button></p></NavLink>
                  <a href="Resume.pdf" download='Resume.pdf'> <button className='gallery-btn'>Resume</button></a>
               </div>
        </div>
        <div className='col-lg-6 intro-col-2' data-aos="fade-up">
                <img src="./Images/sarthak-img.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Intro