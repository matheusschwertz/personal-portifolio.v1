import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Docker",
      description: "Do básico ao avançado",
      imgUrl: projImg1,
    },
    {
      title: "Shell Script",
      description: "Para DevOps",
      imgUrl: projImg2,
    },
    {
      title: "DevOps",
      description: "Introdução",
      imgUrl: projImg3,
    },
    {
      title: "Fundamentos de Redes",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects" style={{ backgroundImage: `url(${colorSharp2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ color: '#fff', fontFamily: 'Roboto Mono, monospace', fontSize: '45px', fontWeight: '700', marginBottom: '20px' }}>Certificados</h2>
                  <p style={{ color: '#fff', fontSize: '18px', letterSpacing: '0.8px', lineHeight: '1.5em', marginBottom: '40px' }}>Alguns dos meus certificados!</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}