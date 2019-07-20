import React from 'react';
import Card from './Card.js';

function AllCards(props){
    const allCardsComponent = props.cards.map(card => {
        // console.log(allCards[card],title);
        console.log(card);  
        return (<Card key={card} title={card.title} content={card.content} />);
    });
    console.log("end of list");
    return (
        <ul className="card-list">
            {allCardsComponent}
        </ul>
    );
}

function List(props){
    return (
        <section className="cards-list-section">
            <header className="cards-list-header">
                {props.header}
            </header>
            <AllCards cards={props.cards} />
        </section>
    );
}

export default List;