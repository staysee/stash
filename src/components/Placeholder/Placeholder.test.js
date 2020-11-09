import React from 'react';
import ReactDOM from 'react-dom';
import Placeholder from './Placeholder';
import { faImages } from '@fortawesome/free-solid-svg-icons';

it('renders without crashing', () => {
  // create DOM element to render the component into
  const div = document.createElement('div');
  // render the component, this is the actual test, if something is wrong it will show up here
  ReactDOM.render(<Placeholder message={'Test'} verb={'test'} icon={faImages} />, div);
  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});
