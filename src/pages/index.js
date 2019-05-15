import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Location, navigate } from '@reach/router';
import queryString from 'query-string';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Layout from 'components/layout';
import Search from 'components/search';
import List from 'components/list';
// import Box from 'components/box';
// import Title from 'components/title';
// import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
// import { graphql } from 'gatsby';

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        title
        description
        content
        slug
        url
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const Index = props => {
  const { q } = queryString.parse(props.location.search) || '';
  const [searchKeyword, setSearchKeyword] = useState(q);

  const handleSearchSubmit = value => {
    navigate(`/?q=${value}`);
    setSearchKeyword(value);
  };

  return (
    <Layout>
      <Search
        location={props.location}
        handleSubmit={handleSearchSubmit}
        value={searchKeyword}
      />
      {searchKeyword ? (
        <Query query={FEED_SEARCH_QUERY} variables={{ filter: searchKeyword }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;
            const items = data.feed.links;
            return (
              <div>
                <List items={items} />
              </div>
            );
          }}
        </Query>
      ) : (
        <></>
      )}
    </Layout>
  );
};

Index.propTypes = {
  location: PropTypes.object.isRequired,
};

const IndexWithLocation = () => {
  return <Location>{({ location }) => <Index location={location} />}</Location>;
};

export default IndexWithLocation;

// export const query = graphql`
//   query HomepageQuery {
//     homeJson {
//       title
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//       gallery {
//         title
//         copy
//         image {
//           childImageSharp {
//             fluid(maxHeight: 500, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `;
