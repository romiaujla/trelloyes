import React from 'react';
import Card from './Card.js';

class List extends React.Component {
    
    render(){
        const props = this.props;
        return (
            <section className="cards-list-section">
                <header className="cards-list-header">
                    <h2>{props.header}</h2>
                </header>

                <ul className="card-list">
                    {props.cards.map((card) => <Card key={card.id} title={card.title} content={card.content} />)}
                </ul>

                <div className="add-random-card">
                    <button type="button" className="add-random-card-button">+ Add Random Card</button>
                </div>
            </section>
        );
    }
}

export default List;