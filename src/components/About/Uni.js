import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import "./Uni.css";

export default function Uni(){
    return (
        <div className="uni-card-cont">
            <div data-tilt data-tilt-speed="250" data-tilt-max="10" data-tilt-perspective="500" className="uni-card clearfix">
                <img className="uni-shoe" src="http://res.cloudinary.com/arwinneil/image/upload/v1525614947/product2_ce8vch.png" alt="no uni img" />
                <p id="title" className="uni-title">Nike Air</p>
                <p id="description" className="uni-desc">Nike Air technology consists of pressurized air inside a tough,&nbsp;yet flexible bag. The Air Sole units are located in the midsole beneath the heel, forefoot or in both areas. The Air Sole units in Nike Air shoes compress to reduce the force of
                    impact.
                </p>
                <a href="#">
                    <div id="button" className="uni-button clearfix">
                        <p className="uni-text">Learn More</p>
                    </div>
                </a>
            </div>
        </div>
    );
}