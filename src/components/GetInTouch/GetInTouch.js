import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
// import {motion} from "framer-motion";
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import {Container, Col, Row} from "react-bootstrap";
import Wrapper from "../Wrapper.js";
import "./GetInTouch.css";
// import ComputersCanvas from "../Home/Comp/Comp.js";

export default function GetInTouch(){
    const [form, setForm] = useState({});
    const formRef = useRef();

    const updateInput = (field, value) => {
      setForm({
        ...form,
        [field]: value,
      })
    }
    
    const handleSubmit = e => {
      e.preventDefault()
      emailjs
      .sendForm('service_e8e6vc8', 'template_8wbzdlk', formRef.current, {
        publicKey: 'kzHiw3u7Fto_A3n0-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      console.log("Form: ", form);
    }
    return(
      <Wrapper>
        <div className='contact-disp' style={{ }}>
          <div className="container-main">
            <div className="contact-container justify-content-center justify-content-lg-between" > 
              <Container style={{ }}>
                <Row>
                  <Col>
                      <Form style={{ }} ref={formRef}>
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
                          <Form.Control className="contact-input" type="text" name="from_name" placeholder="Enter Your full name" style={{color: 'white'}} onChange={(e) => updateInput('from_name', e.target.value)}/> 
                        </Form.Group> 
                        <Form.Group> 
                          <Form.Label>Email</Form.Label> 
                          <Form.Control className="contact-input"  type="email" name="from_email" placeholder="Enter your email address" onChange={(e) => updateInput('email', e.target.value)}/> 
                        </Form.Group> 
                        <Form.Group> 
                          <Form.Label>Message</Form.Label> 
                          <Form.Control className="contact-input"  as="textarea" name="message" placeholder="Enter your comments" style={{minHeight: '8em'}} onChange={(e) => updateInput('message', e.target.value)}/> 
                        </Form.Group> 
                        <Button variant="primary" type="submit" className="contact-button" onClick={handleSubmit} > 
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