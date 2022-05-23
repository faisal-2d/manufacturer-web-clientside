import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js/Home';
import Footer from './Components/Login/Common/Footer';
import Navbar from './Components/Login/Common/Navbar';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
