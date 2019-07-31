import React from 'react';
import './App.css';
import List from './composition/List.js';

class App extends React.Component {

  constructor(props){
    super(props);
    
    // State 
    this.state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }

  }

  // returns a new random card
  newRandomCard = () => {
    console.log(`new card added`);
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  // handles the add random button click
  handleAddRandomButtonClick = (id) => {
    const randomCard = this.newRandomCard();
    const newLists = this.state.lists;

    // adding new card to the list
    newLists.map((list) => {
      if(list.id === id){
        list.cardIds.push(randomCard.id);
      }
      return list;
    });

    // Changing state 
    this.setState({
      lists: newLists,
      allCards: {
        ...this.state.allCards,
        [randomCard.id]: randomCard
      }
    });

  }

  omit = (obj, keyToOmit) => {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  // handles the delete button click
  handleDeleteButtonClick = (cardId) => {

    const newLists = this.state.lists;
    let newAllCards = this.state.allCards;
    newAllCards = this.omit(newAllCards, cardId);

    // removing the card form the list. 
    newLists.map(list => {
      list.cardIds = list.cardIds.filter( card => card !== cardId);
      return list;
    });

    // Just changing the lists item in the state  
    this.setState({
      lists: newLists,
      allCards: newAllCards
    })

  }

  // main render method
  render(){
    return (
      <main className="app">
        <header className="app-header">
          <h1>Trelloyes!</h1>
        </header>
        
        <section className="all-lists">
          {this.state.lists.map(list => <List 
                                      key={list.id} 
                                      id={list.id}
                                      header={list.header} 
                                      cards={list.cardIds.map(card => this.state.allCards[card])}
                                      handleAddRandomButtonClick={this.handleAddRandomButtonClick} 
                                      handleDeleteButtonClick={this.handleDeleteButtonClick}
                                    />)}
        </section>
      </main>
    );
  }
}

export default App;
