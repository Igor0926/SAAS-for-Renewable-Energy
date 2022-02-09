import React, { useEffect, useState, useRef } from "react";
import drawAppearAnimation from './appearAnimation';
import drawDisappearAnimation from './disappearAnimation'



export default function CircleGroupBoard(props) {
    const hydroCircleWrapper = useRef();
    const solarCircleWrapper = useRef();
    const windCircleWrapper = useRef();
    const nonrCircleWrapper = useRef();

    useEffect(() => {
        if (props.percent.length) {

            props.percent.map((each, index) => {
                switch (Object.keys(each)[0]) {
                    case 'hydro':
                        drawDisappearAnimation(hydroCircleWrapper.current, 'hydro', index);
                        drawAppearAnimation(hydroCircleWrapper.current, 'hydro', Object.values(each)[0], index);
                        break;
                    case 'wind':
                        drawDisappearAnimation(windCircleWrapper.current, 'wind', index);
                        drawAppearAnimation(windCircleWrapper.current, 'wind', Object.values(each)[0], index);
                        break;
                    case 'solar':
                        drawDisappearAnimation(solarCircleWrapper.current, 'solar', index);
                        drawAppearAnimation(solarCircleWrapper.current, 'solar', Object.values(each)[0], index);
                        break;
                    case 'nonr':
                        drawDisappearAnimation(nonrCircleWrapper.current, 'nonr', index);
                        drawAppearAnimation(nonrCircleWrapper.current, 'nonr', Object.values(each)[0], index);
                        break;
                    default:
                        break;
                }
            })

            props.setStateOfAlert(false);
        }
    }, [props.percent])




    return (
        <>
            <div className="hydro-circle-group" ref={hydroCircleWrapper} >
                <div className="hydro-1">

                </div>
                <div className="hydro-2">

                </div>
            </div>
            <div className="wind-circle-group" ref={windCircleWrapper} >
                <div className="wind-1">

                </div>
                <div className="wind-2">

                </div>
            </div>
            <div className="solar-circle-group" ref={solarCircleWrapper} >
                <div className="solar-1">

                </div>
                <div className="solar-2">

                </div>
            </div>
            <div className="nonr-circle-group" ref={nonrCircleWrapper} >
                <div className="nonr-1">

                </div>
                <div className="nonr-2">

                </div>
            </div>


        </>
    )
}