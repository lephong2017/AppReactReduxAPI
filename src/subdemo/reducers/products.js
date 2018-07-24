import * as Types from './../constants/ActionType';

var initialState = [];

const products = (state = initialState, action) => {
    var { product, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return [...action.products];
        case Types.SEARCH_PRODUCTS:
            return [...action.products];
        case Types.FILTER_PRODUCT:
            return [...action.products];
        case Types.ADD_PRODUCT:
            console.log(state);
            state.push(product);
            console.log("start add state product.js");
            console.log(state);
            console.log("end add state product.js");
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.productId);
            console.log("index list of product: "+index)
            console.log(state);
            state[index] = product;
            console.log("start edit state product.js");
            console.log(state);
            console.log("end edit state product.js");
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.productId === id) {
            result = index;
        }
    });
    return result;
}

export default products;