import React from 'react'
import ResultboardChart from './resultboardChart.js'


export default function ResultBoard(props) {
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        if(props.percent && props.percent.length) {
            let resultScore = 0;
            props.percent.forEach(element => {
                if (Object.keys(element)[0] != 'nonr' ) {
                    resultScore += Object.values(element)[0];
                }
            });
            setScore(resultScore);


        }
    }, [props.percent])

    return (
        <div className="result">
            <div className="result-label">
                <p>
                    Your result:
                </p>
            </div>

            <div className="chart-board">
                <div className="score">
                    <div className="score-text">
                        <h3>
                            Your green energy score
                        </h3>
                        <span>{score} %</span>
                    </div>
                    <p>
                        *result within 1 km radar
                    </p>
                </div>
                <div id="chart">
                    <ResultboardChart score={score+'%'} numberScore={score}/>
                </div>
            </div>
        </div>
    )
}