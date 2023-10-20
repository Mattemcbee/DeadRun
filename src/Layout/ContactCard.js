import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ContactCard = ({ meal }) => {
  const { id, image, price, name, disc, contact } = meal;

  return (
    <>
        <Col 
        // style={{textAlign:'center'}} 
        // className='LinkColor' 
        >
          <h1 style={{ fontSize:'4vw', whiteSpace: 'nowrap',backgroundColor:'', textAlignVertical:'bottom', color:'#f79094' }} >{name}: <a role='link'
            className='btn btn-link '
            href='mailto:heck@gmail.com'
            style={{ fontSize:'4vw', color:'#f79094', textAlignVertical:'bottom',backgroundColor:'' }}
          >{contact}</a></h1>
        </Col>
    </>
  );
};

export default ContactCard;