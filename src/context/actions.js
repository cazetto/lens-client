import { types } from 'context/reducer';

export const useActions = (state, dispatch) => {
  function setSearchKeyword(keyword) {
    dispatch({ type: types.SET_SEARCH_KEYWORD, payload: keyword });
  }

  function addTechIfNotInList(newTech) {
    const techIndex = state.techList.indexOf(newTech);
    if (techIndex !== -1) {
      alert('Tech is defined in list');
    } else {
      dispatch({ type: types.ADD_TO_TECH_LIST, payload: newTech });
    }
  }

  return {
    addTechIfNotInList,
    setSearchKeyword,
  };
};
