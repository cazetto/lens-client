import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  function renderItems(items) {
    return items.map((currentValue, index) => {
      return (
        <li key={index}>
          <p>{currentValue.title}</p>
          <p>{currentValue.description}</p>
          <p>{currentValue.content}</p>
        </li>
      );
    });
  }

  return <ul>{renderItems(props.items)}</ul>;
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
