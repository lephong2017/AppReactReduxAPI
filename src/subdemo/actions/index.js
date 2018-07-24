import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
import callApi_S from './../utils/apiCallerS';
import * as Config from './../constants/Config';
import Axios from 'axios';
// import axios from 'axios';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('Product/getAllProduct', 'GET', null).then(res => {
            // console.log(res.data)
            dispatch(actFetchProducts(res.data));
        });
    }
};

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
};

export const searchProductRequest = (keywork) => {
    return (dispatch) => {
        return Axios.get(Config.API_URL + '/product/search', {params: {keywork: keywork}}).then(res => {
            dispatch(searchProduct(res.data));
        })
    }
};

export const searchProduct = (products) => {
    return {
        type: Types.SEARCH_PRODUCTS,
        products
    }
};

export const filterProductRequest = (value) => {
    return (dispatch) => {
        return Axios.get(Config.API_URL + '/product/filter', {params: {value: value}}).then(res => {
            dispatch(filterProduct(res.data));
        })
    }
}

export const filterProduct = (products) => {
    return {
        type: Types.FILTER_PRODUCT,
        products
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi_S('Product/createProduct', 'POST', product).then(res => {
            dispatch(actAddProduct(product));
        }).catch(error => console.error(`Fetch Error =\n`, error));;
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi_S(`Product/editProduct/id?id=${product.productId}`, 'PUT', product).then(res => {
            // if (res) {
                dispatch(actUpdateProduct(product));
            // }
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi_S(`Product/deleteProduct?id=${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
            // console.dir(res);
        });
    }
};

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`Product/getFindIDProduct/id?id=${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        });
    }
}

export const actGetProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}