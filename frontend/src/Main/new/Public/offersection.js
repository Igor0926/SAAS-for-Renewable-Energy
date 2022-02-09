import { Button, Container, Row } from 'react-bootstrap'

export default function OfferSection() {
    return (
        <>
            <Container className="offer-container">
                <Row className="offer-text">
                    <span>
                        Ready to Get Started ?
                    </span>
                    <h3>
                        We offer different models tailored to our customers needs and individual energy transparency demands. Our smart, real-time API is essential for anyone wanting to take control of their energy emissions and its alway free to try!
                    </h3>
                </Row>
                <Row>
                    <Button id="offer-btn">Start for Free</Button>
                </Row>
            </Container>
        </>
    )
}
