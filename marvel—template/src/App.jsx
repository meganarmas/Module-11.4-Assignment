import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './componets/Home';
import BrowseCharacters from './componets/BrowseCharacters';
import CharacterDetail from './componets/CharacterDetails';
import Comics from './componets/Comics';
import NotFound from './componets/Notfound';
import Navigation from './componets/Navigation';
import './App.css'


const App = () => {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/character-details/:id" element={<CharacterDetail />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
  );
};

export default App;