import React from 'react';
import { UserPage, AboutMePage, ErrorPage, PostsPage } from './pages';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Layout } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
