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
        pb={20}
        pt={20}
        px={10}
        color="black"
        borderRadius={3}
        bg="light-blue"
        boxShadow="1px 1px 6px rgba(0, 0, 0, .05)"
      >
        <Box px={2}>
          <Heading as="h3">{title}</Heading>
          <Text as="p" fontSize={0}>
            {description}
          </Text>
          <Text as="p" fontSize={2}>
            {content}
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
