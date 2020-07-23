import React from 'react'
import SearchBox from './SearchBox/SearchBox'
import SearchFilter from './SearchFilter/SearchFilter'

function Search () {
    return (
        <div className="Search">
            <SearchBox />
            <SearchFilter />
        </div>
    )
}

export default Search