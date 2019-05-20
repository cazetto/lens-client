import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Card, Heading, Text } from 'rebass';

const SearchListItem = props => (
  <Link to="/lens/id">
    <Card
      mb={20}
      pb={20}
      pt={20}
      px={10}
      borderRadius={3}
      bg="light-blue"
      boxShadow="1px 1px 6px rgba(0, 0, 0, .05)"
    >
      <Box px={2}>
        <Heading as="h3">{props.data.title}</Heading>
        <Text as="p" fontSize={0}>
          {props.data.description}
        </Text>
        <Text as="p" fontSize={2}>
          {props.data.content}
        </Text>
      </Box>
    </Card>
  </Link>
);

SearchListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchListItem;
