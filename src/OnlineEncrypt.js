import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {Helmet} from "react-helmet"
import { encrypt} from "./tools"

const OnlineEncrypt = () => {

    let {key, text}=useParams()

    return (
        <div className="container">
            <Helmet>
                <meta name="description" content={encrypt(text, key)}/>
                <title>{key}</title>
            </Helmet>
            <h1 className="mt-5 text-center text-sm-left">Vijener code </h1>
            <div className="col-sm col-10 mx-auto my-4 bg-info" style={{height: "2px"}}/>

            <div className="row mt-5">
                <div className="col-sm-4 col-12">
                    <div className="card">
                        <div className="card-body"><b>Key:</b> "{key}"</div>
                    </div>
                </div>
                <div className="col-sm-4 col-12 mt-3 mt-sm-0">
                    <div className="card">
                        <div className="card-body"><b>Text:</b> "{text}"</div>
                    </div>
                </div>
                <div className="col-sm-4 col-12 mt-3 mt-sm-0">
                    <div className="card">
                        <div className="card-body"><b>Encrypt:</b> "{encrypt(text, key)}"</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineEncrypt;