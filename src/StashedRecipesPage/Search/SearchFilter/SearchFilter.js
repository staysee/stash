import React from 'react'

class SearchFilter extends React.Component {
    
    handleChange = () => {
        console.log('change select')
    }
    
    render() {
        return (
            <div className="SearchFilter">
                <select onChange={this.handleChange}>
                    <option value="">-Select-</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
        )
    }
}

export default SearchFilter