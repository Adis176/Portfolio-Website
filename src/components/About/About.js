import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "../Wrapper.js";
// import Particle from "../Particle.tsx";
// import Techstack from "./Techstack.js";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/sukrut_square.jpg";
import Tilt from "react-parallax-tilt";
import Publication from "./Publication.js";
import { publicationList } from "../../data/publicationList.js";
import {motion} from 'framer-motion';
// import Info from "./Info.js";
// import Uni from "./Uni.js";
import Edu from "./Edu.js";
import gt2 from "../../Assets/Images/Unis/gt2.png";
// import gt3 from "../../Assets/Images/Unis/gt3.png";
import gt4 from "../../Assets/Images/Unis/gt4.png";
// import pdeu1 from "../../Assets/Images/Unis/pdeu1.png";
import pdeu2 from "../../Assets/Images/Unis/pdeu2.png";
// import pdeu3 from "../../Assets/Images/Unis/pdeu3.png";
import pdeu4 from "../../Assets/Images/Unis/pdeu4.png";
// import LeetcodeStreak from "../../Assets/Images/Leetcode/lc_2023.jpg";
// import Badge from "./Badge.js";
// import Knight from "../../Assets/Images/Leetcode/lc-knight2.png";
// import Tdays from "../../Assets/Images/Leetcode/3002.png";
import Aditya from "../../Assets/Images/Aditya.png";
import "./About.css";

function About() {
  const [pubList, setPubList] = useState(publicationList);
  // const pubsList = publicationList;
  useEffect(() => {
    setPubList(publicationList);
    console.log(pubList);
  }, []);
  return (
    <Wrapper>
      <Container fluid className="about-section" style={{  display: 'flex', flexDirection: 'column'}}>
        <Row>
          <Container className="about-cont">
            <Row style={{ padding: "10px" }}>
              <Col
                md={7}
                style={{
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >  
              <Aboutcard />
              </Col>
              <Col
                md={5}
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
        </Row>
        <Row>
          <h2 className="headings">Publications.</h2>
          <Container >
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className='about-pub-container' style={{display: 'flex', justifyContent: 'space-around', border: '0px '}}>
              {
                pubList.map((ele, index) => (
             
                  <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={  {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { delay: index*0.6, ease: "easeInOut" } },
                  } } key={index} >
                    <Publication title={ele.title} desc={ele.desc} src={ele.src} link={ele.link}/>
                  </motion.div>
                ))
              }
            </Row>
          </Container>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <h2 className="headings">Education.</h2>
        <Row xs={2} sm={3} md={4} lg={5} className='about-pub-container' >
          <Col xs={11} sm={10} md={9} lg={9} xl={5}>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={  {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.5, ease: "easeInOut" } },
                  } }  >
            <Edu name={'Georgia Institute of Technology'} imgsrc={gt4} degree={'Masters:'} specialization={'Computer Science'} imgbg={gt2} cgpa={'4.0 / 4.0'} location={'Atlanta, Georgia, USA'} sub={'Database System Concepts & Design, Network Security'}/>
            </motion.div>
          </Col>
          <Col xs={11} sm={10} md={9} lg={9} xl={5}>
          <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={  {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.5, ease: "easeInOut" } },
                  } }  >
            <Edu name={'Pandit Deendayal Energy University'} imgsrc={pdeu2} degree={'Bachelors:'} specialization={'Computer Engineering'} imgbg={pdeu4} cgpa={'9.86 / 10.0'} location={'Gandhinagar, Gujarat, India'} sub={'AI, ML, Design & Analysis of Algorithms, Advanced Web-dev, Cloud Computing'}/>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

export default About;
