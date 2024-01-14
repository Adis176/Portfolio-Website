import React from "react";
import {Card} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

import "./Publication.css";
export default function Cards(props){
    // const navigate = useNavigate();

    return(
        <Card className=" pub-card" >
            <div className="pub-container">
                <div className="pub-front">
                    <Card.Img className="pub-img" src={props.src} alt="img"/>
                    <Card.Title className="pub-title">{props.title}</Card.Title>
                </div>
                <div className="pub-back">
                    <Card.Body >
                        <Card.Text className="pub-desc">
                           {props.desc}
                        </Card.Text>
                        <button variant='primary' className="pub-button" style={{color: 'black !important'}} onClick={() => {window.open(props.link, "_blank")}}>Visit Paper</button>
                    </Card.Body>
                </div>
            </div>
                          
        </Card>
    );
}