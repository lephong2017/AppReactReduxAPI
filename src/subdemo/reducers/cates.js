import * as Types from './../constants/ActionType';

var initialState = [];

const categorys = (state = initialState, action) => {
    var { category, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_CATEGORYS:
        
            return [...action.categorys];
        case Types.SEARCH_CATEGORY:
            return [...action.categorys];
        case Types.FILTER_CATEGORY:
            return [...action.categorys];
        case Types.ADD_CATEGORY:
            state.push(categorys);
            return [...state];
        case Types.UPDATE_CATEGORY:
            index = findIndex(state, category.productCategoryCode);
            state[index] = category;
            return [...state];
        case Types.DELETE_CATEGORY:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (categorys, id) => {
    var result = -1;
    categorys.forEach((cate, index) => {
        if (cate.productCategoryCode === id) {
            result = index;
        }
    });
    return result;
}

export default categorys;