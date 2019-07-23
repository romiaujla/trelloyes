import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

describe('Rendering Card Component', ()=>{
    it('renders without crashing', ()=>{
        const ul = document.createElement('ul');
        ReactDOM.render(<Card />, ul);
        ReactDOM.unmountComponentAtNode(ul);
    });
});