import React, { Component } from 'react';
import './ProductListPage.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import FormDialog from './../../components/OptionPane/Dialog.js';
import MyButton from './../../components/Button/btn.js';
import { actFetchProductsRequest, actDeleteProductRequest, searchProductRequest } from '../../actions/index';
class ProductListPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            datas:[],
            productId: 0,
            col:[
                {
                    Header: "ID",
                    accessor: "productId"
                },
                {
                    Header: "Name",
                    accessor: "productName"
                },
                {
                    Header: "Category",
                    accessor: "productCategoryCode"
                },
                {
                    Header: "Detail",
                    accessor: "otherProductDetails"
                },
                {
                    Header: "Edit",
                    Cell: row => (
                      <div> <MyButton aria_label='EDIT' productId = {this.state.datas[this.state.productId]}/></div>
                     )
                },
                {
                    Header: "Delete",
                    Cell: row=> (
                      <div> 
                          <MyButton aria_label='DELETE' productId = {this.state.datas[this.state.productId]} /> 
                      </div>
                    )
                } 
            ]
            
        };
        this.onRowClick = this.onRowClick.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    componentWillMount(){
        // Gọi trước khi component đc render lần đầu tiên 
        this.props.fetchAllProducts();
    }

    changeState() {
        var { products } = this.props;
        console.log(products);
        this.setState({datas:products});
        console.log(this.state.datas);
    }
    
    
    onRowClick(state, rowInfo, column, instance){
        return {
          onClick: (e, handleOriginal) => {
            var idex=rowInfo.index;
            this.changeState();
            if(idex!=="undefined"){
              this.setState({productId:rowInfo.index});
            }
            // console.log(this.state.productId);
            if (handleOriginal){
              handleOriginal();
            }
          } 
        };
      };
   

    render() {

        var { products } = this.props;

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
                        <FormDialog typeDialog='ADD' titleDialog="Add product" contentText="Complete data field to insert object!!!"/>
                        <ReactTable data={products}
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

    // showProducts(products) {
    //     var result = null;
    //     var { onDeleteProduct } = this.props;
    //     if (products!==undefined && products.length > 0) {
    //         result = products.map((product, index) => {
    //             return <ProductItem product={product} key={index} index={index} onDeleteProduct={onDeleteProduct} />
    //         });
    //     }
    //     return result;
    // }
}
const mapStateToProps = state => {
    
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
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
