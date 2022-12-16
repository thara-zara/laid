import React from 'react'
import "./About.css"
import img1 from "../../assests/3.png"
import img2 from "../../assests/10.png"
import img3 from "../../assests/9.png"
import img4 from "../../assests/2.png"
import img5 from "../../assests/4.png"
import img6 from "../../assests/08.png" 

const About = () => {
  return (
    <div className='container'>
        <div className='about'>
            <div className='about-left'>
                <div className='ltop-img'>
                    <div className='top-big'>
                        <img src={img2} alt="img"/>
                    </div>
                    <div className='top-small'>
                        <div className='top-small-one'>
                            <img src={img1} alt="img"/>
                        </div>
                        <div className='top-small-two'>
                            <img src={img6} alt="img"/>
                        </div>
                    </div>
                </div>
                <div className='btm-img'>
                        <div className='btm-small-one'>
                            <img src={img4} alt="img"/>
                        </div>
                        <div className='btm-small-two'>
                            <img src={img5} alt="img"/>
                        </div>
                        <div className='btm-small-three'>
                            <img src={img3} alt="img"/>
                        </div>
                </div>
            </div>
            <div className='about-right'>
                <div className='head-one'>
                    about us
                </div>
                <div className='head-two'>
                    What is <span className='blue'> </span> a <h1>laid back Llamas?</h1> 
                </div>
                <div className='head-three'>
                    7000 laid back llamas have taken over the digital montains of the metarverse.
                    every llmas is unique with different fur colours,hairstyles,expression,hats,shades
                    & more.brought to you by world 7000 laid back llamas have taken over the digital montains of the metarverse.
                    every llmas is unique with different fur colours,hairstyles
                </div>
                <div className='head-four'>
                    <button>
                        buy on opensea
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About