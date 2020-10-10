import React from 'react';
import './App.css';

import Header from './components/header/header';
import Results from './components/results/results';
import Search from './components/search/search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Results/>
    </div>
  );
}

export default App;
 