import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Project from './pages/Project';
import Inside from './pages/Inside';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/inside' element={<Inside/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
