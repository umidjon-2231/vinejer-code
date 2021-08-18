import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {decrypt, encrypt} from "./tools"

const OnlineEncrypt = () => {

    let {key, text}=useParams()
    useEffect(()=>{
        console.log(key, text)
    })
    return (
        <div>
            <Helmet>
                <meta name="description" content={encrypt(text, key)}/>
                <title>{key}</title>
            </Helmet>
        </div>
    );
};

export default OnlineEncrypt;