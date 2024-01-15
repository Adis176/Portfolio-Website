import React  from "react";
// import {motion} from "framer-motion";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import {Container, Col, Row} from "react-bootstrap";
import Wrapper from "../Wrapper.js";
import "./GetInTouch.css";
// import ComputersCanvas from "../Home/Comp/Comp.js";

export default function GetInTouch(){
    return(
      <Wrapper>
        <div className='contact-disp' style={{ }}>
          <div className="container-main">
            <div className="contact-container justify-content-center justify-content-lg-between" > 
              <Container style={{ }}>
                <Row>
                  <Col>
                      <Form style={{ }}>
                        <Container>
                          <Row style={{display: 'flex'}}>
                            <Col xs={5}>
                              {/* <h6 className="">Get in Touch</h6>  */}
                              <div className="contact-main-title headings">Contact</div>
                            </Col>
                            {/* <Col xs={6} className='d-none d-lg-block' variants={variants} initial="hidden" animate="visible" style={{ position: 'relative',  marginLeft: '6em',  display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center', height: '30%'}}>
                              <ComputersCanvas />
                            </Col>
                            */}
                          </Row>
                        </Container>
                        
                        <Form.Group className="" size='sm'> 
                          <Form.Label>Name</Form.Label> 
                          <Form.Control className="contact-input" type="text" placeholder="Enter Your full name" style={{color: 'white'}}/> 
                        </Form.Group> 
                        <Form.Group> 
                          <Form.Label>Email</Form.Label> 
                          <Form.Control className="contact-input"  type="email" placeholder="Enter your email address" /> 
                        </Form.Group> 
                        <Form.Group> 
                          <Form.Label>Message</Form.Label> 
                          <Form.Control className="contact-input"  as="textarea" placeholder="Enter your comments" style={{minHeight: '8em'}}/> 
                        </Form.Group> 
                        <Button variant="primary" type="submit" className="contact-button"> 
                          Send
                        </Button> 
                      </Form> 
                  </Col>
                </Row>
              </Container>
            </div> 
          </div>
        </div>
      </Wrapper> 
    );
}