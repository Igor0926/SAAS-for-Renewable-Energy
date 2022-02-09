import { Container, Row, Col } from 'react-bootstrap'
import OfferSection from '../Public/offersection'
import Cloud from '../Public/cloud'
import phone from '../../../assets/img/iphone_mock.png'


export default function MainClient() {
    return (
        <div className="client">
            <Container className="client-text">
                {/* <Row> */}
                    <Row>
                        <span>Trusted by industry leaders</span>
                        <p>Join the energy transparency revolution<br />
                            you’re going to find yourself in great company!<br /><br />
                            Trusted by partners such as ABB, Seimens, Ericsson, Energy Austrlia and Asahi, renbloc is currently helping global<br /> companies lower thier carbon emissions - in real time!
                        </p>
                        <br />
                    </Row>
                    <Row>
                        <Col xs="12" sm="6">
                            <div className="near-phone">
                                <p>Do you know what energy is powering your screens right now? Is it wind? Nuclear? Coal?<br /><br />
                                    If you want to make the switch for a greener energy consumption you need to start by answering the question; what energy sources am I consuming right now?<br /><br />
                                    At renbloc we grant you that insight through what we call energy transparency. We let you know exactly what energy source you're consuming, right now. Accurate down to a kilometer, allowing you to drastically reduce your carbon emissions. </p>
                            </div>
                        </Col>
                        <Col xs="12" sm="6">
                            <img className="iphone" alt="iphone-mockup" src={phone} />
                        </Col>
                    </Row>
                    <Row>
                        <p>We’re both very humbled and excited to be chosen to be trusted with this impotant task by so many big players!<br/>
                            In collaboration with out clients we are currently lowering  both energy cost and emission with as much as 20%.<br/><br/>
                            The energy future is bright, sustainable and renewable. Join us on this journey, and let us lower your carbon emissions - starting right now!
                        </p>
                    </Row>
                {/* </Row> */}
            </Container>
        
            <Cloud />

            <OfferSection />
        </div>
    )
}