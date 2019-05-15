const types = {
  SET_SEARCH_KEYWORD: 'SET_SEARCH_KEYWORD',
};

const useSearchActions = (state, dispatch) => {
  function setKeyword(keyword) {
    dispatch({ type: types.SET_SEARCH_KEYWORD, payload: keyword });
  }
  return {
    setKeyword,
  };
};

export { useSearchActions, types };
