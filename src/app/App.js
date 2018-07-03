import React, { Component } from 'react';
import './App.css';
import Table from '../component/table/Table.js';
import store from '../store/store.js';
import {Provider} from 'react-redux';
class App extends Component {
  render() {
    return (
      <div> 
        <Provider store={store}>
          <div>
            <Table/>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
