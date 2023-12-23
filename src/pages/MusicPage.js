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
      <h1 className='mediumTitle'>MUSIC</h1>

      <Container fluid className=' ' >
        <Row>
          <Col xs='12' sm={{ size: 8, offset: 2 }}  >
                  <h1 className="mediumTitle">SPOTIFY</h1>
            <Spotify />
          </Col>
        </Row>
                <h1 className="mediumTitle">YOUTUBE</h1>

        <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 2 }} >
          <Youtube className='' embedId="kFC-FBZXjaI" />
          <br />
          <Youtube className='' embedId="aZr7Ave7v9U" />
        </Col>

      </Container>

      <Footer />
    </Container>
  );
};

export default MusicPage;