import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiExternalLink,FiGithub } from "react-icons/fi";
import "./ProjectCards.css";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="proImg">
        <Card.Img variant="top" src={props.src} alt="card-img" style={{opacity: '1 !important', borderRadius: '10px'}} className="proj-card-img"/>
      </div>
      <Card.Body>
        <Card.Title style={{color: '#5f7fe8', fontWeight: '600'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.desc}
        </Card.Text>
        <Card.Text style={{ textAlign: "center", color: '#7390f2'}}>{props.tech}</Card.Text>
       {props.demo && <Button
          style={{ margin: "0.5rem ", paddingLeft: '1.5em', paddingRight: '1.5em'}}
          variant="primary"
          href={props.demo}
          target="_blank"
        >
          <FiExternalLink /> &nbsp; View Project
        </Button>}
        {props.link && <Button
          style={{ margin: "0.5rem", marginBottom: '0em'}}
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <FiGithub /> &nbsp; View on GitHub
        </Button>}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
