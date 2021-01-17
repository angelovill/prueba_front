import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/Items/ItemList';

function App() {
  return (
    <div className="container">
      <div className="App">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
