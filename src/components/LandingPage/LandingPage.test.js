import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { BrowserRouter } from 'react-router-dom';

it ('renders without crashing', () => {
    // create DOM element to render the component into
    const div = document.createElement('div');
    // render the component, this is the actual test, if something is wrong it will show up here
    ReactDOM.render(
        <BrowserRouter>
            <LandingPage />
        </BrowserRouter>,
        div
    );  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
})