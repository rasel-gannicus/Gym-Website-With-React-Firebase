import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Features from './Pages/Features/Features';
import About from './Pages/About/About';
import Trainers from './Pages/Trainers/Trainers';
import Services from './Pages/Services/Services';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Features></Features>
      <About></About>
      <Trainers></Trainers>
      <Services></Services>
      <Footer></Footer>

    </div>
  );
}

export default App;
