// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import { SHOW } from '../Lists/ShowList';
import ShowCard from '../Layout/ShowCard'
import ShowViewList from '../Layout/ShowViewList'

const Show = () => {

  return (
    <Container>
      <Row>
        {SHOW.map((meal) => {

          return (
            <>
              <Col className=''  xs={{size:'10', offset:'1'}} sm='3' style={{ backgroundColor: '', width: '' }} key={meal.id}>
                <ShowCard meal={meal} />
              </Col>
            </>
          );
        })}

      </Row>
      <Row >
        <Container fluid style={{backgroundColor:''}} className="d-none d-sm-block">
          <Row>
            <Col xs='2'>
              <h1 className='tableFont'>DATE</h1>
            </Col>
            <Col xs='4'>
              <h1 className='tableFont'>VENUE</h1>
            </Col>        
            <Col xs='4'>
              <h1 className='tableFont'>CITY</h1>
            </Col>
            <Col xs='2'>
              <h1 className='tableFont'>LINK</h1>
            </Col>
          </Row>
        </Container>
        <Container fluid className="d-block d-sm-none">
          <Row>
            <Col xs='3'>
              <h1 className='tableFont'>DATE</h1>
            </Col>
            <Col xs='9'>
              <h1 className='tableFont'>SHOW</h1>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ backgroundColor: '' }}>
        {SHOW.map((meal, index) => {
          return (
            <>
              <Col className='' xs='12' style={{ borderTop: '1px solid #fbc7c9' }} key={meal.id}>
                <ShowViewList meal={meal} />
              </Col>
            </>
          );
        })}
      </Row>

    </Container>
  );
};

export default Show;