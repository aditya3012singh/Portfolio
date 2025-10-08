import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CollegeEventSaaS"
              description="A multi-college event platform with student and club roles, supporting club registration and cross-college event creation. Features secure backend with Express.js, Prisma, PostgreSQL, JWT authentication, Next.js frontend with SSR, real-time notifications via Socket.IO, Redis caching, AWS S3 storage, and integrated payment system for event registration."
              ghLink="https://github.com/aditya3012singh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NoteNexus"
              description="Full-stack academic platform enabling students to share and access notes, study tips, and events with real-time updates using Redis caching and Socket.IO. Built with Express.js, Prisma ORM, and PostgreSQL featuring JWT-based authentication and role-based access control. Integrated AWS S3 for efficient file storage reducing load times by 35%."
              ghLink="https://github.com/aditya3012singh"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CPByte Student Portal"
              description="Full-stack student portal for 100+ club members to manage attendance, track progress, and access learning resources. Integrated custom LeetCode GraphQL tracker for 30+ students, improving weekly DSA practice by 40%. Features JWT-based authentication, reusable components, and clean RESTful APIs."
              ghLink="https://github.com/aditya3012singh"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
