import React, {useState, useEffect} from 'react'
import Header from '../../../Header/header'
import Footer from '../../../Footer/footer'
import MainHomepage from './mainhomepage'

export default function Homepage() {

    const [percent, setPercent] = useState();
    const getPercent = (value) => {
        setPercent(value);
    }

    return (
        <>
            <Header percent={percent} />

            <MainHomepage getPercent={getPercent} />

            <Footer />
        </>
    )
}
