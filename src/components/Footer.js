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
import {Apple,Facebook,Insta,Youtube}  from '../Lists/Links.js'


const Footer = () => {

  return (
    <>
      <Container fluid className="tinyTitle d-block d-sm-none" style={{ paddingBottom: '20px' }}>
        <Row>
          <Col xs='2' className="footerIcons" >
          <a className=' centerBox2' href={Facebook}>
              <i className="fab fa-facebook centerBox2" />
            </a>
          </Col>
          <Col xs='2' className="footerIcons" >
            <a className=' centerBox2' href={Apple}>
              <i className="fab fa-apple centerBox2" />
            </a>
          </Col>
          <Col xs='4' className=""
            style={{ margin: 'auto' }}>
            <img className="titleImage" />
          </Col>
          <Col xs='2' className="footerIcons" >
          <a className=' centerBox2' href={Insta}>
              <i className="fab fa-instagram centerBox2" />
            </a>
          </Col>
          <Col xs='2' className="footerIcons" >
          <a className=' centerBox2' href={Youtube}>
              <i className="fab fa-youtube centerBox2" />
            </a>
          </Col>
        </Row>
      </Container>

      <Container fluid className="tinyTitle d-none d-sm-block" style={{ paddingBottom: '20px' }}>
        <Row>
          <Col xs={{size:'1', offset:'2'}} className="footerIcons" >
            <a className=' centerBoxSm' href={Facebook}>
              <i className="fab fa-facebook " />
            </a>
          </Col>
          <Col xs='1' className="footerIcons" >
            <a className=' centerBoxSm' href={Apple}>
              <i className="fab fa-apple " />
            </a>
          </Col>
          <Col xs='4' className=""
            style={{ margin: 'auto' }}>
            <img className="titleImage" />
          </Col>
          <Col xs='1' className="footerIcons" >
            <a className=' centerBoxSm' href={Insta}>
              <i className="fab fa-instagram " />
            </a>
          </Col>
          <Col xs='1' className="footerIcons" >
            <a className=' centerBoxSm'
              href={Youtube}>
              <i className="fab fa-youtube " />
            </a>
          </Col>
          <Col xs='2'/>

        </Row>
      </Container>
    </>
  );
};

export default Footer;

