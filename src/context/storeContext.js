import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useActions } from 'context/actions';
import { reducer, initialState } from 'context/reducer';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(reducer, initialState);
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
