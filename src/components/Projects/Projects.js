import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import flashchat from "../../Assets/Projects/flashchat.jpg";
import todolist from "../../Assets/Projects/todolist.jpg";
import pseiwatcher from "../../Assets/Projects/pseiwatcher.jpg";
import todolistw from "../../Assets/Projects/todolist.PNG";
import blogpost from "../../Assets/Projects/blogpost.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pseiwatcher}
              isBlog={false}
              title="PSEI Watcher"
              description="(Work in progress) Philippine Stack Exchange Index Tracker app that uses Google Firebase and Google_sign_in flutter package for account authentication and public API for PSEI using Phisix"
              link="https://github.com/kdgbduyu28/pseiwatcher"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flashchat}
              isBlog={false}
              title="Flash Chat"
              description="Simple chat app with Google FireBase authentication for login/registration and Google Firestore for realtime access of chat messages/database"
              link="https://github.com/kdgbduyu28/Flash-Chat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todo List"
              description="A simple item checklist app"
              link="https://github.com/kdgbduyu28/TodoList"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogpost}
              isBlog={false}
              title="Blog Site"
              description="Blog Site that showcases the use of Express JS and Embedded JS templating"
              link="https://github.com/kdgbduyu28/BlogSite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolistw}
              isBlog={false}
              title="TodoList"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/kdgbduyu28/todolist-v2"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
