import React from 'react';
import PropTypes from 'prop-types';

import './SearchFilter.css';

class SearchFilter extends React.Component {
  static defaultProps = {
    filterType: '',
    updateFilterType: () => {}
  };

  render() {
    const { filterType } = this.props;

    return (
      <div className="SearchFilter">
        <div className="FormField">
          <select
            className="FormField__select"
            value={filterType}
            onChange={(e) => this.props.updateFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchFilter;

SearchFilter.propTypes = {
  filterType: PropTypes.string,
  updateFilterType: PropTypes.func
};
