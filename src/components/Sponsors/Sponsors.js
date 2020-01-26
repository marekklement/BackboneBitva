import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Sponsors extends Component{

  render() {
    return (
      <div className="section section-light-blue">
         <Container className="tim-container">
         <div>
           <h1>
             Sponzoři
           </h1><br></br><br></br>
           </div>
           <Row>
           <Col md="6" sm="4">
            <h2>Generální partner</h2>
           </Col>
             <Col md="6" sm="4">
              <img className="img-circle img-no-padding img-responsive" alt="backbone" src={require("images/sponzors/backbone.png")} />
             </Col>
           </Row>
           <Row>
           <Col md="6" sm="4">
            <h2>Další partneři</h2>
           </Col>
             <Col md="3" sm="4">
              <img className="img-circle img-no-padding img-responsive" alt="backbone" src={require("images/sponzors/backbone.png")} />
             </Col>
             <Col md="3" sm="4">
              <img className="img-circle img-no-padding img-responsive" alt="backbone" src={require("images/sponzors/backbone.png")} />
             </Col>
           </Row>
           <Row>
           <Col md="6" sm="4">
            <h2>Další partneři</h2>
           </Col>
             <Col md="2" sm="4">
              <img className="img-circle img-no-padding img-responsive" alt="backbone" src={require("images/sponzors/backbone.png")} />
             </Col>
             <Col md="2" sm="4">
              <img className="img-circle img-no-padding img-responsive" alt="backbone" src={require("images/sponzors/backbone.png")} />
             </Col>
             <Col md="2" sm="4">
              <img className="img-circle img-no-padding img-responsive" alt="backbone" src={require("images/sponzors/backbone.png")} />
             </Col>
           </Row>
         </Container>
         </div>
    );
  }

};

export default Sponsors;
