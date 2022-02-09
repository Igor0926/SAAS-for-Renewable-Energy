import React, { useEffect, useState } from "react";
import CircleGroupBoard from "./CircleGroupBoard.js"

export default function ChartApp(props) {
    const [status, setStatus] = useState(false);
    const [percent, setPercent] = useState([]);
    let _orderedPercent;

    const getSortedPercent = () => {
        let hydro_ = Number((props.percent.sources.hydro * 100).toFixed(2));
        let wind_ = Number((props.percent.sources.wind * 100).toFixed(2));
        let solar_ = Number((props.percent.sources.thermal * 100).toFixed(2));
        let nonr_ = Number(((props.percent.sources.unspecified + props.percent.sources.nuclear) * 100).toFixed(2));
        _orderedPercent = [{ hydro: hydro_ }, { wind: wind_ }, { solar: solar_ }, { nonr: nonr_ }];
        _orderedPercent.sort(function (a, b) {
            return Object.values(a)[0] - Object.values(b)[0];
        }).reverse();
    }


    useEffect(() => {
        if (Object.keys(props.percent).length) {
            getSortedPercent(); setPercent(_orderedPercent);
            props.getPercent(_orderedPercent);
            setStatus(true);
        }
    }, [props.percent])

    return (
        <>
            <CircleGroupBoard percent={percent} setStateOfAlert={props.setStateOfAlert} />
        </>
    )
}