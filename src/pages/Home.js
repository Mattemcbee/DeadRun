import Header from '../components/Header.js'
import { Container, Col, Row, Button } from "reactstrap";
import Footer from '../components/Footer.js'
import Run from '../images/run.jpg'
import Merch from './MerchPage.js'
import '../App.css';


const HomePage = () => {
    return (
      <Container fluid className='HomeBack'>
      <h1 className="tinyTitle ">this is a website for</h1>   
      <h1 className="TitleBig ">DEAD RUN</h1>
        <a className='linkColor' href="https://www.google.com/">
          <h1 className="LinkColor ">SHOP</h1>
        </a>
        <a className='linkColor' href="https://www.google.com/">
          <h1 className="LinkColor ">MUSIC</h1>
        </a>
        <a className='linkColor' href="/Merch">
          <h1 className="LinkColor ">MERCH</h1>
        </a>
        <a className='linkColor' href="https://www.google.com/">
          <h1 className="LinkColor ">CONTACT</h1>
        </a>
        <Footer />
      </Container>
    )
}
export default HomePage;


