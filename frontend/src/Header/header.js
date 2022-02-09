import * as React from 'react'
import { Link } from "react-router-dom";
import { Fade } from 'react-slideshow-image';
import { Navbar, Container, Nav } from 'react-bootstrap';

import wind from '../assets/img/header/wind.png'
import wind_2 from '../assets/img/header/wind_2.png'
import solar from '../assets/img/header/solar.png'

import bad_1 from '../assets/img/header/bad_1.png'
import bad_2 from '../assets/img/header/bad_2.png'
import bad_3 from '../assets/img/header/bad_3.png'

import 'react-slideshow-image/dist/styles.css';
import { ReactComponent as LogoIcon } from '../assets/img/logo.svg';

function Header(props) {

    const [fadeImages, setFadeImages] = React.useState([
        {
            url: wind
        },
        {
            url: wind_2
        },
        {
            url: solar
        },
    ])

    React.useEffect(() => {
        if (props.percent && props.percent.length) {
            let resultScore = 0;
            props.percent.forEach(element => {
                if (Object.keys(element)[0] != 'nonr') {
                    resultScore += Object.values(element)[0];
                }
            });
            
            if(resultScore >= 50) {
                setFadeImages([
                    {
                        url: wind
                    },
                    {
                        url: wind_2
                    },
                    {
                        url: solar
                    },
                ])
            }
            else {
                setFadeImages([
                    {
                        url: bad_1
                    },
                    {
                        url: bad_2
                    },
                    {
                        url: bad_3
                    },
                ])
            }

        }
    }, [props.percent])
    
    return (
        <div className="header">
            <Navbar expand="sm" bg="transparent" variant="transparent" >
                <Container>
                    <Nav>
                        <Link to="/home">
                            <span className='navbar-link'>Homepage</span>
                        </Link>
                        <Link to="/about" >
                            <span className='navbar-link'>About</span>
                        </Link>
                        <Link to="/client" >
                            <span className='navbar-link'>Client & Partners</span>
                        </Link>
                        <Link to="/" >
                            <span className='navbar-link'>News</span>
                        </Link>
                    </Nav>
                </Container>
                <LogoIcon className="logo" />
            </Navbar>

            {/* Background Image Carousel */}
            <div className="slide-container">
                <Fade duration={3000} arrows={false} infinite={true}>
                    {fadeImages.map((fadeImage, index) => (
                        <div className="each-fade" key={index}>
                            <div className="image-container">
                                <img src={fadeImage.url} />
                            </div>
                        </div>
                    ))}
                </Fade>
            </div>

            <div className="header-text">
                <h1>
                    THE FUTURE <small>IS</small>  <br /> BRIGHT, <br /> SUSTAINABLE <small>AND</small> <br /> RENEWABLE
                </h1>
            </div>

        </div>
    )
}

export default Header;