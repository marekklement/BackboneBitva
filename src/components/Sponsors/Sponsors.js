import React, {Component} from 'react';
import {Container} from "reactstrap";

class Sponsors extends Component {

    render() {
        return (
            <div className="section section-light-blue">
                <Container className="tim-container">
                    <div>
                        <h1>
                            Partneři
                        </h1><br></br>
                    </div>
                    <h2 className="h2-center">
                        Generální partner
                    </h2>
                    <a href="https://backbone.cz"><img className="img-circle img-no-padding img-responsive" alt="Backbone"
                         src={require("assets/img/sponzors/backbone.png")}/></a>
                     <h2 className="h2-center">
                         Další partneři
                     </h2><br></br>
                    <div class="grid-container">
                      <div class="grid-item"><a href="https://tipsport.cz"><img className="img-circle img-no-padding img-responsive" alt="Tipsport"
                           src={require("assets/img/sponzors/tipsport.png")}/></a></div>
                      <div class="grid-item"><a href="https://kaufland.cz"><img className="img-circle img-no-padding img-responsive" alt="Kaufland"
                           src={require("assets/img/sponzors/kaufland.png")}/></a></div>
                      <div class="grid-item"><a href="https://univerzitnihokej.cz"><img className="img-circle img-no-padding img-responsive" alt="ULLH"
                           src={require("assets/img/sponzors/ulh.png")}/></a></div>
                      <div class="grid-item"><a href="https://www.akka-technologies.com/czech-republic/"><img className="img-circle img-no-padding img-responsive" alt="Akka"
                           src={require("assets/img/sponzors/akka.jpg")}/></a></div>
                      <div class="grid-item"><a href="https://sport.ceskatelevize.cz/"><img className="img-circle img-no-padding img-responsive" alt="ČT-sport"
                           src={require("assets/img/sponzors/ctsport.png")}/></a></div>
                      <div class="grid-item"><a href="https://enigoo.cz"><img className="img-circle img-no-padding img-responsive" alt="Enigoo"
                           src={require("assets/img/sponzors/enigoo.png")}/></a></div>
                      <div class="grid-item"><a href="https://www.czu.cz/cs/"><img className="img-circle img-no-padding img-responsive" alt="ČZU"
                           src={require("assets/img/sponzors/czu.gif")}/></a></div>
                      <div class="grid-item-sm"><a href="https://vse.cz"><img className="img-circle img-no-padding img-responsive" alt="VŠE"
                           src={require("assets/img/sponzors/vse.png")}/></a></div>
                      <div class="grid-item"><a href="https://cvut.cz"><img className="img-circle img-no-padding img-responsive" alt="ČVUT"
                           src={require("assets/img/sponzors/cvut.jpeg")}/></a></div>
                       <div class="grid-item-li"><a href="https://cuni.cz"><img className="img-circle img-no-padding img-responsive" alt="UK"
                            src={require("assets/img/sponzors/uk-skola.png")}/></a></div>
                       <div class="grid-item"><a href="https://su.cvut.cz"><img className="img-circle img-no-padding img-responsive" alt="SU"
                            src={require("assets/img/sponzors/su.png")}/></a></div>
                       <div class="grid-item-li"><a href="https://portal.cvut.cz/informace-pro-studenty/stipendia-nadace-granty/fond-studentskych-projektu-fsp/"><img className="img-circle img-no-padding img-responsive" alt="FSP"
                            src={require("assets/img/sponzors/fsp.png")}/></a></div>
                    </div>
                </Container>
            </div>
        );
    }

};

export default Sponsors;
