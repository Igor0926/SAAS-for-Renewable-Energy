import { Container, Row } from 'react-bootstrap'

import OfferSection from '../Public/offersection'
import Cloud from '../Public/cloud'

export default function MainAbout() {
    return (
        <div className="about">
            <Container className="about-text">
                <Row>

                    {/* <Row> */}
                        <span>The Story of Renbloc</span>
                        <p>The idea for RenBloc was sprung over a kitchen table in the winter of 2018. </p><br />
                        <p>Founders Gustaf Svensson and Nils Söderström saw that they both had bought “100% green energy” but there was no way to verifying, nor ceritfynig that claim.</p><br />
                        <p>Even worse, we had no way of actively lowering our energy footprint, nor make a switch for a more renewable consumption</p><br />
                        <p>We set out to change this – empowering consumers to freely choose their type of energy – changing the market forever!</p><br />
                        <p>Since then we have partnered with energy, manufacturing and real estate companies, helping them all to get a better understadning of energy and energy emission.</p><br />
                        <p>We let consumers know exactly what type of energy they consume - in real time. </p><br />
                        <p>This is what we call energy transparency. </p>
                    {/* </Row> */}
                </Row>
            </Container>

            <Cloud />

            <OfferSection />
        </div>
    )
}