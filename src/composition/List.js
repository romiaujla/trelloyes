import React from 'react';
import Card from './Card.js';

class List extends React.Component {
    
    static defaultProps = {
        props: {
          id: ``,
          header: ``,
          cards: ``,
          handleAddRandomButtonClick: () => {},
          handleDeleteButtonClick: () => {}
        }
    };

    render(){
        const props = this.props;
        return (
            <section className="cards-list-section">
                <header className="cards-list-header">
                    <h2>{props.header}</h2>
                </header>

                <ul className="card-list">
                    {props.cards.map((card) => <Card 
                                                    key={card.id} 
                                                    title={card.title} 
                                                    content={card.content} 
                                                    id={card.id} 
                                                    listId={this.props.id}
                                                    handleDeleteButtonClick={this.props.handleDeleteButtonClick}/>)}
                </ul>

                <div className="add-random-card">
                    <button type="button" className="add-random-card-button" onClick={() => this.props.handleAddRandomButtonClick(this.props.id)}>+ Add Random Card</button>
                </div>
            </section>
        );
    }
}

export default List;