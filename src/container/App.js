import React, { Component } from 'react';
import './App.css';
import Layout from '../component/Layout/Layout';
import Home from '../component/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../component/ErrorPages/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    ); 
  }
}

export default App;
