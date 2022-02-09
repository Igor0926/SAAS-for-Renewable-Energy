import React, { Component, useState, useEffect } from "react";
import Chart from "react-apexcharts";


export default function ResultChart(props) {

    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: true
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 240
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            show: false,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '25px',
                            color: '#012615',
                            fontWeight: 600,
                            formatter: function () {
                                return 0
                            },
                            score: 0
                        },
                        value: {
                            show: true,
                            color: 'black',
                            formatter: function (val) {

                            }

                        },
                        total: {
                            show: true,
                            fontSize: 25,
                            color: '#012615',
                            formatter: function (w) {
                                return ['Renewable', 'Energy']
                            }
                        }
                    }
                }
            }
        }
    })
    const [series, setSeries] = useState([0, 100]);

    useEffect(() => {
        if (props.numberScore && props.score) {
            const score = props.score
            
            const newOptions = {
                chart: {
                    width: 380,
                    type: 'donut',
                },
                colors:['#9dbf84', '#b8ccd9' ],
                tooltip:{
                    enabled: false
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 240
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    show: false,
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '25px',
                                    color: '#012615',
                                    fontWeight: 600,
                                    label: 'Here',
                                    formatter: function () {
                                        return score
                                    },
                                    score: score
                                },
                                value: {
                                    show: true,
                                    color: 'black',
                                    formatter: function (val) {

                                    }

                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    fontSize: 25,
                                    color: '#012615',
                                    formatter: function (w) {
                                        return ['Renewable', 'Energy']
                                    }
                                }
                            }
                        }
                    }
                }
            }

            setOptions(newOptions)
            setSeries([props.numberScore, (100 - props.numberScore)]);
        }
    }, [props.numberScore])

    return (
        <div>
            <div className="chart-wrap">
                <div id="chart">
                    <Chart options={options} series={series} type="donut" width={380} />
                </div>
            </div>
        </div>
    )
}