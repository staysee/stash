import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import SearchFilter from './SearchFilter/SearchFilter';

import './Search.css';

class Search extends React.Component {
  static defaultProps = {
    searchTerm: '',
    updateSearchTerm: () => {},
    filterType: '',
    updateFilterType: () => {}
  };

  render() {
    const {
      searchTerm, updateSearchTerm, filterType, updateFilterType
    } = this.props;
    return (
      <div className="Search">
        <SearchBox
          searchTerm={searchTerm}
          updateSearchTerm={updateSearchTerm}
        />
        <SearchFilter
          filterType={filterType}
          updateFilterType={updateFilterType}
        />
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func,
  filterType: PropTypes.string,
  updateFilterType: PropTypes.func
};
