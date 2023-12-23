import React, { useState } from 'react';
// import Display from './Display.js';
import Header from '../components/Header';
import Contact from '../Layout/Contact.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../components/Footer'

const ContactPage = () => {

  return (

    <Container fluid className='HomeBack '>
        <Header />
        <h1 className='mediumTitle'>CONTACT US</h1>
    <Contact/>

    <Footer />
    </Container>
  );
};

export default ContactPage;
