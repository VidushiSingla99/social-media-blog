
import './App.css';
import Navbar from './Components/Navbar';
import Forum from './Components/Forum';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from './Components/Categories';
import Food from './Components/Food';

function App() {
  const value = 'My Context Value';
  return (

    <div className="App" style={{backgroundColor: 'rgb(211, 211, 211, 0.3)'}}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Forum/>} />
      <Route path="/categories" element={<Categories/>} />

      <Route path="/food" element={<Food/>} />


      </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
