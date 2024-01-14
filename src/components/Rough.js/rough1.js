import React from "react";
import { Container } from "react-bootstrap";
// import Particle from "../Particle.tsx";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";

// import Canva from "../../Assets/Images/Tools/canva.png";
// import Figma from "../../Assets/Images/Tools/figma.png"

import 'bootstrap/dist/css/bootstrap.css'; 
// import Carousel from 'react-bootstrap/Carousel'; 

// import Tool from "../Tools/Tool.js";

// import InfiniteLooper from "../Tools/InfiniteLooper";


// import Sphere from "../Rough.js/Sphere.js"
import ComputersCanvas from "../Home/Comp/Comp.js";

import "./rough1.css";


export default function Rough1() {
  return (
    <Container fluid className="rough-section">
      <ComputersCanvas />
    </Container>
  );
}


