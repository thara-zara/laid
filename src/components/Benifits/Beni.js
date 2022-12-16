import React from 'react'
import "./Beni.css"
import img1 from "../../assests/9.png"

const Beni = () => {
  return (
    <div className='container'>
    <div className='beni'>
        <div className='beni-head'>
            <div className='beni-first'>
                gotcha
            </div>
            <div className='beni-second'>
                benifits <span className='beni-color'> </span>
                  <h2>laid back llams ?</h2>
            </div>
        </div>
        <div className='beny-btm'>
            <div className='beny-btm-color'>
                <img src={img1} alt="img"/>
                <div className='btm-text'>
                    <ul>
                        <li>laid back llams 7000+ collection</li>
                        <li>You can add webfonts, meta tags, or analytics to this file</li>
                        <li> The build step will place the bundled scripts into the</li>
                        <li>You can add webfonts, meta tags</li>
                        <li> Learn how to configure a non-root public URL</li>
                        <li>It will be replaced with the URL</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Beni