import './App.css';
import './components/QrContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scan from './Scan';
import Menu from './Menu';
import Allergens from './Allergens';
import Mesallergies from './pages/Mesallergies';
import Historique from './pages/Historique';
import Communaute from './pages/Communaute';
import Parametres from './pages/Parametres';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/menu" element={<Menu />}/>
        <Route exact path="/allergens" element={<Allergens />}/>
        <Route exact path="/myallergens" element={<Mesallergies />}/>
        <Route exact path="/historical" element={<Historique />}/>
        <Route exact path="/community" element={<Communaute />}/>
        <Route exact path="/params" element={<Parametres />}/>
        <Route path="/" element={<Scan />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
