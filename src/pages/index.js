import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Location, navigate } from '@reach/router';
import queryString from 'query-string';
import Layout from 'components/layout';
import Search from 'components/search';
// import Box from 'components/box';
// import Title from 'components/title';
// import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
// import { graphql } from 'gatsby';

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
