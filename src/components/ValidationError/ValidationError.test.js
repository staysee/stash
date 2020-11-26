import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ValidationError from './ValidationError';

describe(`Validation Error component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`renders the UI as expected`, () => {
    const tree = renderer.create(<ValidationError message="messages" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
