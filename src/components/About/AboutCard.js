import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Timothy Maersk M. Borja </span>
            
            from <span className="purple"> Cavite City, Cavite, Philippines</span>
            <br />I am an IT Helpdesk II (User Access Administrator) seeking a career shift to a full time Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring security vulnerabilities of Game Consoles (Switch, Playstation 4, Xbox 360)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling / Exploring different kinds of foods
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
          “The Only Way to Do Great Work is To Love What You Do”{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs, Steve Jobs: His Own Words and Wisdom</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
