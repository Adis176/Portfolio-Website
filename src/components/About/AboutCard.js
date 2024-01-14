import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
   
      <Card.Body>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: 'left'}}>
                  Know Who <strong className="purple">I'm</strong>
                </h1>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Gandhi </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I am a First Year student pursuing his Masters
            in Computer Science at <span className="purple">Georgia Institute of Technology.</span>
            <br />
            Additionally, I am enthusiastic about <span className="purple">Web-development, System Design, Algorithms & Problem-Solving.</span>
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Leetcoding
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
