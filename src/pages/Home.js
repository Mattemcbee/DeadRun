import Header from '../components/Header.js'
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../components/Footer.js'
import Run from '../images/run.jpg'
import Merch from './MerchPage.js'
import '../App.css';
import { Link } from "react-router-dom";



const HomePage = () => {
    return (
      <Container fluid className='HomeBack ' >
      <h1 className="d-none d-sm-block tinyTitleXs">(this is a website for)</h1>   
      <h1 className="d-block d-sm-none tinyTitle">(this is a website for)</h1>   

      <h1 className="d-none d-sm-block TitleBig">DEAD RUN</h1>   
      <h1 className="d-block d-sm-none TitleBigXs">DEAD RUN</h1>   
      <Container className="d-block d-sm-none">
        <Link className='' to="/Music">
          <h1 className="LinkColorXs ">MUSIC</h1>
        </Link>
        <Link className='' to="/Merch">
          <h1 className="LinkColorXs ">MERCH</h1>
        </Link>
        <Link className='' to="/Show">
          <h1 className="LinkColorXs ">SHOWS</h1>
        </Link>
         <Link className='' to="/Contact">
          <h1 className="LinkColorXs ">CONTACT</h1>
        </Link>
        </Container>
      <Container className="d-none d-sm-block">
        <Link className='LinkColor' to="/Music">
          <h1 className="LinkColor ">MUSIC</h1>
        </Link>
        <Link className='LinkColor' to="/Merch">
          <h1 className="LinkColor ">MERCH</h1>
        </Link>
        <Link className='LinkColor' to="/Show">
          <h1 className="LinkColor ">SHOWS</h1>
        </Link>
         <Link className='LinkColor' to="/Contact">
          <h1 className="LinkColor ">CONTACT</h1>
        </Link>
        </Container>

        <Footer />
      </Container>
    )
}
export default HomePage;
