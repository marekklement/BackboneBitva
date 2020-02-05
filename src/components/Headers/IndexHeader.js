import React from "react";
import {Container} from "reactstrap";
import Img from 'react-image';
import logo from '../../assets/img/logo/logo-bitva.svg';

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
                            <Img
                                style={{width: 400, height: 400}}
                                src={logo}/>
                        </div>
                        <h1 className="title text-center">
                            <strong>11.3.2020<br></br>17:00<br></br>ZS EDEN</strong>
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
