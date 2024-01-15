import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Edu.css";

export default function Edu(props){
    return (
        <div className="wrap animate pop">
            <div className="edu-overlay">
                <div className="edu-overlay-content animate slide-left delay-2">
                    <h3 className="animate slide-left pop delay-4">{props.name ? props.name : 'Pandit Deendayal Energy University'}</h3>
                    <div className="animate slide-left pop delay-5 disp-text" >
                        {props.degree ? props.degree : 'Masters'}  {props.specialization ? props.specialization: 'Computer Science'} 
                    </div>
                </div>
                <div className="image-content animate slide delay-5" style={{ backgroundImage: props.imgsrc}}>
                    <img src={props.imgsrc} alt="" style={{width: '100%', height: '100%'}}/>
                </div>

            </div>
            <Container className="edu-text" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100%'}}>
                    <Row style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%', padding: '1em'}}>
                        <Col className="about-edu-rows">
                            <span className="about-text-bold about-text-col" style={{fontSize: '1.1em'}}>{props.name}</span>
                        </Col>
                        <Col className="about-edu-rows">
                            <span className="about-text-bold about-text-col">{props.degree}</span> {props.specialization}
                        </Col>
                        <Col className="about-edu-rows">
                            <span className="about-text-bold about-text-col">CGPA: </span> {props.cgpa}
                        </Col>
                        <Col className="about-edu-rows">
                            <span className="about-text-bold about-text-col">Location: </span> {props.location}
                        </Col>
                        <Col className="about-edu-rows">
                            <span className="about-text-bold about-text-col"> Key-Subjects taken: </span> {props.sub}
                        </Col>
                    </Row >
            </Container>
        </div>
    );
}