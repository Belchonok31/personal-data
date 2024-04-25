import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
