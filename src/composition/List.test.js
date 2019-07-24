import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List Component', ()=>{


    const cardData = [
        {
            id: 0,
            title: 'First Card',
            content: 'lorem ipsum'
        },
        {
            id: 1,
            title: 'Second Card',
            content: 'lorem ipsum'
        }
    ];

    it('renders list without crashing', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<List header='First List' cards={cardData} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders list correctly when props are passed', ()=>{
        const tree = renderer
            .create(<List header="First List" cards={cardData} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});