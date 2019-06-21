import React from 'react';
import PropTypes from 'prop-types';
import SearchListItem from 'components/search-list-item';
import Box from 'components/box';

const SearchList = props => (
  <Box>
    {props.items.map((item, index) => {
      return <SearchListItem data={item} key={index} />;
    })}
  </Box>
);

SearchList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SearchList;
