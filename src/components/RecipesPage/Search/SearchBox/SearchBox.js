import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './SearchBox.css';

class SearchBox extends React.Component {
  static defaultProps = {
    searchTerm: '',
    updateSearchTerm: () => {}
  };

  render() {
    const { searchTerm } = this.props;

    return (
      <div className="SearchBox">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <div className="FormField">
          <input
            type="text"
            className="FormField__input"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => this.props.updateSearchTerm(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func
};
