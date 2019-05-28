import React from 'react';
import PropTypes from 'prop-types';
import { Location, navigate } from '@reach/router';
import { Query } from 'react-apollo';
import SearchBar from 'components/search-bar';
import SearchList from 'components/search-list';
import { FEED_SEARCH_QUERY } from './queries';

import { useQueryStringSearchKeyword } from 'containers/search/hooks';

import Loading from 'components/loading';

const SearchContainer = props => {
  const { keyword, setKeyword } = useQueryStringSearchKeyword(props);

  const handleSearchSubmit = keyword => {
    navigate(`/?q=${keyword}`);
    setKeyword(keyword);
  };

  return (
    <>
      <SearchBar
        location={props.location}
        handleSubmit={handleSearchSubmit}
        value={keyword}
      />
      {keyword ? (
        <Query query={FEED_SEARCH_QUERY} variables={{ filter: keyword }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <div>Error</div>;
            const items = data.feed.posts;
            return (
              <div>
                <SearchList items={items} />
              </div>
            );
          }}
        </Query>
      ) : (
        <></>
      )}
    </>
  );
};

SearchContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

const SearchContainerWithLocation = () => {
  return (
    <Location>
      {({ location }) => <SearchContainer location={location} />}
    </Location>
  );
};

export default SearchContainerWithLocation;
