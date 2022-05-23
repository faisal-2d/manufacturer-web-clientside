import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js/Home';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
