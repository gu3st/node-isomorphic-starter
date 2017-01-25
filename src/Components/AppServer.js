import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Page from '../Components/Page';
import Box from '../Components/Box';
import Reducer from '../Store/Reducer';

/*
Our AppServer can be seen as the isomorphic Page loader of our client application.
    -Our controller calls render on this when a user hits the endpoint, which renders out the Page content with Models held on the server side in memory.
    -We flatten our model data down and bind it to window, so that when AppClient is loaded, it pulls the most up to date data to hydrate our Client Application
    -We split up the rendering into two steps
        1: We renderToString the same root component our AppClient will render (in this example Box)
        2: We include that as a property for our Page component and we call renderToStaticMarkup
    -We also include the flattened data down for our data prop which the Page component will bind to window
 */

class AppServer{
    constructor(){
        // This assumes a persistent store for the entire app (every page is static regardless of user)!
        //  If we wanted individual user data, we would create a store out of a persistent remote session on render()
        this.AppStore = createStore(Reducer.combine(combineReducers));
    }

    getPageProperties(){
        const App = <Provider store={this.AppStore}><Box /></Provider>;

        return {
            title: "Isomorphic Starter - Example",
            content: ReactDOMServer.renderToString(App),
            app: this.AppStore.getState()
        };
    }
    
    render(){
        return `<!DOCTYPE html>
                ${ReactDOMServer.renderToStaticMarkup(<Page {...this.getPageProperties()} />)}`;
    }
}

module.exports = AppServer;
export default AppServer;