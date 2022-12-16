import React from 'react'
import "./Nav.css";
import img1 from "../../assests/laidbacklogo.png"

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>
        <img src={img1} alt="img" />
        </div>
        <div className='nav-item'>
          <div>about</div>
          <div>community</div>
          <div>road map</div>
          <div>faq</div>
          <div>team</div>
        </div>
        <div className='link'>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}

export default Nav