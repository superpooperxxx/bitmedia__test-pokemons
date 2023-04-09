import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/Home';
import { MyPokemonsPage } from './pages/MyPokemons';
import { NotFoundPage } from './pages/NotFound';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/my-pokemons"
          element={<MyPokemonsPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
};
