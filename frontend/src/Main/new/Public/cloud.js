import React, { useState, useEffect, useRef } from 'react'

import positive_1 from '../../../assets/img/cloud/designed/positive_0_0.png'
import positive_2 from '../../../assets/img/cloud/designed/positive_1_0.png'
import positive_3 from '../../../assets/img/cloud/designed/positive_2_0.png'

import negative_1 from '../../../assets/img/cloud/designed/negative_1_0.png'
import negative_2 from '../../../assets/img/cloud/designed/negative_1_0.png'
import negative_3 from '../../../assets/img/cloud/designed/negative_1_0.png'

export default function Cloud(props) {

    const [positiveTotalAnimations, setPositiveTotalAnimations] = useState([]);
    const [negativeTotalAnimations, setNegativeTotalAnimations] = useState([]);


    const positiveFst = useRef();
    const positiveSnd = useRef();
    const positiveTrd = useRef();
    const negativeFst = useRef();
    const negativeSnd = useRef();
    const negativeTrd = useRef();


    useEffect(() => {

        /** Normal Animation */
        if (props.percent && props.percent.length) {
            if (props.percent.length && props.percent[0] && Object.keys(props.percent[0])[0] == 'nonr' && Object.values(props.percent[0]) > 50) {
                positiveDisappearAnimation();
                negativeAppearAnimation();
                setNegativeTotalAnimations(negativeMoveAnimation());
            }
            else {
                negativeDisappearAnimation();
                positiveAppearAnimation();
                setPositiveTotalAnimations(positiveMoveAnimation());
            }

        }
        else if(!props.percent) {
            
            positiveAppearAnimation();
            setPositiveTotalAnimations(positiveMoveAnimation());
        }

    }, [props.percent])

    /** Positive Animation */

    const positiveMoveAnimation = () => {
        let _firstPositive = positiveFst.current.animate(
            [
                { left: '0', transform: 'rotate(180deg)', opacity: 1 },
                { left: '100%', transform: 'rotate(210deg)', opacity: 1 },
                { left: '0', transform: 'rotate(180deg)', opacity: 1 }
            ],
            {
                duration: 300000,
                delay: 2000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )


        let _secondPositive = positiveSnd.current.animate(
            [
                { left: '50%', transform: 'rotate(180deg)', opacity: 1 },
                { left: '100%', transform: 'rotate(360deg)', opacity: 1 },
                { left: '50%', transform: 'rotate(180deg)', opacity: 1 },
                { left: '0%', transform: 'rotate(0deg)', opacity: 1 },
                { left: '50%', transform: 'rotate(180deg)', opacity: 1 },
            ],
            {
                duration: 300000,
                delay: 2000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )


        let _thirdPositive = positiveTrd.current.animate(
            [
                { right: '0', transform: 'rotate(180deg)', opacity: 1 },
                { right: '100%', transform: 'rotate(210deg)', opacity: 1 },
                { right: '0', transform: 'rotate(210deg)', opacity: 1 }
            ],
            {
                duration: 300000,
                delay: 2000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )

        return [_firstPositive, _secondPositive, _thirdPositive];
    }

    const positiveAppearAnimation = () => {

        positiveFst.current.animate(
            [
                { transform: 'rotate(0deg)', opacity: 0, left: 0 },
                { transform: 'rotate(180deg)', opacity: 1, left: 0 },

            ],
            {
                duration: 2000,

            }
        )

        // 
        positiveSnd.current.animate(
            [
                { transform: 'rotate(0deg)', opacity: 0, left: '50%' },
                { transform: 'rotate(180deg)', opacity: 1, left: '50%' },

            ],
            {
                duration: 2000,

            }
        )

        positiveTrd.current.animate(
            [
                { transform: 'rotate(0deg)', opacity: 0, right: '0' },
                { transform: 'rotate(180deg)', opacity: 1, right: '0' },

            ],
            {
                duration: 2000,

            }
        )
    }

    const positiveDisappearAnimation = () => {
        if (positiveTotalAnimations.length) {
            positiveTotalAnimations.forEach((each, index) => {
                each.pause();

                if (index == 0) {
                    let firstFrame = new KeyframeEffect(
                        positiveFst.current,
                        [
                            { transform: 'rotate(0)', opacity: 1, left: getComputedStyle(positiveFst.current).getPropertyValue('left') }, // keyframe
                            { transform: 'rotate(180deg)', opacity: 0, left: getComputedStyle(positiveFst.current).getPropertyValue('left') } // keyframe
                        ],
                        { duration: 2000, fill: 'forwards' }

                    )
                    var disappearAnimation = new Animation(firstFrame, document.timeline);
                    disappearAnimation.play();
                }
                else if (index == 1) {
                    let secondFrame = new KeyframeEffect(
                        positiveSnd.current,
                        [
                            { transform: 'rotate(0)', opacity: 1, left: getComputedStyle(positiveSnd.current).getPropertyValue('left') }, // keyframe
                            { transform: 'rotate(180deg)', opacity: 0, left: getComputedStyle(positiveSnd.current).getPropertyValue('left') } // keyframe
                        ],
                        { duration: 2000, fill: 'forwards' }
                    )

                    var disappearAnimation = new Animation(secondFrame, document.timeline);
                    disappearAnimation.play();
                }
                else if (index == 2) {
                    let thirdFrame = new KeyframeEffect(
                        positiveTrd.current,
                        [
                            { transform: 'rotate(0)', opacity: 1, left: getComputedStyle(positiveTrd.current).getPropertyValue('left') }, // keyframe
                            { transform: 'rotate(180deg)', opacity: 0, left: getComputedStyle(positiveTrd.current).getPropertyValue('left') } // keyframe
                        ],
                        { duration: 2000, fill: 'forwards' }
                    )

                    var disappearAnimation = new Animation(thirdFrame, document.timeline);
                    disappearAnimation.play();
                }

            })
        }
    }

    /**Negative Animation */
    const negativeMoveAnimation = () => {
        let _firstNegative = negativeFst.current.animate(
            [
                { left: '0', transform: 'rotate(180deg)', opacity: 1 },
                { left: '100%', transform: 'rotate(210deg)', opacity: 1 },
                { left: '0', transform: 'rotate(180deg)', opacity: 1 }
            ],
            {
                duration: 300000,
                delay: 2000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )


        let _secondNegative = negativeSnd.current.animate(
            [
                { left: '50%', transform: 'rotate(180)', opacity: 1 },
                { left: '100%', transform: 'rotate(360deg)', opacity: 1 },
                { left: '50%', transform: 'rotate(180deg)', opacity: 1 },
                { left: '0%', transform: 'rotate(0deg)', opacity: 1 },
                { left: '50%', transform: 'rotate(180deg)', opacity: 1 },
            ],
            {
                duration: 300000,
                delay: 2000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )


        let _thirdNegative = negativeTrd.current.animate(
            [
                { right: '0', transform: 'rotate(180deg)', opacity: 1 },
                { right: '100%', transform: 'rotate(210deg)', opacity: 1 },
                { right: '0', transform: 'rotate(180deg)', opacity: 1 }
            ],
            {
                duration: 300000,
                delay: 2000,
                iterations: Infinity,
                fill: 'forwards',
            }
        )

        return [_firstNegative, _secondNegative, _thirdNegative];
    }

    const negativeAppearAnimation = () => {

        negativeFst.current.animate(
            [
                { transform: 'rotate(0deg)', opacity: 0, left: 0 },
                { transform: 'rotate(180deg)', opacity: 1, left: 0 },

            ],
            {
                duration: 2000,

            }
        )

        // 
        negativeSnd.current.animate(
            [
                { transform: 'rotate(0deg)', opacity: 0, left: '50%' },
                { transform: 'rotate(180deg)', opacity: 1, left: '50%' },

            ],
            {
                duration: 2000,

            }
        )

        negativeTrd.current.animate(
            [
                { transform: 'rotate(0deg)', opacity: 0, right: '0' },
                { transform: 'rotate(180deg)', opacity: 1, right: '0' },

            ],
            {
                duration: 2000,

            }
        )
    }

    const negativeDisappearAnimation = () => {
        if (negativeTotalAnimations.length) {
            negativeTotalAnimations.forEach((each, index) => {
                each.pause();

                if (index == 0) {
                    let firstFrame = new KeyframeEffect(
                        negativeFst.current,
                        [
                            { transform: 'rotate(0)', opacity: 1, left: getComputedStyle(negativeFst.current).getPropertyValue('left') }, // keyframe
                            { transform: 'rotate(180deg)', opacity: 0, left: getComputedStyle(negativeFst.current).getPropertyValue('left') } // keyframe
                        ],
                        { duration: 2000, fill: 'forwards' }

                    )
                    var disappearAnimation = new Animation(firstFrame, document.timeline);
                    disappearAnimation.play();
                }
                else if (index == 1) {
                    let secondFrame = new KeyframeEffect(
                        negativeSnd.current,
                        [
                            { transform: 'rotate(0)', opacity: 1, left: getComputedStyle(negativeSnd.current).getPropertyValue('left') }, // keyframe
                            { transform: 'rotate(180deg)', opacity: 0, left: getComputedStyle(negativeSnd.current).getPropertyValue('left') } // keyframe
                        ],
                        { duration: 2000, fill: 'forwards' }
                    )

                    var disappearAnimation = new Animation(secondFrame, document.timeline);
                    disappearAnimation.play();
                }
                else if (index == 2) {
                    let thirdFrame = new KeyframeEffect(
                        negativeTrd.current,
                        [
                            { transform: 'rotate(0)', opacity: 1, left: getComputedStyle(negativeTrd.current).getPropertyValue('left') }, // keyframe
                            { transform: 'rotate(180deg)', opacity: 0, left: getComputedStyle(negativeTrd.current).getPropertyValue('left') } // keyframe
                        ],
                        { duration: 2000, fill: 'forwards' }
                    )

                    var disappearAnimation = new Animation(thirdFrame, document.timeline);
                    disappearAnimation.play();
                }
            })
        }
    }


    return (
        <div className="cloud-section">
            <div className="positive">
                <img className="cloud positive-cloud positive_1" alt="positive_1" src={positive_3} ref={positiveFst} />
                <img className="cloud positive-cloud positive_2" alt="positive_2" src={positive_2} ref={positiveSnd} />
                <img className="cloud positive-cloud positive_3" alt="positive_3" src={positive_3} ref={positiveTrd} />
            </div>

            <div className="negative">
                <img className="cloud negative-cloud" alt="negative_1" src={negative_1} ref={negativeFst} />
                <img className="cloud negative-cloud" alt="negative_2" src={negative_2} ref={negativeSnd} />
                <img className="cloud negative-cloud" alt="negative_3" src={negative_3} ref={negativeTrd} />
            </div>
        </div>
    )
}