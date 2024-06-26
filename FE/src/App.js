import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import { Outlet,  } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideCarousel = location.pathname === "/";

  return (
    <div style={{height: '5000px',}}>
      {!hideCarousel && <Header />}
      <Outlet/>
    </div>
  );
}

export default App;
