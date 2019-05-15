import React from 'react';
import PropTypes from 'prop-types';
import { Location, navigate } from '@reach/router';
import { Query } from 'react-apollo';
import SearchBar from 'components/search-bar';
import SearchList from 'components/search-list';
import { FEED_SEARCH_QUERY } from './queries';

import { useQueryStringSearchKeyword } from 'containers/search/hooks';

const SearchContainer = props => {
  const { searchKeyword, setSearchKeyword } = useQueryStringSearchKeyword(
    props
  );

  const handleSearchSubmit = keyword => {
    navigate(`/?q=${keyword}`);
    setSearchKeyword(keyword);
  };

  return (
    <>
      <SearchBar
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
export { FEED_SEARCH_QUERY };
