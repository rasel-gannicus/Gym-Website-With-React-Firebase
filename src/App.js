import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="*" element={<Error></Error>} ></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
