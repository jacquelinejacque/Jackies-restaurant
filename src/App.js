import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/login' exact Component={Login}/>
          <Route path='/menu' exact Component={Menu}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/contact' exact Component={Contact}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
