import React from 'react';
import ReactDOM from 'react-dom';
import DisplayModal from './DisplayModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
