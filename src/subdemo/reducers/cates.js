import * as Types from './../constants/ActionType';

var initialState = [];

const categorys = (state = initialState, action) => {
    // var { category, id } = action;
    // var index = -1;
    switch (action.type) {
        case Types.FETCH_CATEGORYS:
            return [...action.category];
        
        default: return [...state];
    }
};


export default categorys;