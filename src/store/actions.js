import { useSearchActions } from 'containers/search/actions';

export const useActions = (state, dispatch) => {
  return {
    ...useSearchActions(state, dispatch),
  };
};
