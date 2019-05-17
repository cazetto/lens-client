import React from 'react';
import PropTypes from 'prop-types';

const SearchListItem = props => (
  <>
    <p>{props.data.title}</p>
    <p>{props.data.description}</p>
    <p>{props.data.content}</p>
  </>
);

SearchListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchListItem;
