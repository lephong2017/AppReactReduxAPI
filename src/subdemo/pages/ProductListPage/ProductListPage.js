import React, { Component } from 'react';
import './ProductListPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTable from 'react-table';

import matchSorter from 'match-sorter';
import 'react-table/react-table.css';
// import FormDialog from './../../components/OptionPane/Dialog.js';
import MyButton from './../../components/Button/btn.js';
// import MyDropdownList from './../../components/DropdownList/my-dropdown-list.js';
import MyDropdownList from './../../components/DropdownList/MyDropdownBT.js';
import { actFetchProductsRequest, actDeleteProductRequest, searchProductRequest } from '../../actions/index';
import {actFetchCategoryProductRequest} from '../../actions/cates.js';
import {Row,Col} from 'react-bootstrap';

class ProductListPage extends Component {
    componentWillMount(){
        // Gọi trước khi component đc render lần đầu tiên 
        this.props.fetchAllProducts();
        this.props.fetchAllCategoryProduct();
    }

    render() {

        var { products,categorys } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Row className="show-grid">
                            <Col xs={8} md={8}>
                                <Link to="/product/add" className="btn btn-primary mb-5">
                                    <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                                </Link>
                            </Col>
                            <Col xs={4} md={4}>
                                <MyDropdownList cateButton="Primary" title="Category" id="1" listCate={categorys}/>
                            </Col>
                            {/* <FormDialog typeDialog='ADD' titleDialog="Add product" contentText="Complete data field to insert object!!!"/> */}
                        </Row>
                        <ReactTable data={products}
                                    filterable
                                    defaultFilterMethod={(filter, row) =>
                                        String(row[filter.id]) === filter.value}
                                    columns={[
                                    {
                                        Header: "ID",
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
                                        accessor: "productId",
                                        filterable:false,
                                        Cell: row => (
                                        <div> <MyButton aria_label='EDIT' productId={row.value} /></div>
                                        )
                                    },
                                    {
                                        Header: "Delete",
                                        accessor: "productId",
                                        filterable:false,
                                        Cell: row => (
                                        <div> 
                                            <MyButton aria_label='DELETE' productId={row.value} /> 
                                        </div>
                                        )
                                    }]}
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
        categorys: state.categorys

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        fetchAllCategoryProduct:()=>{
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
