import './App.css';
import Home from './screens/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';


function App() {
  return (
    <Router>

      <div className='p-0 m-0'>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
