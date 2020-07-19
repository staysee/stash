import React from 'react'

function Meals(props) {

    return (
        <div className="Meals">
            <img src="https://via.placeholder.com/100" alt="Placeholder" />
            <div className="Meals__type">{props.type}</div>
            <div className="Meals__recipe-title">Recipe Title</div>
            <button>Remove</button>
        </div>
    )
}

export default Meals

