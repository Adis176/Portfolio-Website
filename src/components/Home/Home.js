import React  from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ComputersCanvas from "./Comp/Comp.js";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle.tsx";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack.js";
import Wrapper from "../Wrapper.js";
// import Cube from "../Earth/Cube.js"
// import Contact from "./Contact.js";
import Timeline from "./Timeline.js";
import { motion } from "framer-motion";
import E1 from "../GetInTouch/Earth/E1.js";
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
              <motion.div className='d-block' variants={variants} initial="hidden" animate="visible" style={{position: 'relative', width: '100%', height: '100%', }}>
                <E1 />
              </motion.div>
            </Col>
            
          </Row>
        </Container>
        <Container style={{margin: '5em 0em'}}>
          <h2 className="headings" >Skill-Set</h2>
          <Techstack />
        </Container>

        <Container style={{marginTop: '5em'}}>
          <h2 className="headings" >Work - Experience</h2>
          <Timeline />
        </Container>

        
      </Container>
      <Home2 />
      
    </section>
    
    </Wrapper>
  );
}

export default Home;
