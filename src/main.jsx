import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './pages/Home/Home.jsx';
import Popular from './pages/Popular/Popular.jsx';
import TopRated from './pages/TopRated/TopRated.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import Upcoming from './pages/Upcoming/Upcoming.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="popular" element={<Popular />} />
            <Route path="toprated" element={<TopRated />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="movie/:id" element={<MovieDetails />} />
          </Routes>
        </MainLayout>
      </HashRouter>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
