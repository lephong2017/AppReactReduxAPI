import {applyMiddleware, createStore,compose}  from "redux";

//middlewares
import { createLogger }  from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
// import { default as thunk } from 'redux-thunk';

import reducer from '../reducers/reducer.js';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducer,  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);



