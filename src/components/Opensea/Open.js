import React from 'react'
import "./Open.css";
import open from "../../assests/Open2.png"
import medium from "../../assests/medium.png"

const Open = () => {
  return (
    <div className='container'>
            <div className='open'>
                <div className='openbar'>
                  <img src={open} alt="img" className='img1'/>
                  <img src={medium} alt="img" className='img2'/>
                </div>
            </div>
    </div>
  )
}

export default Open