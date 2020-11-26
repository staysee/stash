import React from 'react';
import ReactDOM from 'react-dom';
import Days from './Days';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Days />, div);
  ReactDOM.unmountComponentAtNode(div);
});
