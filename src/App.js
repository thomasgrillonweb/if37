import logo from './logo.svg';  
import './App.css';
import './components/QrContainer'
import QrContainer from './components/QrContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scan from './Scan';
import Menu from './Menu';

function App() {

  const handleOnClickMenuButton = () => {
    alert("wwooohh");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/menu" element={<Menu />}/>
        <Route path="/" element={<Scan />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
