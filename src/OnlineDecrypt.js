import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import {decrypt} from "./tools"

const OnlineDecrypt = () => {
    let {key, text}=useParams()
    useEffect(()=>{
        console.log(key, text)
    })
    return (
        <div>
            <Helmet>
                <meta name="description" content={decrypt(text, key)}/>
                <title>{key}</title>
            </Helmet>
        </div>
    );
};

export default OnlineDecrypt;