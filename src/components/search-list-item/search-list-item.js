import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Box, Card, Heading, Text } from 'rebass';
import { Container } from './search-list-item.css';

const SearchListItem = ({ data: { title, description, content, slug } }) => (
  <Container>
    <Link to={`/post/${slug}`}>
      <Card
        mb={20}
        pb={2}
        pt={20}
        px={10}
        color="black"
        borderRadius={8}
        border="1px solid #f9f9f9"
        boxShadow="1px 1px 6px rgba(0, 0, 0, .05)"
      >
        <Box px={3} pt={1}>
          <Text as="p" pb="1" color="#263238" fontSize={5} fontWeight="900">
            {title}
          </Text>
          <Text as="p" pb="1" color="#455A64" fontSize={2} fontWeight="400">
            {description}
          </Text>
        </Box>
      </Card>
    </Link>
  </Container>
);

SearchListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchListItem;
