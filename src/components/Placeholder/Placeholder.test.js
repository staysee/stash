import React from 'react';
import ReactDOM from 'react-dom';
import Placeholder from './Placeholder';
import { faImages } from '@fortawesome/free-solid-svg-icons';

it('renders without crashing', () => {
  
  const div = document.createElement('div');
  
  ReactDOM.render(<Placeholder message={'Test'} verb={'test'} icon={faImages} />, div);
  
  ReactDOM.unmountComponentAtNode(div);
});
