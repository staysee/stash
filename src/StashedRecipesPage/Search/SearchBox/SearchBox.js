import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBox() {
    return (
        <div className="SearchBox">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search recipes..." />
        </div>
    )
}

export default SearchBox