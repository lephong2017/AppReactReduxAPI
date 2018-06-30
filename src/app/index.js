import React from "react";
import ReactDOM from "react-dom";

import {connect} from "react-redux";
import UserList from './customerList.js'

import {fetchCustomers} from "../action/action.js"
@connect((store) => {
  // console.log("ins store",store.userReducer.users);
  return {
    customers: store.userReducer.customers
  }
})


export default class Main extends React.Component{
  componentWillMount(){
      this.props.dispatch(fetchCustomers());
  }

  render(){
    console.log(this.props.customers);
    return (
      <div>
      <UserList customers ={this.props.customers}/>
      </div>
    )
  }
}