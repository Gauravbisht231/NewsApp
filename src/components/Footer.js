import React, { Component } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaReact, FaBootstrap,  FaSearchLocation, FaLandmark, FaNewspaper} from 'react-icons/fa'
// import { HiOutlineMail} from 'react-icons/hi';
// import {BsFillPersonLinesFill, BsYoutube} from 'react-icons/bs'

export default class Footer extends Component {
    render() {
        return (
          
            <div className='footer row text-white rounded-top'>
<div className='footer-about col'>
    <h3>Made with love and passion </h3>
<h5 className=''> by SinghBeast</h5>
<h6> <FaLandmark/> in INDIA</h6>

</div>
{/* second  column */}
<div className='footer-social-media col'>
    <div>
        <h2>Connect with </h2>
        <ul>
  <li>Github <a href="https://github.com/Gauravbisht231"> <FaGithub/> </a> </li>
  <li> Linkedin <a href="https://www.linkedin.com/in/gauravbisht231/"> <FaLinkedin/> </a></li>
  <li>  Website<a href="https://theinfoslate.com"> <FaSearchLocation/></a></li>
  <li> Instagram <a href="https://www.instagram.com/_whatsupgaurav/"> <FaInstagram/></a></li>
  <li> Youtube <a href="https://www.youtube.com/channel/UCVIiwmeVwZMgM_F9IktyPdQ"> <FaYoutube/></a> </li>
  </ul>
  </div>
</div>
{/* third column */}
<div className="footer-resources col">
    <div>
        <h2>Resources used</h2>
        <ul>
    <li>Reactjs documentation <FaReact/></li>
    <li>Youtube tutorials <FaYoutube/></li>
    <li>Bootstrap documentation <FaBootstrap/></li>
    <li>News API service <FaNewspaper/> </li>
    </ul>
    </div>
</div>
<div>
    <h5 className='text-center text-warning'> <u> © 2023 SinghBeast. All rights reserved </u></h5>
</div>
            </div>
        
        )
    }
}
