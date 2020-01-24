import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class AboutUs extends Component{

  render() {
    return (
      <Container className="tim-container">
        <div className="typography-line">
          <h1>
            O naší Bitvě o Prahu!
          </h1>
        </div>
          <div>
             <p>Z utkání mezi dvěma pražskými týmy, tedy Engineers Prague a UK Hockey Prague, vzešla postupem času tradiční BITVA O PRAHU, která se v rámci univerzitního hokeje řadí mezi TOP zápasy.</p><p>K pražskému derby na ledě si představte vyprodaný stadion, různorodý doprovodný program, soutěže o ceny, významné osobnosti jako čestné hosty, nebo studentské pochody jednotlivých univerzit na zimák, díky kterým se naladí ta správná atmosféra ještě před startem samotného duelu.</p><p>Tradičním místem pro derby je Zimní stadion Hvězda, kde inženýři odehrávají všechny domácí zápasy. V roce 2018 se povedlo po 20 letech zimák vyprodat právě díky tomuto utkání. Když 800 fanoušků zavítalo na legendární bitvu, tak stadion skutečně praskal ve švech!</p><p>Letos, konkrétně 2. března 2020, se Bitva o Prahu přesouvá do prostor Tipsport Areny a poprvé bude vysílána také živě v České televizi!</p>
             <br></br><br></br>
               <Container>
                 <div className="title">
                   <h3>Videa</h3>
                 </div>
                 <Row>
                   <Col md="4" sm="6">
                    <iframe src="//www.youtube.com/embed/wjqHPCT1aw4" title="video1" frameborder="0"></iframe>
                   </Col>
                   <Col md="4" sm="6">
                    <iframe src="https://www.youtube.com/embed/9vUUJpnhQTw" title="video2" frameborder="0"></iframe>
                   </Col>
                   <Col md="4" sm="6">
                    <iframe src="https://www.youtube.com/embed/nvIKMhvnAJo" title="video3" frameborder="0"></iframe>
                   </Col>
                 </Row>
               </Container>
          </div>
        </Container>
    );
  }

};

export default AboutUs;
