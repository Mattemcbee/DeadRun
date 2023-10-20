import React from 'react';
import { Card, CardImg, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";


const ShowViewList = ({ meal }) => {
  const { id, venue, price, city, date, name, website2 } = meal;

  return (
    <>
      <div className="d-block d-sm-none">
      <Card className='hoverEff CardBackgroundMerch tableFont' style={{ marginBottom: '20px', backgroundColor: 'transparent', border: 'none' }}>
          <Row>
            <Col xs='3' style={{ backgroundColor: '' }}>
              <CardText className='m-0 MerchPreviewText'>{date}</CardText>
            </Col>
            <Col xs='9'>
              <CardText className='m-0 MerchPreviewText'>{venue}</CardText>
              <CardText className='m-0 MerchPreviewText'>{city}</CardText>
              <a href={website2} style={{ textDecoration: 'none', color: 'inherit' }} className='tableLink'>View Show</a>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="d-none d-sm-block">
        <Card className='hoverEff CardBackgroundMerch tableFont' style={{ marginBottom: '20px', backgroundColor: 'transparent', border: 'none' }}>
          <Row>
            <Col xs='2' style={{ backgroundColor: '' }}>
              <CardText className='m-0 MerchPreviewText'>{date}</CardText>
            </Col>
            <Col xs='4'>
              <CardText className='m-0 MerchPreviewText'>{venue}</CardText>
            </Col>
            <Col xs='4'>
              <CardText className='m-0 MerchPreviewText'>{city}</CardText>
            </Col>
            <Col xs='2'>
              <a href={website2} style={{ textDecoration: 'none', color: 'inherit' }} className='tableLink'>View Show</a>
            </Col>
          </Row>
        </Card>
      </div>      
    </>
  );

};

export default ShowViewList;
