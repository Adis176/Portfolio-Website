import React from "react";
import {Card} from "react-bootstrap";

import "./Badge.css";
export default function Cards(props){
    return(
        <Card className=" badge-card" style={{width: '12em'}}>
            <div className="badge-container">
                <div className="badge-front">
                    <Card.Img className="badge-img" src={props.src} alt="img"/>
                    <Card.Body>
                        <Card.Title className="badge-title">{props.title}</Card.Title>
                    </Card.Body>
                </div>
            </div>
                          
        </Card>
    );
}