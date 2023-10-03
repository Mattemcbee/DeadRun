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
    <Container fluid className="tinyTitle" style={{ paddingBottom: '20px' }}>
      <Row>
        <Col xs='4' className=""
          style={{ margin: 'auto' }}
        >
       <img className="titleImage"/>   

        </Col>
        <Col xs='4' style={{ margin: 'auto'}}>
          <Container fluid className="" style={{ margin: 'auto', verticalAlign: 'center' }}>
            <Row style={{ verticalAlign: 'center' }}>
              <Col xs='3'>
                <a className='' style={{ color: 'red' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-instagram fa-2x' /></a>
              </Col>
              <Col xs='3'>
                <a className='' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-facebook fa-2x' /></a>
              </Col>
              <Col xs='3'>
                <a className='' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-youtube fa-2x' /></a>
              </Col>
              <Col xs='3'>
                <a className='' style={{ color: 'white' }}
                  href='https://disposedkings.netlify.app/'>
                  <i className='fa fa-spotify fa-2x' /></a>
              </Col>
            </Row>
          </Container>
        </Col>


      </Row>
    </Container>
  );
};

export default Footer;