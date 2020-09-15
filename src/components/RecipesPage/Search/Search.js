import React from 'react'
import SearchBox from './SearchBox/SearchBox'
import SearchFilter from './SearchFilter/SearchFilter'

class Search extends React.Component {
    
    render() {
        return (
            <div className="Search">
                <SearchBox
                    searchTerm={this.props.searchTerm}
                    updateSearchTerm={this.props.updateSearchTerm}
                />
                <SearchFilter
                    filterType={this.props.filterType}
                    updateFilterType={this.props.updateFilterType}
                />
            </div>
        )
    }
}

export default Search