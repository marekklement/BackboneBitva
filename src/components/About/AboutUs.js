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
                            Fenomén univerzitního hokeje v ČR roste. Velkolepé pražské derby odvysílá <nobr>i&#x2005;</nobr>Česká televize!
                        </h1><br/><br/>
                    </div>
                    <div className="just">
                        <p>TOP zápas v rámci <strong>Univerzitní ligy ledního hokeje (ULLH)</strong> <nobr>s&#x2005;</nobr>názvem Backbone Bitva <nobr>o&#x2005;am</nobr>Prahu odehrají týmy Engineers Prague <nobr>a&#x2005;</nobr>UK Hockey Prague ve středu 11. března 2020 <nobr>v&#x2005;</nobr>pražském Edenu.
                        <strong> Vrcholná akce sezóny</strong> pro pražské kluby začne <nobr>v&#x2005;</nobr><strong>17:00</strong>. Zápas ze <strong>zimního stadionu Eden</strong> bude <nobr>v&#x2005;</nobr>přímém přenosu vysílat <strong>Česká televize</strong>.
                        Pro přítomné, <nobr>a&#x2005;</nobr>to nejen studenty, je připraven zajímavý doprovodný program, soutěže, mezi hosty známé osobnosti, <nobr>a&#x2005;</nobr>především jedinečná atmosféra,
                        která je pro všechny zápasy <nobr>v&#x2005;</nobr>ULLH typická.
                        </p><p>Tým <strong>Engineers Prague</strong> je zastoupen hráči-studenty <nobr>z&#x2005;</nobr>univerzit <strong>ČVUT, VŠE a ČZU</strong>. <strong>UK Hockey Prague</strong> reprezentují studenti Univerzity Karlovy.
                        Oba zmíněné pražské celky bojují spolu <nobr>s&#x2005;</nobr>šesti dalšími kluby <nobr>v&#x2005;</nobr> první sezóně ULLH o Pohár Jana Palacha. Svou oblibu si univerzitní hokej našel
                        rychle <nobr>a&#x2005;</nobr>stává se <nobr>v&#x2005;</nobr>českém prostředí fenoménem stejně tak, jako podobné soutěže <nobr>v&#x2005;</nobr>zámoří. Potenciál samotné ligy roste. Důkazem je nastávající
                        zápas <nobr>s&#x2005;</nobr>přívlastkem Bitva <nobr>o&#x2005;</nobr>Prahu, který se objeví poprvé živě na televizních obrazovkách na ČT sport. </p>
                        <br/><br/>
                        <div className="h2-center">
                              <a href="https://univerzitnihokej.cz/engineersprague"><img className="img-small-cc img-no-padding img-responsive" alt="eng"
                             src={require("assets/img/logo/eng.png")}/></a>
                              <a href="https://univerzitnihokej.cz/ukpraha.hockey"><img className="img-small-cc img-no-padding img-responsive" alt="uk"
                                  src={require("assets/img/logo/uk.png")}/></a>
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
