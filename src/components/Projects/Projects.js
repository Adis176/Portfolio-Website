import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Wrapper from "../Wrapper.js";
import { projectsList } from "../../data/projectsList.js";
// import Particle from "../Particle.tsx";
// import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
// import { SiRedux } from "react-icons/si";

function Projects() {
	return (
		<Wrapper>
		<Container fluid className="project-section">
			{/* <Particle /> */}
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row xs={1} sm={2} md={2} lg={3} style={{ justifyContent: "center", paddingBottom: "10px" }}>
				{
                    projectsList.map((ele, index) => (
                    <Col style={{marginBottom: '2em'}}>
                    	<ProjectCard key={index} title={ele.title} desc={ele.desc} src={ele.src} link={ele.link} tech={ele.tech} demo={ele.demo}/>
                    </Col>
                ))
              }
				</Row>
			</Container>
		</Container>
		</Wrapper>
	);
}

export default Projects;
