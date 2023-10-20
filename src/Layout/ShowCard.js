import React from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const ShowCard = ({ meal }) => {
  const { id, image, price, name, website2 } = meal;

  return (
    <Link to={website2} className='NoDecorationCardText cardBack'>
      <Card className='hoverEff CardBackgroundMerch MerchCard' style={{ marginBottom: '20px', backgroundColor: 'transparent', border: 'none' }}>
        <CardImg src={image} style={{ borderRadius: '5%' }} />
       
      </Card>
    </Link>
  );
};

export default ShowCard;
