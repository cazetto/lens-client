import { useContext, useEffect } from 'react';
import { StoreContext } from 'context/storeContext';

import queryString from 'query-string';

export const useQueryStringSearchKeyword = props => {
  const { state, actions } = useContext(StoreContext);
  const { searchKeyword } = state;
  const { setSearchKeyword } = actions;

  useEffect(() => {
    const { q } = queryString.parse(props.location.search) || '';
    setSearchKeyword(q);
  }, []);

  return { searchKeyword, setSearchKeyword };
};
