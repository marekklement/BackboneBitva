import React from "react";
import {Button, Container} from "reactstrap"
import Img from 'react-image';
import logo from '../../assets/img/logo/logo-bitva.png';

function IndexHeader() {
    return (
        <>
            <div
                className="page-header section-dark"
                style={{
                    backgroundImage:
                        "url(" + require("assets/img/background.jpg") + ")"
                }}
            >
                <div className="filter"/>
                <div className="content-center">
                    <Container>
                        <div className="title-brand">
                            <div><Button
                                className="btn-round d-lg-none"
                                color="danger"
                                href="https://engineersprague.enigoo.cz/app/tickets/events/46">
                                Vstupenky
                            </Button></div>
                              <div><Img className="img-logo"
                                src={logo}/></div>
                        </div>
                        <h1 className="title text-center">
                            <strong>ZS EDEN - 3. 3. 2022 - 17:30</strong>
                        </h1>
                    </Container>
                </div>
                <div
                    className="moving-clouds"
                    style={{
                        backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
                    }}
                />
            </div>
        </>
    );
}

export default IndexHeader;
