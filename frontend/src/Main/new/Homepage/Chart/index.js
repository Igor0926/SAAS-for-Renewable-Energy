import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

import CustomeAxiosRequest from './request'
import ChartApp from './chartapp'
import Notification from './notification'


export default function Chart(props) {

    const [percent, setPercent] = useState({});
    const [error, setError] = useState(0);

    const getData = async () => {

        let obj = {
            headers: {
                Authorization: "44f0245f0c2437dd47bf01f236cf2d1ead5f1262",
                x: props.center.lng,
                y: props.center.lat
            }
        }

        await axios.get("http://localhost:3005/data", obj)
            .then(res => {
                if (res.status == 200) {
                    if (res.data.error) {
                        if(res.data.error == 'Server Error!') setError(1);
                        else setError(2);
                        // setPercent({
                        //     "final_index": 27.3,
                        //     "X": 11.0,
                        //     "Y": 59.0,
                        //     "sources": {
                        //         "nuclear": 0.5761031126269958,
                        //         "thermal": 0.13619981597974304,
                        //         "wind": 0.10963689156892753,
                        //         "unspecified": 0.0146567906381997,
                        //         "hydro": 0.16340338918613398
                        //     }
                        // });
                        // setPercent({
                        //     "final_index": 27.3,
                        //     "X": 11.0,
                        //     "Y": 59.0,
                        //     "sources": {
                        //         "nuclear": 0.13619981597974304,
                        //         "thermal": 0.5761031126269958,
                        //         "wind": 0.10963689156892753,
                        //         "unspecified": 0.0146567906381997,
                        //         "hydro": 0.16340338918613398
                        //     }
                        // })
                    } else {
                        setPercent(res.data);
                    }
                }
                else {
                    alert("Error");
                }
            })
    }

    useEffect(() => {
        if (props.status == true && Object.keys(props.center).length) {
            getData();
        };
        console.log(props.place)
    }, [props.status, props.center])

    return (
        <Container fluid className="chart-wrapper">
            <div className="location container">
                <p>Location</p>
                <h3>{props.place ? props.place : 'Stockholm'}, Sweden</h3>
                <span>Live update</span>
            </div>

            <div className="chart">
                <Row className="chart-row">
                    <Col xl="9">
                        <div className="chart-area">
                            <ChartApp percent={percent} setStateOfAlert={props.setStateOfAlert} getPercent={props.getPercent} />
                        </div>
                    </Col>
                    <Col className="legend-column">
                        <div className="chart-legend container">
                            <div className="hydro-legend legend">
                                <div className="hydro-dot dot"></div><span>Hydro power</span>
                            </div>
                            <div className="wind-legend legend">
                                <div className="wind-dot dot"></div><span>Wind power</span>
                            </div>
                            <div className="solar-legend legend">
                                <div className="solar-dot dot"></div><span>Solar power</span>
                            </div>
                            <div className="nonr-legend legend">
                                <div className="nonr-dot dot"></div><span>Non-renewable sources</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Notification error={error} />
        </Container>
    )
}
