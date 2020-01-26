import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.univerzitnihokej.cz"
                  target="_blank"
                >
                Univerzitní hokej
                </a>
              </li>
              <li>
                <a
                  href="http://www.facebook.com/engineersprague"
                  target="_blank"
                >
                  Engineers Prague
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ukhockeyprague"
                  target="_blank"
                >
                  UK Hockey Prague
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} vytvořil{""} MK a Dalta webdesign
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
