import React, { useState } from 'react';
// import Display from './Display.js';
import Header from '../components/Header';
import Merch from '../Layout/Merch.js';
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../components/Footer'

const MerchPage = () => {

    return (

        <Container fluid className='HomeBack'>
            <Header />
            <h1>Merch page loser</h1>
            <Merch />
            <Footer />
        </Container>
    );
};

export default MerchPage;
