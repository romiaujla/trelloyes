import React from 'react';
import './App.css';
import List from './composition/List.js';

class App extends React.Component {

  static defaultProps = {
    store: {
      list:[],
      allCards: {}
    }
  };

  render(){
    const {store} = this.props;
    return (
      <main className="app">
        <header className="app-header">
          <h1>Trelloyes!</h1>
        </header>
        
        <section className="all-lists">
          {store.lists.map(list => <List 
                                      key={list.id} 
                                      header={list.header} 
                                      cards={list.cardIds.map(card => store.allCards[card])} 
                                    />)}
        </section>
      </main>
    );
  }
}

export default App;
