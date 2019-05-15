import React from 'react';
import PropTypes from 'prop-types';

const SearchList = props => (
  <ul>
    {props.items.map((currentValue, index) => {
      return (
        <li key={index}>
          <p>{currentValue.title}</p>
          <p>{currentValue.description}</p>
          <p>{currentValue.content}</p>
        </li>
      );
    })}
  </ul>
);

SearchList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SearchList;
