import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ linkedinLink }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 350);
  const [index, setIndex] = useState(1);
  const toRotate = ["graduando em Ciência da Computação"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center"> {/* Corrigido typo no nome da classe */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible && "animate__animated animate__fadeIn starWars"}> {/* Utilizando short-circuit evaluation */}
                  <span className="tagline">Bem vindo ao meu Portfólio</span>
                  <h1>{`Olá! Eu sou Matheus`} <span className="text-rotating-animation" data-period="1000" data-rotate='[ "" ]'><span className="wrap">{text}</span></span></h1> {/* Melhorando nome da classe */}
                  <p style={{background: '#000', padding: '10px', borderRadius: '5px'}}>
                    Sou um entusiasta de tecnologia e estudo no cenário de DevOps, apaixonado por criar experiências inovadoras no mundo da automação.
                  </p>               
                  <button onClick={() => window.open(linkedinLink, '_blank')}>Vamos Conectar <ArrowRightCircle size={25} /></button> {/* Usando window.open */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible && "animate__animated animate__zoomIn"}> {/* Utilizando short-circuit evaluation */}
                  <img src={headerImg} alt="Imagem do Cabeçalho"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

Banner.propTypes = {
  linkedinLink: PropTypes.string.isRequired // Definindo propTypes para linkedinLink
}
