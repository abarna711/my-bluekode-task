import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rootlayout from './layout/Rootlayout';
import Homesec from './pages/Homesec';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='homesec' element={<Homesec/>}></Route>
        <Route path='about' element={<About/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
