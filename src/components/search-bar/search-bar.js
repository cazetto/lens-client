import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import queryString from 'query-string';

import { Container } from './search-bar.css';

const NORMAL_MODE = 'SearchBar/NORMAL_MODE';
const TO_TOP_MODE = 'SearchBar/TO_TOP_MODE';

const AnimatedContainer = posed.div({
  enter: {
    y: '-200%',
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
});

const SearchBar = props => {
  const { q } = queryString.parse(props.location.search) || '';
  const [keyword, setKeyword] = useState(props.value || '');
  const [mode, setMode] = useState(q ? TO_TOP_MODE : NORMAL_MODE);

  useEffect(() => {
    const q = queryString.parse(props.location.search)['q'] || '';
    setKeyword(q);

    if (mode !== TO_TOP_MODE && q !== '') {
      setMode(TO_TOP_MODE);
    }
  }, []);

  function handleInputChange({ target: { value } }) {
    setKeyword(value);
  }

  function handleInputSubmit(event) {
    event.preventDefault();
    props.handleSubmit(keyword);
  }

  return (
    <Container>
      <div
        className={`search-bar ${
          mode === TO_TOP_MODE ? 'to-top-mode' : 'normal-mode'
        }`}
      >
        <form className="form" onSubmit={event => handleInputSubmit(event)}>
          <input
            onChange={event => handleInputChange(event)}
            name="keyword-input"
            autoComplete="keyword"
            className="input"
            id="search"
            type="text"
            placeholder="Type Keywords"
            value={keyword}
          />
          <button className="icon-wrap" type="submit" value="Submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </form>
      </div>
    </Container>
  );
};

SearchBar.propTypes = {
  location: PropTypes.object.isRequired,
  value: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
