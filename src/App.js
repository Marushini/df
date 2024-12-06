import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
