import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";
import SectionCarousel from '../Carousel/SectionCarousel.js';

class AboutUs extends Component {

    render() {
        return (
            <div className="section section-dark-blue-bck">
                <Container className="tim-container">
                    <div>
                        <h1>
                            Fenomén univerzitního hokeje v ČR roste. Velkolepé pražské derby odvysílá i Česká televize!
                        </h1><br/><br/>
                    </div>
                    <div>
                        <p>TOP zápas v rámci <strong>Univerzitní ligy ledního hokeje (ULLH)</strong> s názvem Backbone Bitva o Prahu odehrají týmy Engineers Prague a UK Hockey Prague ve středu 11. března 2020 v pražském Edenu.
                        <strong>Vrcholná akce sezóny</strong> pro pražské kluby začne v <strong>17:00</strong>. Zápas ze <strong>zimního stadionu Eden</strong> bude v přímém přenosu vysílat <strong>Česká televize</strong>.
                        Pro přítomné, a to nejen studenty, je připraven zajímavý doprovodný program, soutěže, mezi hosty známé osobnosti, a především jedinečná atmosféra,
                        která je pro všechny zápasy v ULLH typická.
                        </p><p>Tým <strong>Engineers Prague</strong> je zastoupen hráči-studenty z univerzit <strong>ČVUT, VŠE a ČZU</strong>. <strong>UK Hockey Prague</strong> reprezentuje fakulty Univerzity Karlovy.
                        Oba zmíněné pražské celky bojují spolu s šesti dalšími kluby v první sezóně ULLH o Pohár Jana Palacha. Svou oblibu si univerzitní hokej našel
                        rychle a stává se v českém prostředí fenoménem stejně tak, jako podobné soutěže v zámoří. Potenciál samotné ligy roste. Důkazem je nastávající
                        zápas s přívlastkem Bitva o Prahu, který se objeví poprvé živě na televizních obrazovkách na ČT sport. </p>
                        <br/><br/>
                        <div className="h2-center">
                              <img className="img-small-cc img-no-padding img-responsive" alt="eng"
                             src={require("assets/img/logo/eng.png")}/>
                              <img className="img-small-cc img-no-padding img-responsive" alt="uk"
                                  src={require("assets/img/logo/uk.png")}/>
                        </div>
                        <br/>
                        <Container>
                            <div className="title">
                                <h3>Videa</h3>
                            </div>
                            <Row>
                                <Col md="4" sm="6">
                                    <iframe src="//www.youtube.com/embed/wjqHPCT1aw4" title="video1"
                                            frameBorder="0"/>
                                </Col>
                                <Col md="4" sm="6">
                                    <iframe src="https://www.youtube.com/embed/9vUUJpnhQTw" title="video2"
                                            frameBorder="0"/>
                                </Col>
                                <Col md="4" sm="6">
                                    <iframe src="https://www.youtube.com/embed/nvIKMhvnAJo" title="video3"
                                            frameBorder="0"/>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <div className="title">
                                <h3>Galerie</h3>
                            </div>
                            <SectionCarousel/>
                        </Container>
                    </div>
                </Container>
            </div>
        );
    }
}

export default AboutUs;
