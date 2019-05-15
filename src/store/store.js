import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useActions } from 'store/actions';
import { reducers } from 'store/reducers';

const initialState = {
  search: {},
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(reducers, initialState);
  // Get actions from useActions and pass it to Context
  const actions = useActions(state, dispatch);
  // Log new state
  useEffect(() => {
    console.log('State:', state); // eslint-disable-line no-console
  }, [state]);
  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { StoreContext, StoreProvider };
