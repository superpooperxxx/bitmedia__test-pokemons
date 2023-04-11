/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/Home';
import { MyPokemonsPage } from './pages/MyPokemons';
import { NotFoundPage } from './pages/NotFound';
import { Header } from './components/Header/Header';
import { UserPokemonsProvider } from './contexts/UserPokemonsProvider';

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
          element={
            <UserPokemonsProvider>
              <MyPokemonsPage />
            </UserPokemonsProvider>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
};
