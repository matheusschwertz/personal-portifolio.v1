import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp2.jpeg";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skillsData = [
    { image: meter1, title: '' },
    { image: meter2, title: '' },
    { image: meter3, title: '' },
    { image: meter4, title: '' },
    { image: meter5, title: '' }
  ];

  return (
    <section className="skill d-flex justify-content-center align-items-center" id="skills" style={{ backgroundImage: `url(${colorSharp})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ color: '#fff', fontFamily: 'Roboto Mono, monospace', fontSize: '45px', fontWeight: '700', marginBottom: '20px' }}>Skills</h2>
              <p style={{ color: '#fff', fontSize: '15px', letterSpacing: '0.8px', lineHeight: '1.5em', marginBottom: '40px' }}>
                "Tenho uma paixão genuína por DevOps, pois acredito no poder da colaboração entre desenvolvimento e operações. Estou constantemente em busca de maneiras de automatizar e integrar processos, visando aprimorar o ciclo de vida do desenvolvimento e garantir a entrega de produtos de alta qualidade."
              </p>
              <Carousel responsive={responsive} infinite className="owl-carousel owl-theme skill-slider">
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.image} alt={skill.title} style={{ maxWidth: '40%', height: 'auto' }} />
                    <h5 style={{ color: '#fff' }}>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  // Se houver props, adicione PropTypes aqui
}
