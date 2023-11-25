import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import FavoriteProjectsPage from './components/FavoriteProjectsPage'; 
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        {/* Define las rutas */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/favorite-projects' element={<FavoriteProjectsPage />} />
        </Routes>

        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
