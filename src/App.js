import React from 'react';
import Header from './Components/Header/Header'
import SearchBar from './Components/SearchBar/SearchBar'
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <main>
          <SearchBar />
        </main>
      
    </div>
  );
}

export default App;
