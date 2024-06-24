import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Test from './page/Test/Test'
import Carousel from './components/Carousel/Carousel';
import Cart from './components/Cart/Cart';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{height: '5000px',}}>
      <div className='Header'>
      <Header></Header>
      </div>
      <Carousel></Carousel>
      <Cart></Cart>
      <Outlet/>
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
