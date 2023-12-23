import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ContactCard = ({ meal }) => {
  const { id, image, price, name, disc, contact } = meal;

  return (
    <>
        <Col style={{textAlign:'center'}}>
          <h1 className='contactCardFont' >{name}: <a role='link'
            className='btn btn-link contactCardFont'
            href='mailto:heck@gmail.com'
          >{contact}</a></h1>
        </Col>
    </>
  );
};

export default ContactCard;