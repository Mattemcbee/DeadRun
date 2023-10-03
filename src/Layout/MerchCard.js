import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const MerchCard = ({ meal }) => {
    const { id, image, price, name, disc } = meal;

    return (
        <Link className='NoDecorationCardText' to={"https://google.com"}>

            <Card className='hoverEff CardBackgroundMerch MerchCard'
                style={{ marginBottom: '20px',  backgroundColor: 'transparent ' }}
            >

                <CardBody className=' p-0  m-0' >
                    {/* <Row>
                        <Col xs='12'> */}
                            <Row className='' style={{ height: '100%' }}>
                            <img src={image}/>
                            </Row>
                        {/* </Col>
                    </Row> */}
                </CardBody>
                <Row>
                    <Col xs='8'>
                        <CardText className='m-0 MerchPreviewText'>{name}</CardText>
                    </Col>
                    <Col xs='4'>
                        <CardText className='m-0 MerchPreviewText' > {price}  </CardText>
                    </Col>
                </Row>
            </Card>
        </Link>
    );
};

export default MerchCard;