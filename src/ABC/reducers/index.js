import { combineReducers } from 'redux';
import user from './users';

const userApp = combineReducers({ user });

export default userApp;