import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

import 'animate.css';

export const Footer = ({ email, instagram }) => {
  return (
    <footer className="footer" style={{ backgroundColor: 'black', color: '#fff', padding: '30px 0', borderTop: '1px solid #fff' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={navIcon1} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Ícone 1" /></a>
              <a href={navIcon2} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Ícone 2" /></a>
            </div>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p>Instagram: <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">@{instagram}</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  email: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired
}
