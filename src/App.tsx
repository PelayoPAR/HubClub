import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Ironhackers from './Pages/Ironhackers/Ironhackers';


function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/ironhackers" element={<Ironhackers/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
