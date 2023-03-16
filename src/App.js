import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './component/Registration';
import Dashboard from './component/admin/Dashboard';
import Login from './component/Login';
import Student from './component/student/Student';
import AddPaper from './component/admin/AddPaper';
import ViewPaper from './component/admin/ViewPaper';
import ViewResult from './component/admin/ViewResult';
import PaperList from './component/student/PaperList';
import ThanksPage from './component/student/ThanksPage';
import About from './component/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route exact index element={<AddPaper />} />
            <Route exact path="addPaper" element={<AddPaper />} />
            <Route exact path="viewPaper" element={<ViewPaper />} />
            <Route exact path="viewResult" element={<ViewResult />} />
          </Route>
          <Route exact path="/" element={<About />} />
          <Route exact path="/login" element={<Login />} />
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
