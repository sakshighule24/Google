import react from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Main.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="App">
      <section>
        <Navbar />
        <Home />
        <Footer />
      </section>
    </div>
  );
};

export default App;