import React from 'react' 
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" height="50px" alt="Website logo" />
            <div className="elements">
                <h4>About</h4>   
                <h4>Services</h4>   
                <h4>Campus Ambassader</h4>   
                <h4>Material</h4>   
                <h4>Internships</h4>   
                <h4>Hiring</h4>   
                <h4>Mentors</h4>   
                <h4>Industrial Personalities</h4>   
                {/* <ul class="navbar-nav m-auto">
        <li class="nav-item active mx-5">
          <a  class="nav-link" href="#home" >About</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#about" >Services</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#skill" >Campus Ambassader</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#contact" >Material</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#contact" >Internships</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#contact" >Hiring</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#contact" >Mentors</a>
        </li>
        <li class="nav-item mx-5">
          <a  class="nav-link" href="#contact" >Industrial Personalities</a>
        </li>


      </ul> */}
  
            </div>
    
        </div>  
    )
}

export default Header
