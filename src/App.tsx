import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Ironhackers from './Pages/Ironhackers/Ironhackers';
import Projects from './Pages/Projects/Projects';
import SingleIronhacker from './Pages/SingleIronhacker/SingleIronhacker';
import SingleProject from './Pages/SingleProject/SingleProject';


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ironhackers" element={<Ironhackers />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/ironhackers/:name" element={<SingleIronhacker />}></Route>
        <Route path="/projects/:projectName" element={<SingleProject />}></Route>
      </Routes>
    </div>
  );
}

export default App;
