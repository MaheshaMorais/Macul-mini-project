
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Store from './pages/Store';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Private from './pages/privacy';
import Questions from './pages/Questions';
import Create from './pages/Createacc';


function App() {
  return(
    <Router>
      <Navbar/>
    <div>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/terms' element={<Terms/>}/>
    <Route path='/privacy' element={<Private/>}/>
    <Route path='/question' element={<Questions/>}/>
    <Route path='/create-account' element={<Create/>}/>
   

  </Routes>
 
  </div>
  <Footer/>
  
  </Router>


  )

}

export default App;

