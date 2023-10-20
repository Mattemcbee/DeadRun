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
        <Col xs='' className=""
          style={{ margin: 'auto' }}
        >
       <img className="titleImage"/>   

        </Col>
        


      </Row>
    </Container>
  );
};

export default Footer;