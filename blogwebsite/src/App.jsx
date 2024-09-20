import React from 'react';
import Header from './home/header/Header.jsx';
import Footer from './home/footer/footer.js';
import { ThemeProvider } from './home/themeMode.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Info from './pages/info.js';
import CTA from './home/header/CTA.jsx';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Header>
        <CTA />
      </Header>
      <main>
      <ThemeProvider>
        <Routes> 
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </ThemeProvider>
      </main>
      <Footer />
    </div>

    </Router>

  );
};

export default App;