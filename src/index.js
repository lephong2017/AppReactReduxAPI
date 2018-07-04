// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import Table from './component/table/Table.js';
// // import App from './component/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Table />
//     {/* <App/> */}
//   </Provider>
//   , document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';                         // add this line
import thunk from 'redux-thunk';                                // add this line
import { applyMiddleware, createStore } from 'redux';    / add this line
import App from './ABC/app/app';
import registerServiceWorker from './registerServiceWorker';
import userApp from './ABC/reducers';                               // add this line

const store = createStore(userApp, applyMiddleware(thunk)); // add this line 

ReactDOM.render(
  <Provider store={store}>                                       // add this line
    <App />
  </Provider>,                                                   // add this line
  document.getElementById('root')
);

registerServiceWorker();