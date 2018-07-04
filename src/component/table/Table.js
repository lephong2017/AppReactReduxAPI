
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import FormDialog from '../OptionPane/Dialog.js';
import MyButton from '../Button/btn.js';
import {connect} from 'react-redux';
let actions = require('../../action/index')
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:[],
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
                      <div> <MyButton aria_label='DELETE' idBtn={this.state.datas[this.state.idbtn].customerId}/> </div>
                    )
                } 
            ]
            
        };
        this.onRowClick = this.onRowClick.bind(this);
        // this.loadAllCustomer = this.loadAllCustomer.bind(this);
    };

    componentWillMount(){
        this.props.dispatch(actions.fetchDev());
    } 
   
    loadAllCustomer(){
        let {devs} = this.props
        // this.state.datas=devs.devsArray;
        this.setState({datas: devs.devsArray});
        console.log(devs);
        if(devs.isFetching == false && devs.devsArray.length >= 1){
          this.setState({datas: devs.devsArray});
          console.log("state2");
          console.log(this.state.datas);
        }
       
    }

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

const mapStateToProps = state => ({
    state: state
  });
  
export default connect(mapStateToProps)(Table);
// export default connect(
//     (state)=>{
//         return state
//     },actions)(Table)

