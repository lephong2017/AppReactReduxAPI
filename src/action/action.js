import axios from "axios";
const API = 'http://demowebaspnetcore.azurewebsites.net';
const DEFAULT_QUERY = '/api/Customer/getAllCustomer';
export function fetchCustomers(){

  return function(dispatch){
    axios.get(API+DEFAULT_QUERY)
        .then((response) =>{
          dispatch({type:'FETCH_CUSTOMERS_FULFILLED', payload:response.data});
        })
        .catch((err) => {
          dispatch({type:'FETCH_CUSTOMERS_REJECTED',payload:err})
        })
  }
}