import React, { Component } from 'react';
import './App.css';
// import Table from '../component/table/Table.js';
import store from '../store/store.js';
import {Provider} from 'react-redux';
import Customer from './customerList.js';
import MainA from './index.js';
class App extends Component {
  render() {
    return (
      <div> 
        <Provider store={store}>
          <div>
            <Customer/>
            <MainA/>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
