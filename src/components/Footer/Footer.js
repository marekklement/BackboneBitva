import React from "react";
import {Row, Container} from "reactstrap";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/univerzitnihokej"
                                ><i className="fa fa-facebook-square"/>
                                    Univerzitní hokej
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://www.facebook.com/engineersprague"
                                ><i className="fa fa-facebook-square"/>
                                    Engineers Prague
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://www.facebook.com/ukpraha.hockey"
                                ><i className="fa fa-facebook-square"/>
                                    UK Hockey Prague
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
            <span>
              © {new Date().getFullYear()} vytvořeno{""} MK a <a href="http://www.dalta.cz">Dalta.cz</a>
            </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
