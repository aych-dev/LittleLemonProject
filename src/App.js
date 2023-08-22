import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';
import ReservationForm from './Components/ReservationForm';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Menu />
      <About />
      <Contact />
      <ReservationForm />
      <Footer />
    </div>
  );
}

export default App;
