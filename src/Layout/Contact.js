// import shirt from './shirt.jpg'
import { Container, Row, Col } from "reactstrap";
// import home from './homeBack.jpg'
import { CONTACT } from '../Lists/ContactList';
import ContactCard from '../Layout/ContactCard'
import Email from "../components/Email";

const Contact = () => {

    return (
        <>
            <Row>
                {CONTACT.map((meal) => {

                    return (

                        <>
                            <Col className='' xs='12' key={meal.id}>
                                <ContactCard meal={meal} />
                            </Col>
                        </>
                    );
                })}

            </Row>
            <Row >
                <Col style={{textAlign:'center', marginTop:'20px'}}>
                <Email />
                </Col>
            </Row>
        </>
    );
};

export default Contact;