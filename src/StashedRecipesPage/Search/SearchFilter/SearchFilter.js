import React from 'react'

import './SearchFilter.css'

class SearchFilter extends React.Component {
    
    render() {
        const { filterType } = this.props;

        return (
            <div className="SearchFilter">
                <div className="FormField">
                    <select 
                        className="FormField__select"
                        value={filterType}
                        onChange={ e => this.props.updateFilterType(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SearchFilter