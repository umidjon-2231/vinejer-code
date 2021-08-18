import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {Helmet} from "react-helmet"

const OnlineEncrypt = () => {

    let {key, text}=useParams()
    useEffect(()=>{
        console.log(key, text)
    })
    return (
        <div>
            <Helmet>
                <meta name="description" content="Salom"/>
                <title>Salom</title>
            </Helmet>
        </div>
    );
};

export default OnlineEncrypt;