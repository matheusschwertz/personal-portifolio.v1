import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

import 'animate.css';

export const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'black', color: '#fff', padding: '30px 0', borderTop: '1px solid #fff' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>

            </div>
            <p>Email: matheusschwertz1@outlook.com.</p>
            <p>Instagram: @schwertzmatheus</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
