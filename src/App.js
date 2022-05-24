import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.js/Home';
import Footer from './Components/Common/Footer';
import Navbar from './Components/Common/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Purchase from './Components/Purchase/Purchase';
import Dashboard from './Components/Dashboard/Dashboard';
import MyProfile from './Components/Dashboard/MyProfile';
import AddReview from './Components/Dashboard/AddReview';


function App() {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='purchase' element={<Purchase></Purchase>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
