import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
// import callApi_S from './../utils/apiCallerS';
// import * as Config from './../constants/Config';
// import Axios from 'axios';

export const actFetchCategoryProductRequest = () => {
    return (dispatch) => {
        return callApi('RefProductCategories/getAllRefProductCategories', 'GET', null).then(res => {
            // console.log(res.data)
            dispatch(actFetchProducts(res.data));
        });
    }
};
export const actFetchProducts = (category) => {
    return {
        type: Types.FETCH_CATEGORYS,
        category
    }
};