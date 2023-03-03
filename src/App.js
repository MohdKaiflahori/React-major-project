import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from './component/Pages/Registration';
import Dashboard from './component/Pages/Dashboard';
import Login from './component/Pages/Login';
import UserUI from './component/Pages/UserUI';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='/user' element={<UserUI/>}></Route>
        <Route exact path='/signup'element={<Registration />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
