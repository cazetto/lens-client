import { types } from 'containers/search/actions';

const searchReducer = (state, action) => {
  switch (action.type) {
    case types.SET_SEARCH_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      throw new Error('Unexpected action');
  }
};

export default searchReducer;
