const initialState = {
  searchKeyword: '',
};

const types = {
  SET_SEARCH_KEYWORD: 'SET_SEARCH_KEYWORD',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
      };
    default:
      throw new Error('Unexpected action');
  }
};

export { initialState, types, reducer };
