import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/home';
import {Route, Routes} from 'react-router-dom'


function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
