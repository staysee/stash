import React from 'react'

import './PageHeader.css'

function PageHeader(props) {
    return (
        <h2 className="PageHeader">{props.title}</h2>
    )
}

export default PageHeader