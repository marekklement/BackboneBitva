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
                    <img className="img-circle img-no-padding img-responsive" alt="Backbone"
                         src={require("assets/img/sponzors/backbone.png")}/>
                     <h2 className="h2-center">
                         Další partneři
                     </h2><br></br>
                    <div class="grid-container">
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="Tipsport"
                           src={require("assets/img/sponzors/tipsport.png")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="Kaufland"
                           src={require("assets/img/sponzors/kaufland.png")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="ULLH"
                           src={require("assets/img/sponzors/ulh.png")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="Akka"
                           src={require("assets/img/sponzors/akka.jpg")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="backbone"
                           src={require("assets/img/sponzors/ctsport.png")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="Enigoo"
                           src={require("assets/img/sponzors/enigoo.png")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="ČZU"
                           src={require("assets/img/sponzors/czu.gif")}/></div>
                      <div class="grid-item-sm"><img className="img-circle img-no-padding img-responsive" alt="VŠE"
                           src={require("assets/img/sponzors/vse.png")}/></div>
                      <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="ČVUT"
                           src={require("assets/img/sponzors/cvut.jpeg")}/></div>
                       <div class="grid-item-li"><img className="img-circle img-no-padding img-responsive" alt="UK"
                            src={require("assets/img/sponzors/uk-skola.png")}/></div>
                       <div class="grid-item"><img className="img-circle img-no-padding img-responsive" alt="SU"
                            src={require("assets/img/sponzors/su.png")}/></div>
                       <div class="grid-item-li"><img className="img-circle img-no-padding img-responsive" alt="FSP"
                            src={require("assets/img/sponzors/fsp.png")}/></div>
                    </div>
                </Container>
            </div>
        );
    }

};

export default Sponsors;
