import React from 'react';
import './App.css';
import List from './composition/List.js';

function AllLists(props){

  const allListsComponent = props.lists.map(list => <List 
                                                      key={list.id} 
                                                      header={list.header} 
                                                      cards={list.cardIds.map(card => props.store.allCards[card])} 
                                                    />);
  
  return (
    <section className={props.className}>
      {allListsComponent}
    </section>
  )
}

function Header(props){
  return (
    <header className="app-header">
      <h1>{props.title}</h1>
    </header>
  );
}

function App(props) {

  return (
    <main className="app">
      <Header title="Trelloyes!"/>
      <AllLists lists={props.store.lists} store={props.store} className="all-lists"/>
    </main>
  );
}

export default App;
