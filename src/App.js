import React from 'react';
import './App.css';
import List from './composition/List.js';

function AllLists(props){

  
  return (
    <section className={props.className}>

    </section>
  )
}

function Header(props){
  return (
    <header className={props.className}>
      <h1>Trelloyes!</h1>
    </header>
  );
}

function App(props) {

  return (
    <main className="app">
      <Header className="app-header" />
      <AllLists lists={props.store.lists} className="all-lists"/>
    </main>
  );
}

export default App;
