import "./Navbar.css";
import  { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export default function myNavbar() {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="nav__container">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand onClick={scrollTop} className="nav__title"><FontAwesomeIcon icon={faUserAstronaut} className="nav__logo"/></Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link eventKey={2} href="/resume">Resume</Nav.Link>
                    <Nav.Link eventKey={3} href="/contact">Contact</Nav.Link>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}