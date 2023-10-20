import React, { useState } from 'react';
// import Display from './Display.js';
import Header from '../components/Header';
import Music from '../Layout/Music.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../components/Footer'
import Youtube from '../components/Youtube.js'
import Spotify from '../components/Spotify.js'

const MusicPage = () => {

  return (

    <Container fluid className='HomeBack'>
      <Header />
      <h1 className='mediumTitle'>Music page loser</h1>

      <Container fluid className=' ' >
      <Row>
        <Col xs={{ size: 12 }} sm={{ size: 8, offset: 1 }}  >
          <Spotify />
        </Col>
        <Col xs={{ size: 12 }} sm={{ size: 2 }}  >
        <a href='google.com' className='mediumTitle'>spotify</a>
        <br/>
        <a href='google.com' className='mediumTitle'>apple</a>        
        </Col>
        </Row>
        <Col xs={{ size: 12, offset: 0}} sm={{ size: 8, offset: 2}} >

          <Youtube className='' embedId="kFC-FBZXjaI" />
        </Col>

      </Container>

      <Footer />
    </Container>
  );
};

export default MusicPage;
