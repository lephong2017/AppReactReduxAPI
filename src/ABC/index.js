import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';                         // add this line
import thunk from 'redux-thunk';                                // add this line
import { applyMiddleware, createStore } from 'redux';           // add this line
import { composeWithDevTools } from 'redux-devtools-extension'; // add this line
import App from './app/app';
import registerServiceWorker from './registerServiceWorker';
import userApp from './reducers';                               // add this line

const store = createStore(userApp, composeWithDevTools(applyMiddleware(thunk))); // add this line 

ReactDOM.render(
  <Provider store={store}>                                       // add this line
    <App />
  </Provider>,                                                   // add this line
  document.getElementById('root')
);

registerServiceWorker();