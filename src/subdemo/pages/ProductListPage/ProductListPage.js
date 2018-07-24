import React, { Component } from 'react';
import './ProductListPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

import matchSorter from 'match-sorter';
import 'react-table/react-table.css';
import FormDialog from './../../components/OptionPane/Dialog.js';
import MyButton from './../../components/Button/btn.js';
// import MyDropdownList from './../../components/DropdownList/my-dropdown-list.js';
import MyDropdownList from './../../components/DropdownList/MyDropdownBT.js';
import { actFetchProductsRequest, actDeleteProductRequest, searchProductRequest } from '../../actions/index';
import {actFetchCategoryProductRequest} from '../../actions/cates.js';
class ProductListPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            datas:[],
            indexRow: 0,
            col:[
                {
                    Header: "ID",
                    // accessor: "productId",
                    id: "productId",
                    accessor: d => d.productId,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["productId"] }),
                    filterAll: true
                },
                {
                    Header: "Name",
                    // accessor: "productName",
                    id: "productName",
                    accessor: d => d.productName,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["productName"] }),
                    filterAll: true
                },
                {
                    Header: "Category",
                    // accessor: "productCategoryCode",
                    id: "productCategoryCode",
                    accessor: d => d.productCategoryCode,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["productCategoryCode"] }),
                    filterAll: true
                },
                {
                    Header: "Detail",
                    // accessor: "otherProductDetails",
                    id: "otherProductDetails",
                    accessor: d => d.otherProductDetails,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["otherProductDetails"] }),
                    filterAll: true
                },
                {
                    Header: "Edit",
                    filterable:false,
                    Cell: row => (
                      <div> <MyButton aria_label='EDIT' product = {this.state.datas[this.state.indexRow]}/></div>
                     )
                },
                {
                    Header: "Delete",
                    filterable:false,
                    Cell: row=> (
                      <div> 
                          <MyButton aria_label='DELETE' product = {this.state.datas[this.state.indexRow]} /> 
                      </div>
                    )
                } 
            ]
            
        };
        // this.onRowClick = this.onRowClick.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    componentWillMount(){
        // Gọi trước khi component đc render lần đầu tiên 
        this.props.fetchAllProducts();
    }

    changeState() {
        var { products } = this.props;
        // console.log(products);
        this.setState({datas:products});
        // console.log(this.state.datas);
    }
    
    
    onRowClick = (state, rowInfo, column, instance)=>{
        console.log(this.state.indexRow);
        return {
          onClick: (e, handleOriginal) => {
            var idex=rowInfo.index;
            this.changeState();
            if(idex!=="undefined"){
              this.setState({indexRow:rowInfo.index});
            }
            // console.log(this.state.productId);
            if (handleOriginal){
              handleOriginal();
            }
          } 
        };
      };
   

    render() {

        var { products,categorys } = this.props;
        console.log(categorys);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" className="btn btn-primary mb-5">
                            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                        {/* <ProductList>
                            {this.showProducts(products)} 
                        </ProductList> */}
                        {/* <FormDialog typeDialog='ADD' titleDialog="Add product" contentText="Complete data field to insert object!!!"/> */}
                        <MyDropdownList title="Primary" id="1" listCate={categorys}/>
                        <ReactTable data={products}
                            filterable
                            defaultFilterMethod={(filter, row) =>
                                String(row[filter.id]) === filter.value}
                            getTdProps={this.onRowClick.bind(this)}
                            columns={this.state.col}
                            defaultPageSize={5}
                            className="-striped -highlight"
                        />
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = state => {
    
    return {
        products: state.products,
        categorys: state.category
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        fetchAllCateTgoryProduct:()=>{
            dispatch(actFetchCategoryProductRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
        searchProduct: (keywork) => {
            dispatch(searchProductRequest(keywork))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
