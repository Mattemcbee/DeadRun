import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const MerchCard = ({ meal }) => {
  const { id, image, price, name, disc } = meal;

  return (
    <>
      <Card className='hoverEff CardMove CardBackgroundMerch MerchCard cardBack'
        style={{ marginBottom: '20px', backgroundColor: 'transparent', border: 'none', width:'90%', margin:'auto'}} >
        <CardImg src={image} style={{ width: '100%', borderRadius: '25%' }}>
        </CardImg>
        <CardImgOverlay className='OverlayStart' style={{width:'100%'}}  >OUT OF STOCK</CardImgOverlay>
        <CardText className='merchName'>{name}</CardText>
        <CardText className='merchPrice' > {price}  </CardText>
      </Card>
    </>
  );
};

export default MerchCard;