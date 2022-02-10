import React, {Component} from 'react'
import {Container, Row, Col} from "reactstrap"

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
                                <Col lg="4" className="section-centered">
                                    <img className="img-cc img-no-padding img-responsive" alt="Aleš Příhoda"
                                         src={require("assets/img/contacts/ales.jpg")}/>
                                    <h3>Aleš Příhoda</h3>
                                    <div>prihoda@engineersprague.cz</div>
                                </Col>
                                <Col lg="4" className="section-centered">
                                    <img className="img-cc img-no-padding img-responsive" alt="Tomáš Hlaváč"
                                         src={require("assets/img/contacts/tomas.jpg")}/>
                                    <h3>Tomáš Hlaváč</h3>
                                    <div>hlavac@engineersprague.cz</div>
                                </Col>
                                <Col lg="4" className="section-centered">
                                    <img className="img-cc img-no-padding img-responsive" alt="Marek Herna"
                                         src={require("assets/img/contacts/herna.jfif")}/>
                                    <h3>Marek Herna</h3>
                                    <div>support@engineersprague.cz</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Contacts
