import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import RecipeCardModal from './RecipeCardModal';

it('renders without crashing', () => {
  
  const div = document.createElement('div');
  
  ReactDOM.render(
    <BrowserRouter>
      <RecipeCardModal />
    </BrowserRouter>,
    div
  );
  
  ReactDOM.unmountComponentAtNode(div);
});
