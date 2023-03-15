import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './component/Pages/Registration';
import Dashboard from './component/Pages/Dashboard';
import Login from './component/Pages/Login';
import Student from './component/Pages/Student';
import AddPaper from './component/Pages/AddPaper';
import ViewPaper from './component/Pages/ViewPaper';
import ViewResult from './component/Pages/ViewResult';
import PaperList from './component/Pages/PaperList';
import ThanksPage from './component/Pages/ThanksPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route exact path="addPaper" element={<AddPaper />} />
            <Route exact path="viewPaper" element={<ViewPaper />} />
            <Route exact path="viewResult" element={<ViewResult />} />
          </Route>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/student/:id" element={<Student />} />
          <Route exact path="/signup" element={<Registration />} />
          <Route exact path="/paperList" element={<PaperList />} />
          <Route exact path="/thankPage" element={<ThanksPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
