import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Features from './Pages/Features/Features';
import About from './Pages/About/About';
import Trainers from './Pages/Trainers/Trainers';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Features></Features>
      <About></About>
      <Trainers></Trainers>
      <Services></Services>


      <h1 style={{marginTop : '300px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, natus tenetur esse dignissimos eligendi voluptatum porro! Maiores non, reprehenderit optio aspernatur illum tenetur, facere molestias, ex mollitia nesciunt perspiciatis architecto saepe ratione aut ipsam numquam enim voluptatibus voluptates aperiam maxime doloribus nam atque laudantium unde? Eum repudiandae voluptatum ab quae.</h1>
    </div>
  );
}

export default App;
