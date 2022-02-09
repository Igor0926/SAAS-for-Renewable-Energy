import * as React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer">
            <Container fluid>
                <Navbar expand="sm" variant="dark">
                    <Nav className="" activeKey="/home">
                        <Nav.Item className="footer-nav">
                                About
                        </Nav.Item>
                        <Nav.Item className="footer-nav">
                                Contact
                        </Nav.Item>

                        <img className="footer-logo" src="./img/logo.png" alt="logo" />

                        <Nav.Item className="footer-nav">
                                Partners
                        </Nav.Item>
                        <Nav.Item className="footer-nav">
                                News
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Container>

            <Container className="social-container">
                    <img src="./img/facebook.png" alt="facebook" />
                    <img src="./img/instagram.png" alt="instagram" />
                    <img src="./img/linkedin.png" alt="linkedin" />
                    <img src="./img/twitter.png" alt="twitter" />
                    <img src="./img/youtube.png" alt="youtube" />
            </Container>

            <Container className="footer-info">
                <span>Fleminggatan 18 A - Stockholm, Sweden</span>
                <span>Renbloc - Verified Renewables</span>
                <span>Copyright © Renbloc AB. 2019-2021</span>
            </Container>

        </div>
    )
}

export default Footer;