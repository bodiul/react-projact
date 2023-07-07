import React from 'react'
import "./history.css"
import img3 from "../img/img-3.png"

function Vision() {
  return (
    <div>
        <div className="history-area">
        <div className="img">
            <img src={img3} alt="" />
        </div>
        <div className="history-para">
          <div className="color">
            <p className='pp'></p> 
            <h2>History</h2>
          </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <a href="#">Learn More.</a>
        </div>
      </div>
    </div>
  )
}

export default Vision