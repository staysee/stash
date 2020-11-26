import React from 'react';
import ReactDOM from 'react-dom';
import RecipesPage from './RecipesPage';

it('renders without crashing', () => {
  
  const div = document.createElement('div');
  
  ReactDOM.render(<RecipesPage />, div);
  
  ReactDOM.unmountComponentAtNode(div);
});
