import React, { useState } from 'react';
// import Display from './Display.js';
import Header from '../components/Header';
import Show from '../Layout/Show.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../components/Footer'

const ShowPage = () => {

  return (

    <Container fluid className='HomeBack'>
        <Header />
        <h1 className='mediumTitle'>UPCOMING SHOWS</h1>
    <Show/>

    <Footer />
    </Container>
  );
};

export default ShowPage;
