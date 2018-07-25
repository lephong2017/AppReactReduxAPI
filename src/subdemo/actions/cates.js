import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
// import callApi_S from './../utils/apiCallerS';

export const actFetchCategoryProductRequest = () => {
    return (dispatch) => {
        return callApi('RefProductCategories/getAllRefProductCategories', 'GET', null).then(res => {
            // console.log(res.data);
            // console.log("end load cate");
            dispatch(actFetchCategoryProduct(res.data));
        });
    }
};
export const actFetchCategoryProduct = (category) => {
    return {
        type: Types.FETCH_CATEGORYS,
        category
    }
};