// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import { MUSIC } from '../Lists/MusicList';
import MusicCard from '../Layout/MusicCard'
// import ArtistSongs from '../components/ArtistSongs.js'
const Music = () => {

  return (
    <Row>
      {MUSIC.map((meal) => {

        return (
          <>
            <Col className='' xs='4' style={{ backgroundColor: '', width: '' }} key={meal.id}>
              <MusicCard meal={meal} />
            </Col>
          </>
        );
      })}

    </Row>
  );
};

export default Music;