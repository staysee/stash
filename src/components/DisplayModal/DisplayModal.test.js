import React from 'react';
import ReactDOM from 'react-dom';
import DisplayModal from './DisplayModal';

it ('renders without crashing', () => {
    // create DOM element to render the component into
    const div = document.createElement('div');
    // render the component, this is the actual test, if something is wrong it will show up here
    ReactDOM.render(<DisplayModal />, div);  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
})