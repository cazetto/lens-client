import { useContext, useEffect } from 'react';
import { StoreContext } from 'store';

import queryString from 'query-string';

export const useQueryStringSearchKeyword = props => {
  const { state, actions } = useContext(StoreContext);
  const { keyword } = state.search;
  const { setKeyword } = actions;

  useEffect(() => {
    const { q } = queryString.parse(props.location.search) || '';
    setKeyword(q);
  }, []);

  return { keyword, setKeyword };
};
