
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import FormDialog from '../OptionPane/Dialog.js';
import MyButton from '../Button/btn.js';

import {connect} from 'react-redux';

const API = 'http://demowebaspnetcore.azurewebsites.net';
const DEFAULT_QUERY = '/api/Customer/getAllCustomer';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            idbtn: 0,
            col:[
                {
                    Header: "ID",
                    accessor: "customerId"
                },
                {
                    Header: "Name",
                    accessor: "customerName"
                },
                {
                    Header: "Address",
                    accessor: "customerAddress"
                },
                {
                    Header: "Email",
                    accessor: "customerEmail"
                },
                {
                    Header: "Edit",
                    Cell: row => (
                      <div> <MyButton aria_label='EDIT'/></div>
                     )
                },
                {
                    Header: "Delete",
                    Cell: row=> (
                      <div> <MyButton aria_label='DELETE' idBtn={this.state.datas[this.state.idbtn].id}/> </div>
                    )
                }
            ]
            
        };
        this.onRowClick = this.onRowClick.bind(this);
    };
    onRowClick(state, rowInfo, column, instance){
     return {
       onClick: (e, handleOriginal) => {
         var idex=rowInfo.index;
         if(idex!=="undefined"){
           this.setState({idbtn:rowInfo.index});
         }
         console.log(this.state.idbtn);
         console.log(state);
         if (handleOriginal) {
           handleOriginal();
         }
       }
     };
   };

    componentDidMount() {
      fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then( data =>{ this.setState({datas: data})}
        );
    // this.props.dispatch(actionCreators.loadProduct());
    };

    componentWillUpdate(){
      fetch(API + DEFAULT_QUERY)
        .then(response => response.json())
        .then( data =>{ this.setState({datas: data})}
        );
    };


    render() {
        return (
            <div >
                <FormDialog typeDialog='ADD' titleDialog="Add product" contentText="Complete data field to insert object!!!"/>
                <ReactTable data={this.state.datas}
                    getTdProps={this.onRowClick.bind(this)}
                    columns={this.state.col}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    filterable
                    manual
                />
            </div>
        );
    }
}

export default Table;

// const mapStateToProps=(state)=>{
//     return state
// };

// export default connect (mapStateToProps, actionCreators)(Table);
