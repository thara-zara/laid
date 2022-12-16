import React from 'react'
import "./Header.css"
import img1 from "../../assests/1.png"
import img2 from "../../assests/2.png"
import img3 from "../../assests/4.png"
import Nav from './Nav'

const Header = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='navbar'>
               <Nav/>
            </div>
            <div className='hero'>
                <div className='hero-left'>
                    <div className='first'>
                        <span className='gray'>created by </span>
                        <span className='blue'> laidBlackLlamasTeam</span>
                    </div>
                    <div className='two'>
                        <span className='yellow'></span>
                        Collect our
                        <h2>Llmas Mood</h2>
                        serie nfts.<span className='green'></span>
                    </div>
                    <div className='second'>
                        the extraodinory art you must be collect from our
                        best designer collaboration.
                    </div>
                    <div className='third'>
                            <button>
                            <i class="fa-brands fa-twitter"></i>
                                twitter
                            </button>
                            <span>
                                view on open sea <i className='fas fa-arrow-right'/>
                            </span>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='images'>
                        <img src={img1} alt="img" className="img1" />
                        <span className='lbl1'>lbl #5689</span>
                        <img src={img2} alt="img" className="img2"/>
                        <span className='lbl2'>lbl #5689</span>
                        <img src={img3} alt="img" className="img3"/>
                        <span className='lbl3'>lbl #5689</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header