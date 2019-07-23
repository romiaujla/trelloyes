import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('List Component', ()=>{

    it('renders list without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});