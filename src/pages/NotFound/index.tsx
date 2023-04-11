import React from 'react';
import './NotFoundPage.scss';
import NotFound from '../../static/not-found.gif';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="not-found-page">
      <div className="container">
        <h2 className="not-found-page__heading">Not Found</h2>
        <img
          src={NotFound}
          alt="Not found"
          className="not-found-page__img"
        />
      </div>
    </main>
  );
};
