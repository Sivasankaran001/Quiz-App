import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Test from './Components/Test';
import Scorehistory from './Components/Scorehistory';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='first'>   
        <h1>Quiz App</h1></div>
        <div className="App">
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='test' element={<Test/>}/>
            <Route path='score' element={<Scorehistory/>}/>
          </Routes>
        </div>
    </>

  );
}
export default App;
