import React ,{useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Profile.css'
import AOS from "aos";
import "aos/dist/aos.css";
 
const Profile = () => {

    useEffect(() => {
        AOS.init({duration:2000});
      }, []);

  return (
    <>
        <div className='profile-main-container'>
         <div className='row'>
            <div className="card col-lg-4" style={{width:'18rem'}} >
                <img src="Images/codechef.png" className="card-img-top profile-img" alt="..."/>
            <div className="card-body profile-card-body"> 
                <h4>Codechef Profile</h4>
                <a href="https://www.codechef.com/users/sarthak_joshi3"  target={'_blank'}> <button className='gallery-btn'>View</button></a>
            </div>
         </div>
                
         <div className="card col-lg-4" style={{width:'18rem'}}  >
              <img src="Images/gfg.jpeg" className="card-img-top profile-img" alt="..."/>
          <div className="card-body profile-card-body"> 
             <h4>GFG Profile</h4>
             <a href="https://auth.geeksforgeeks.org/user/sarthakjo3eyk/"  target={'_blank'}> <button className='gallery-btn'>View</button></a>
          </div>
         </div>  

          <div className="col-lg-4 col-contact-profile"  >
             <p><i class="fa-solid fa-phone"></i> Phone : 9178781599</p>
             <p><i class="fa-solid fa-envelope"></i> Email : sarthakjoshi3011@gmail.com</p>
             <div className='profile-icons'>
             <a href="https://www.linkedin.com/in/sarthak-joshi-6112b7231/" target={'_blank'}><i class="fa-brands fa-linkedin-in"></i></a>
             <a href="https://github.com/sarthjoshi"><i class="fa-brands fa-github" target={'_blank'}></i></a>
             <a href="https://www.instagram.com/sarthak_joshi_3011/" target={'_blank'}><i class="fa-brands fa-instagram"></i></a>
             </div>
         </div>

         </div>
        </div>
    </>
  )
}

export default Profile