import React from 'react'
import "./Auction.css"
import img6 from "../../assests/08.png";
import img2 from "../../assests/2.png"
import img3 from "../../assests/4.png"

const Auction = () => {
  return (
    <div className='container'>
      <div className='auction'>
          <div className='auction-head'>
            <div className='auction-head-left'>
                <div className='auc'>
                  Hot on auction
                </div>
                <div className='auction-on'>
                  In auction <span className='auction-color'> </span>
                  <h2>laid back llams</h2>
                </div>
            </div>
            <div className='auction-head-right'>
                <p>
                  7000 laid back llamas have taken over the
                  digital montains of the metarverse.
                every llmas is unique with different fur 
                colours,hairstyles,expression,hats,shades
                </p>
            </div>
          </div>
          <div className='auction-card'>
              <div className='auc-card-body'>
                <div className='color colors-one'>
                    <img src={img6} alt="img"/>
                </div>
                <div className='card-mid'>
                <h4>laid back llma #32569</h4>
                  <div className='bid'>
                      <h5>current bid</h5>
                      <h5>ending in</h5>
                  </div>
                  <div className="price">
                      <h5>0.13eth</h5>
                      10h 20m 20s
                  </div>
                  <div className='bid-btn'>
                    <button>
                      bid now
                    </button>
                  </div>
                </div>
              </div>
              <div className='auc-card-body'>
                <div className='color colors-two'>
                    <img src={img2} alt="img"/>
                </div>
                <div className='card-mid'>
                <h4>laid back llma #32569</h4>
                  <div className='bid'>
                      <h5>current bid</h5>
                      <h5>ending in</h5>
                  </div>
                  <div className="price">
                      <h5>0.13eth</h5>
                      10h 20m 20s
                  </div>
                  <div className='bid-btn'>
                    <button>
                      bid now
                    </button>
                  </div>
                </div>
              </div>
              <div className='auc-card-body'>
                <div className='color colors-three'>
                    <img src={img3} alt="img"/>
                </div>
                <div className='card-mid'>
                <h4>laid back llma #32569</h4>
                  <div className='bid'>
                      <h5>current bid</h5>
                      <h5>ending in</h5>
                  </div>
                  <div className="price">
                      <h5>0.13eth</h5>
                      10h 20m 20s
                  </div>
                  <div className='bid-btn'>
                    <button>
                      bid now
                    </button>
                  </div>
                </div>
              </div>
          </div>
          <div className='auction-btn'>
              <button>
                  view on opensea
              </button>
          </div>
      </div>
    </div>
  )
}

export default Auction