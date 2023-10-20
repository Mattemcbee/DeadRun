// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import { CONTACT } from '../Lists/ContactList';
import ContactCard from '../Layout/ContactCard'

const Contact = () => {

    return (
        <Row>
            {CONTACT.map((meal) => {

                return (
                    <>
                        <Col className='' xs='12' style={{backgroundColor:'', width:''}} key={meal.id}>
                            <ContactCard meal={meal} />
                        </Col>
                    </>
                );
            })}

        </Row>
    );
};

export default Contact;