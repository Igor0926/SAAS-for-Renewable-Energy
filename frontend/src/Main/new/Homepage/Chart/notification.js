import React, { useState, useEffect, useRef } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'


export default function Notification(props) {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (props.error && props.error == 1) {
            setMessage("Server Error!");
            setShow(true);
        }
        else if (props.error && props.error == 2) {
            setMessage("Only Swedish City Possible!");
            setShow(true);
        }
    }, [props.error])



    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
