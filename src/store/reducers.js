import { combineReducers } from 'store/utils';
import searchReducer from 'containers/search/reducer';

const combinedReducers = combineReducers({ search: searchReducer });

export { combinedReducers as reducers };
