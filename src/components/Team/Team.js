import React from 'react'
import "./Team.css"
import img1 from "../../assests/12.png"
import img2 from "../../assests/07.png"
import img3 from "../../assests/10.png"
import img4 from "../../assests/11.png"

const Team = () => {
  return (
    <div className='container'>
        <div className='team'>
          <div>
          <div className='team-one'>
          Our team
          </div>
          <div className='team-two'>
            <h2>laid back llams</h2>
            team
          </div>
          </div>
          <div className='team-card'>
            <div className='t-card'>
              <div className='t-card-top'>
                  <img src={img1} alt="img"/>
              </div>
              <div className='t-card-btm'>
                <h5>david</h5>
                <p>graphic dsigner</p>
              </div>
            </div>
            <div className='t-card'>
              <div className='t-card-top-one'>
                  <img src={img2} alt="img"/>
              </div>
              <div className='t-card-btm'>
                <h5>david</h5>
                <p>graphic dsigner</p>
              </div>
            </div>
            <div className='t-card'>
              <div className='t-card-top-two'>
                  <img src={img3} alt="img"/>
              </div>
              <div className='t-card-btm'>
                <h5>david</h5>
                <p>graphic dsigner</p>
              </div>
            </div>
            <div className='t-card'>
              <div className='t-card-top-three'>
                  <img src={img4} alt="img"/>
              </div>
              <div className='t-card-btm'>
                <h5>david</h5>
                <p>graphic dsigner</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Team