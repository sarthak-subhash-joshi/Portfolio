import React ,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <>
      <Navbar/>
       
       <div className='education-main-container'>
   <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2020 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
      >
       <h4 className="vertical-timeline-element-title">Pimpri Chinchwad College of Engineering</h4>
       <p> Currently pursuing a bachelor's degree in computer science (CGPA : 8.84)</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
         date="2020"
         iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff'}}
      >
      <h4 className="vertical-timeline-element-title">Heritage Junior College,Nanded</h4>
      <p>HSC  (85.40 %)</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
         date="2018"
         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff'  }}
       >
        <h4 className="vertical-timeline-element-title">Tiny Angles School,Nanded</h4>
        <p>SSC (95.50 %)</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
       </div>

      <Footer/>
    </>
  )
}

export default Education