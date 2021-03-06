import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert'; 
import { actAddProductRequest, actUpdateProductRequest, actGetProductRequest } from '../../actions/index';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtCategory: '',
            txtDetail: ''
        };
    }

    componentWillMount() {
        var { match } = this.props;
        if (match) { // update
            var id = match.params.id;
            this.props.onEditProduct(id)
        } // else => add
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.productId,
                txtCategory : itemEditing.productCategoryCode,
                txtName : itemEditing.productName,
                txtDetail : itemEditing.otherProductDetails
            })
        }
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtCategory, txtDetail } = this.state;
        console.log("id:"+id +" name:"+ txtName +" cate:"+ txtCategory+" detail:"+txtDetail);
        var product = {
            productId: id,
            productCategoryCode: txtCategory,
            productName: txtName,
            otherProductDetails: txtDetail
        };
        if (id) {
            swal("Good job!", "You clicked the button!", "success");
            this.props.onUpdateProduct(product);
        } else {
            swal("Good job!", "You clicked the button!", "success");
            this.props.onAddProduct(product);
        }
        this.props.history.goBack();
    }

    render() {
        var { txtName, txtCategory, txtDetail } = this.state;
        if(txtName===null || txtName===undefined){
            txtName ="";
        }
        if(txtCategory===null || txtCategory===undefined){
            txtCategory ="";
        }
        if(txtDetail===null || txtDetail===undefined ){
            txtDetail ="";
        }
            return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onSubmit}>
                            <legend>* Vui lòng nhập đầy đủ thông tin</legend>
                            <div className="form-group">
                                <label>Tên Sản Phẩm: </label>
                                <input onChange={this.onChange} value={txtName} name="txtName" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Loại sản phẩm: </label>
                                <input onChange={this.onChange} value={txtCategory} name="txtCategory" className="form-control" rows="3">
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Chi tiết: </label>
                                <input onChange={this.onChange} value={txtDetail} name="txtDetail" type="text" className="form-control" />
                            </div>
                            <Link to="/product-list" className="btn btn-danger mr-5">
                                <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                            </Link>
                            <button type="submit" className="btn btn-primary">
                                <i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
