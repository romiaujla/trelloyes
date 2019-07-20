import React from 'react';
import Card from './Card.js';

function AllCards(props){
    const allCards = props.cards.map(card => <Card title={card.title} content={card.content} />);
    return (
        <ul className="card-list">
            {allCards}
        </ul>
    );
}

function List(props){
    return (
        <section className="cards-list-section">
            <Header className="cards-list-header">
                {props.header}
            </Header>
            <AllCards cards={props.cards} />
        </section>
    );
}

export default List;