import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vector from '../../../assets/img/vector.png'

export default function Alert(props) {
    const alertElement = useRef();

    const allow = () => {
        props.allowState(true);
        if ( alertElement.current.style ) {
            alertElement.current.style.visibility = 'hidden';  
        } 
    }

    const dismiss = () => {
        props.allowState(false);
    }

    useEffect(() => {
        if (alertElement.current.style && alertElement.current.style.visibility ) alertElement.current.style.visibility = 'visible';
    }, [props.centerChanged])

    return (
        <Container fluid className="alert" >
            <div className="alert-wrapper" ref={alertElement} >
                <img className="vector" alt="vector" src={vector} />

                <div className="alert-text">.renbloc would like to use your location<br />to display the source of your energy.</div>
                <div className="btn-group">
                    <button className="alert-btn allow" onClick={allow}>Allow</button>
                    <button className="alert-btn dismiss" onClick={dismiss}>Dismiss</button>
                </div>
            </div>
        </Container>
    )
}
