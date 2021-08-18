import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import App from "./App"
import OnlineDecrypt from "./OnlineDecrypt"
import OnlineEncrypt from "./OnlineEncrypt"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/online/decrypt/:key/:text" exact component={OnlineDecrypt}/>
                <Route path="/online/encrypt/:key/:text" exact component={OnlineEncrypt}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;