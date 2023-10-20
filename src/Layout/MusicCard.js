import { Card, CardBody, CardImg, CardText, CardImgOverlay, CardTitle, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const MusicCard = ({ meal }) => {
    const { id, image, price, name, disc, album } = meal;

    return (
      <>
        <Link className='NoDecorationCardText cardBack' to={"https://google.com"}>

            <Card className='hoverEff cardBack'
                style={{ marginBottom: '20px', backgroundColor:'transparent', border:'none' }} >
                <CardImg src={image} style={{width:'10%'}}>
                </CardImg>
                        <CardText className='m-0 MusicPreviewText'>{name}</CardText>

                        <CardText className='m-0 MusicPreviewText' > {album}  </CardText>
            </Card>
        </Link>
        </>
    );
};

export default MusicCard;