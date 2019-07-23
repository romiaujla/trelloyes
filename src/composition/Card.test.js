import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Component', ()=>{
    
    it('renders without crashing', ()=>{
        const ul = document.createElement('ul');
        ReactDOM.render(<Card />, ul);
        ReactDOM.unmountComponentAtNode(ul);
    });

    it('renders with title and content', ()=>{
        const tree = renderer
            .create(<Card title="Second card" content="lorem ipsum" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
});