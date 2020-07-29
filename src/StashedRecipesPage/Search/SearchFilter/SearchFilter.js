import React from 'react'

class SearchFilter extends React.Component {
    
    render() {
        const { filterType } = this.props;

        return (
            <div className="SearchFilter">
                <select value={filterType}
                    onChange={ e => this.props.updateFilterType(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </div>
        )
    }
}

export default SearchFilter