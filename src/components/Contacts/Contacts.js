import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";

class Contacts extends Component {

    render() {
        return (
            <div className="section section-dark-bck">
                <Container className="tim-container">
                    <div>
                        <h1>
                            Kontakt
                        </h1><br/><br/>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="4" sm="6" className="section-centered">
                                    <Row className="justify-content-md-center"><img className="img-cc img-no-padding img-responsive" alt="Aleš Příhoda"
                                         src={require("assets/img/contacts/ales.jpg")}/></Row>
                                    <Row className="justify-content-md-center"><h3>Aleš Příhoda</h3><br></br></Row>
                                    <Row className="justify-content-md-center">prihoda@engineersprague.cz</Row>
                                </Col>
                                <Col md="4" sm="6" className="section-centered">
                                    <Row className="justify-content-md-center"><img className="img-cc img-no-padding img-responsive" alt="Tomáš Hlaváč"
                                     src={require("assets/img/contacts/tomas.jpg")}/></Row>
                                    <Row className="justify-content-md-center"><h3>Tomáš Hlaváč</h3></Row>
                                    <Row className="justify-content-md-center">hlavac@engineersprague.cz</Row>
                                </Col>
                                <Col md="4" sm="6" className="section-centered">
                                    <Row className="justify-content-md-center"><img className="img-cc img-no-padding img-responsive" alt="Richard Jarošík"
                                     src={require("assets/img/contacts/richie.jpg")}/></Row>
                                    <Row className="justify-content-md-center"><h3>Richard Jarošík</h3></Row>
                                    <Row className="justify-content-md-center">richard.jarosik6520@seznam.cz</Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contacts;
