import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './componets/Home';
import BrowseCharacter from './componets/BrowseCharacters';
import CharacterDetails from './componets/CharacterDetails';
import Comics from './componets/Comics';
import NotFound from './componets/Notfound';
import Navigation from './componets/Navigation';

function App() {
  <div className='app-container'>
    <Router>
      <Navigation />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<BrowseCharacter />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </div>
};
  

export default App;
