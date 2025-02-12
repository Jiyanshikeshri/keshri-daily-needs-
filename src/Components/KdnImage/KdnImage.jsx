import React from "react";
import './KdnImage.css'
// import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import kdn_image from '../Assets/keshri daily needs image4.jpg'

const KdnImage = () =>{
    return(
        <div className="KdnImage">
            <div className="KdnImage-left">
                <h2>SHOP FROM TOP CATEGORIES <br /><br /><br /><br /></h2>
                <div>
                    <div className="Kdnimage-hand-icon">
                        <p>We bring the</p>
                        {/* <img src={hand_icon} alt="" /> */}
                    </div>
                    <p>store to your</p>
                    <p>door</p>
                    <br />
                </div>
                <div className="kdn-groceries-btn">
                    <div>Shop now</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="KdnImage-right">
            <img src={kdn_image} alt="" />
            </div>
        </div>
    )
}

export default KdnImage