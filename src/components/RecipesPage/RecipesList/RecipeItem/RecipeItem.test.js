import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import RecipeItem from './RecipeItem';

describe (`Recipe Item component`, () => {
    const props = {
        id: 1,
        title: 'Title',
        ingredients: 'List of ingredients',
        instructions: 'Set of instructions',
        imageUrl: 'https://bit.ly/3cotna1',
    }

    it ('renders without crashing', () => {
        // create DOM element to render the component into
        const div = document.createElement('div');
        // render the component, this is the actual test, if something is wrong it will show up here
        ReactDOM.render(<RecipeItem />, div);  
        // clean up code
        ReactDOM.unmountComponentAtNode(div);
    })

    it (`renders the UI as expected`, () => {
        const tree = renderer
            .create(<RecipeItem {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })

})