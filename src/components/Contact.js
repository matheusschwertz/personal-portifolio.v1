import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Formulário Enviado'); // Verifica se a função está sendo chamada
    setButtonText("Enviando...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Enviar");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ sucesso: true, mensagem: 'Mensagem enviada com sucesso' });
      } else {
        setStatus({ sucesso: false, mensagem: 'Algo deu errado, por favor tente novamente mais tarde.' });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus({ sucesso: false, mensagem: 'Erro ao enviar o formulário, por favor tente novamente mais tarde.' });
    }
  };

  return (
    <section className="contact" id="connect" style={{ backgroundImage: `url('./assets/img/star-wars-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Entre em Contato" />
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`contact-form ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <h2 style={{ color: '#fff', fontFamily: 'Roboto Mono, monospace', fontSize: '45px', fontWeight: '700', marginBottom: '20px' }}>Fale Comigo</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '10px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #fff', color: '#fff' }} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '10px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #fff', color: '#fff' }} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Endereço de Email" onChange={(e) => onFormUpdate('email', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '10px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #fff', color: '#fff' }} />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '10px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #fff', color: '#fff' }} />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '5px', marginBottom: '10px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #fff', color: '#fff' }}></textarea>
                        <button type="submit" style={{ background: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', color: '#000', cursor: 'pointer' }}>{buttonText}</button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
