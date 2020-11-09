import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBox.css';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <div className="FormField">
          <input
            type="text"
            className="FormField__input"
            placeholder="Search recipes..."
            value={this.props.searchTerm}
            onChange={(e) => this.props.updateSearchTerm(e.target.value)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
