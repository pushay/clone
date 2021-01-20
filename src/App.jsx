import React from 'react';
import Routing from './routing';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
