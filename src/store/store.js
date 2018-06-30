import {applyMiddleware, createStore}  from "redux";

//middlewares
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducer from '../reducers/reducer.js';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);