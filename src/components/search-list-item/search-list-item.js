import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-onsenui';

const SearchListItem = props => (
  <Card>
    <p>{props.data.title}</p>
    <p>{props.data.description}</p>
    <p>{props.data.content}</p>
  </Card>
);

SearchListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchListItem;
