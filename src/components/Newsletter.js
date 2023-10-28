import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import 'animate.css';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '30px', borderRadius: '10px', marginTop: '50px' }}>
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>Inscreva-se em nossa Newsletter<br />e nunca perca as últimas atualizações</h3>
            {status === 'sending' && <Alert variant="light">Enviando...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de Email" style={{ width: '70%', padding: '10px', borderRadius: '5px', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid #fff', color: '#fff' }} />
                <button type="submit" style={{ marginLeft: '10px', padding: '10px 20px', background: '#000', border: 'none', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}>Enviar</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
