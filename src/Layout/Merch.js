// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import { MERCH } from '../Lists/MerchList';
import MerchCard from '../Layout/MerchCard'

const Merch = () => {

    return (
        <Row>
            {MERCH.map((meal) => {

                return (
                    <>
                        <Col className='' xs='12' sm='4' style={{backgroundColor:'', width:''}} key={meal.id}>
                            <MerchCard meal={meal} />
                        </Col>
                    </>
                );
            })}

        </Row>
    );
};

export default Merch;