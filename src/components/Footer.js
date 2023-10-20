import { useState } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// import Email from "../Email";
// import Logo from '../images/logoName.jpg'
import React from 'react';
import Run from '../images/run.jpg'


const Footer = () => {

  return (
    <Container fluid className="tinyTitle" style={{ paddingBottom: '20px', height:'100%' }}>
      <Row>
        <Col xs='1' style={{verticalAlign:'center' , textAlign:'center', width:'100%', padding:'auto' }}>
          <a className=' centerBox2' style={{ color: 'inherit' }} href='https://disposedkings.netlify.app/'>
            <i className="fab fa-facebook centerBox2" />
          </a>
        </Col>
        <Col xs='1'>
          <a className=' centerBox2' style={{ color: 'inherit' }} href='https://disposedkings.netlify.app/'>
            <i className="fab fa-apple centerBox2" />
          </a>
        </Col>
        <Col xs='6' className=""
          style={{ margin: 'auto' }}
        >
          <img className="titleImage" />
        </Col>
        <Col xs='1'>
          <a className=' centerBox2' style={{ color: 'inherit' }} href='https://disposedkings.netlify.app/'>
            <i className="fab fa-instagram centerBox2" />
          </a>
        </Col>
        <Col xs='1'>
          <a className=' centerBox2' style={{ color: 'inherit' }} href='https://disposedkings.netlify.app/'>
            <i className="fab fa-youtube centerBox2" />
          </a>
        </Col>



      </Row>
    </Container>
  );
};

export default Footer;