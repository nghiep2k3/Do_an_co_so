import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Test from './page/Test/Test'
import Carousel from './components/Carousel/Carousel';
import Cart from './components/Cart/Cart';
import Login from './page/Login/Login';


function App() {
  return (
    <div style={{height: '5000px',}}>
      <Header></Header>
      <Carousel></Carousel>
      <Cart></Cart>
      {/* <Login></Login> */}
      {/* <Test></Test> */}
    </div>
  );
}

export default App;
