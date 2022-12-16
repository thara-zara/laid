import React from 'react';
import "./Rare.css";
import img1 from "../../assests/1.png"
import img2 from "../../assests/2.png"
import img3 from "../../assests/4.png"

const Rare = () => {
  return (
    <div className='container'>
        <div className='rare'>
            <div className='rare-head'>
            <h1>rare collection</h1>
            <h2>laid back llmas</h2>
            </div>
            <div className='rare-img'>
                <img src={img3} alt="img" className='one'/>
                <img src={img1} alt="img" className='two'/>
                <img src={img2} alt="img" className='three'/>
                <img src={img2} alt="img" className='four'/>
                <img src={img1} alt="img" className='five'/>
            </div>
        </div>
    </div>
  )
}

export default Rare