import React from "react";
import classnames from "classnames";
import {
    Button,
    Collapse,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
} from "reactstrap";
import Scrollchor from 'react-scrollchor';


function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.facebook.com/bitvaoprahu"
                                target="_blank"
                                title="Sledujte nás na Facebooku"
                            >
                                <i className="fa fa-facebook-square"/>
                                <p className="d-lg-none">Facebook</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.instagram.com/bitvaoprahu"
                                target="_blank"
                                title="Sledujte nás na Instagramu"
                            >
                                <i className="fa fa-instagram"/>
                                <p className="d-lg-none">Instagram</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <p><Scrollchor beforeAnimate={toggleNavbarCollapse} to="#o-nas" className="nav-link">Info</Scrollchor></p>
                        </NavItem>
                        <NavItem>
                            <p><Scrollchor beforeAnimate={toggleNavbarCollapse} to="#sponzori"
                                           className="nav-link">Partneři</Scrollchor></p>
                        </NavItem>
                        <NavItem>
                            <p><Scrollchor beforeAnimate={toggleNavbarCollapse} to="#kontakt"
                                           className="nav-link">Kontakt</Scrollchor></p>
                        </NavItem>
                        <NavItem>
                            <Button
                                className="btn-round"
                                color="danger"
                                href="https://engineersprague.enigoo.cz/app/tickets/events/46"
                            >
                                Vstupenky
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
                <button
                    aria-expanded={navbarCollapse}
                    className={classnames("navbar-toggler navbar-toggler", {
                        toggled: navbarCollapse
                    })}
                    onClick={toggleNavbarCollapse}
                >
                    <span className="navbar-toggler-bar bar1"/>
                    <span className="navbar-toggler-bar bar2"/>
                    <span className="navbar-toggler-bar bar3"/>
                </button>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;
