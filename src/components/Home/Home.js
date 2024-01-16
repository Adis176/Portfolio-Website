import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ComputersCanvas from "./Comp/Comp.js";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle.tsx";
// import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack.js";
import Tools from "./Tools.js";
import Wrapper from "../Wrapper.js";
// import Cube from "../Earth/Cube.js"
// import Contact from "./Contact.js";
import Timeline from "./Timeline.js";
import { motion } from "framer-motion";
import E1 from "../GetInTouch/Earth/E1.js";
import Heading from "../Extra/Heading/Heading.js";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// function FadeInWhenVisible({ children }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//       variants={{
//         visible: { opacity: 1, scale: 1 },
//         hidden: { opacity: 0, scale: 0 }
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }


function Home() {
  const variants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 4, ease: "easeInOut" } },
  };
  const [width, setWidth] =  useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Wrapper>
    <section>
      <Container fluid className="home-section" id="home" style={{paddingLeft: '0px !important',}}>
        
        <Container className="home-content" style={{}} >
          <Row>
            <Col xs={11} lg={5} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADITYA GANDHI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col xs={11}lg={4} style={{ paddingBottom: 20, display: 'flex', minHeight: '100%'}}>
              <motion.div className='xs-d-none d-block' variants={variants} initial="hidden" animate="visible" style={{position: 'relative', width: '100%', height: '100%', }}>
                {
                  width>=500 &&
                  <E1 />
                }
              </motion.div>
            </Col>
            
          </Row>
        </Container>
          
        {/* <Home2 /> */}

        <Container style={{marginTop: '5em'}}>
          <Row>
            <Heading heading={'Work - Experience'} />
          </Row>
          <Timeline />
        </Container>

        
      </Container>
      
      <Container style={{margin: '5em 0em'}}>
      <Heading heading={'Skill - Set'} />
        <Techstack />
      </Container>  

      <Container style={{margin: '5em 0em'}}>
      <Heading heading={'Tools I Use'} />
        <Tools />
      </Container>
      <Container>
      <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Adis176"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/sukrutrahane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-gandhi-585658191"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_adii176"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
    
    </Wrapper>
  );
}

export default Home;
