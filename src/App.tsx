import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/Home';
import { MyPokemonsPage } from './pages/MyPokemons';
import { NotFoundPage } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <>
      <header>Header</header>
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
