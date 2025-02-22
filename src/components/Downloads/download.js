import React, {lazy, Suspense} from "react";
import Wrapper from "../Wrapper.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
// import Resume from "../../Assets/Images/Aditya_Resume.png";

import "./download.css";
const AdityaResume = lazy(() => import("./resume.js"));
export default function Download(){
    const Fallback = () => {
        return (
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '100%', height: '6em', borderRadius: '1em', border: '0.4px solid rgba(66, 66, 66, 0.8)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'rgba(200, 200, 200, 0.6)'}}>
                <p style={{margin: 'auto'}}>Resume is Missing</p> 
            </div>
        );
    }
    const Resume2 = require("../../Assets/Pdfs/Aditya_Resume_FrontEnd.pdf");
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
                    <Suspense fallback={<Fallback />}>
                        <AdityaResume />
                    </Suspense>
                </Col>
            </Row>
        </Container>
        </Wrapper>
    );
}