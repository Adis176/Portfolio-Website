import React from "react";
import Navbar from "./Navbar.js";
// import Footer from "./Footer.js";
import Particle from "./Particlecopy.js";
import { Container} from "react-bootstrap";
export default function Wrapper({children}){
    return(
        <Container fluid style={{}} className="wrapper-parent-main">
            <Navbar />
            <Particle />
            <Container style={{flex: '1'}} className="container-children-main">
                {children}
            </Container>
            {/* <Footer /> */}
        </Container>
    );
}