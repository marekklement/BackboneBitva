import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";

class Contacts extends Component {

    render() {
        return (
            <div className="section section-dark">
                <Container className="tim-container">
                    <div>
                        <h1>
                            Kontakt
                        </h1><br/><br/>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="4" sm="6">
                                    <Row className="justify-content-md-center">Aleš Příhoda</Row>
                                    <Row className="justify-content-md-center">prihoda@engineersprague.cz</Row>
                                </Col>
                                <Col md="4" sm="6">
                                    <Row className="justify-content-md-center">Tomáš Hlaváč</Row>
                                    <Row className="justify-content-md-center">hlavac@engineersprague.cz</Row>
                                </Col>
                                <Col md="4" sm="6">
                                    <Row className="justify-content-md-center">Richard Jarošík</Row>
                                    <Row className="justify-content-md-center">TODO</Row>
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
