import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Pastors from './pages/Pastors';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import SubDepartment from './pages/SubDepartment';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:id" element={<SubDepartment />} />
          <Route path="/pastors" element={<Pastors />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
