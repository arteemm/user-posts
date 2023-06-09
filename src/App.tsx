import React, { useEffect } from 'react';
import { UserPage, AboutMePage, ErrorPage, PostsPage } from './pages';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Layout } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { fetchPosts } from './redux/actions/actionsCreator';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
