import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './pages/Project';
import Inside from './pages/Inside';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/inside' element={<Inside/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
