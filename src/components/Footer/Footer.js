import React from 'react';
import "./Footer.css"
import img1 from "../../assests/13.png"

const Footer = () => {
  return (
    <div className='container'>
      <div className='foot'>
      <div className='footer'>
          <div className='logo'>

          </div>
          <div className='footer-mid'>
                <div className='f-mid-p'>
                  <p>
                  7000 laid back llamas have taken over the
                  digital montains of the metarverse.
                every llmas is unique with different fur 
                colours,hairstyles,expression,hats,shades
                  </p>
                </div>
                <div className='f-mid-cat'>
                  <h5>laid back llams</h5>
                  <h5>laid boss</h5>
                  <h5>lady llamas</h5>
                </div>
                <div className='f-mid-pages'>
                  <h5>road map</h5>
                  <h5>team</h5>
                  <h5>faq</h5>
                </div>
                <div className='f-mid-join'>
                  <div>
                  <input type="text"/>
                  </div>
                  <button>
                    join
                  </button>
                </div>
          </div>
          <div className='footer-btm'>
            <h5>brougth to you by</h5>
            <img src={img1} alt="img"/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Footer