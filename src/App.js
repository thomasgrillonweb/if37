import logo from './logo.svg';  
import './App.css';
import './components/QrContainer'
import QrContainer from './components/QrContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scan from './Scan';
import Menu from './Menu';
import Allergens from './Allergens';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/menu" element={<Menu />}/>
        <Route exact path="/allergens" element={<Allergens />}/>
        <Route path="/" element={<Scan />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
