import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { NavLink} from "react-router-dom"

// fixed-top 
const Navbar = () => {
    
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
  <NavLink to="/" className='link'> <h5 className="name" ><span className='logo-bottom'>S</span>arthak Josh<span className='logo-top'>i</span></h5></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
      <li className="nav-item">
            <NavLink to="/" className='link'><p className="navLink">Home</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className='link'><p className="navLink">About</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/education" className='link'><p className="navLink">Education</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className='link'><p className="navLink">Portfolio</p></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/achievements" className='link'><p className="navLink">Achievements</p></NavLink>
          </li>
        </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar