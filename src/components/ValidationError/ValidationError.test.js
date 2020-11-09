import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ValidationError from './ValidationError';

describe(`Validation Error component`, () => {
  it('renders without crashing', () => {
    // create DOM element to render the component into
    const div = document.createElement('div');
    // render the component, this is the actual test, if something is wrong it will show up here
    ReactDOM.render(<ValidationError />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it(`renders the UI as expected`, () => {
    const tree = renderer.create(<ValidationError message="messages" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
