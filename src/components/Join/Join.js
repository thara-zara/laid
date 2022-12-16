import React from 'react'
import "./Join.css"
import img1 from "../../assests/8.png"

const Join = () => {
  return (
<div className='container'>
    <div className='join'>
        <div className='join-left'>
            <img  src={img1} alt="img"/>
        </div>
        <div className='join-right'>
            <div className='one'>
                join us
            </div>
            <div className='two'>
                join community <span className='join-color'> </span>
                  <h2>laid back llams</h2>
                  <p>there is nothing can stop us.we can overcome evrything that is meet today</p>
            </div>
            <div className='j-btn'>
            <button className='j-btn-one'>
            <i class="fa-brands fa-twitter"></i>
            twitter
            </button>
            <button  className="j-btn-two">
            <i class="fa-brands fa-discord"></i>
            discord
            </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Join