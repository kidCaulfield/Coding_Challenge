import React from 'react';
import './App.css';
import Router from './Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
library.add(faHome);
library.add(faDoorOpen);

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
