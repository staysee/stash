import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MealsPage from './MealsPage';

it ('renders without creashing', () => {
    // create DOM element to render the component into
    const div = document.createElement('div');
    // render the component, this is the actual test, if something is wrong it will show up here
    ReactDOM.render(<BrowserRouter><MealsPage /></BrowserRouter>, div);  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
})