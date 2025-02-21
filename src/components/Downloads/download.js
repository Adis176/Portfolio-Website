// import Resume from "../../Assets/Pdfs/Aditya_Gandhi_Resume.pdf";
import React from "react";
import Wrapper from "../Wrapper.js";
// import Particle from "../Particle.tsx";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
// import Resume from "../../Assets/Images/Aditya_Resume.png";
import AdityaResume from "../../Assets/Images/Aditya_FrontEnd.jpg";
import "./download.css";
// import Wrapper from "../Wrapper.js";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// convert pdf to image - https://tools.pdf24.org/en/
export default function Download(){
    const Resume2 = require("../../Assets/Pdfs/Aditya_Resume_FrontEnd.pdf");

    // const pdfUrl = "../../Assets/Pdfs/Aditya_Gandhi_Resume.pdf";
    const onButtonClick = () => {
        const pdfUrl2 = Resume2;
        const link = document.createElement("a");
        link.href = pdfUrl2;
        link.download = 'Aditya_Gandhi_Resume.pdf'; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <Wrapper>
        <Container fluid className="download-container">
            <Row>
                <Col xs={12} style={{marginTop: '3rem'}}>
                    <Button size="lg" variant="primary" className="download-btn" style={{zIndex: '9999'}} onClick={onButtonClick}><AiOutlineArrowDown/> Download</Button>
                </Col>
            </Row>
            <Row xs={12} style={{justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Col xs={12} md={10} lg={9} style={{justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '2.5em'}}>
                    <img src={AdityaResume} alt="Aditya_Resume" className="download-resume-img"/>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    );
}