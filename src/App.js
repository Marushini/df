import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Discussion from './pages/Discussion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>
    </Router>
  );
}

export default App;
