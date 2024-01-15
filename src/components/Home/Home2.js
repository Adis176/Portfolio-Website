import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Aditya from "../../Assets/Images/Aditya.png"
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Currently pursuing my Masters in Computer Science  
              <i>
                <b className="purple"> &nbsp; @Georgia-Tech</b>
              </i>
              <br />
              <br />
              Proficient in<i>
                <b className="purple">&nbsp; ReactJS, NextJS and Javascript &nbsp; </b>
              </i>
              and employ these technologies to build products.
              <br />
              <br />
              I do Leetcode for fun
            </p>
          </Col>
          <Col
                md={4}
                style={{ 
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", 
                  overflow: "hidden", 
                  paddingTop: "30px", 
                  paddingBottom: "30px" 
                }}
                className="about-img circular-image"
              >
                <Tilt>
                  <img src={Aditya} alt="about" className="img-fluid rounded-circle" />
                </Tilt>
              </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
