import React from "react";
import './Offers.css'
import exclusive_image from "../Assets/p_image.jpg"

const Offers = () =>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <br />
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <br />
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers