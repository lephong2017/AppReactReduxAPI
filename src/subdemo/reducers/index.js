import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import categorys from './cates.js';

const appReducers = combineReducers({
    products,
    itemEditing,
    categorys
});

export default appReducers;