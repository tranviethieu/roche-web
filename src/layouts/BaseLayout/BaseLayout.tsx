import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import ListMenu from './components/ListMenu';

const BaseLayout: React.FC = () => {
  return (
    <main>
      <Header />
      <ListMenu />
      <Outlet />
    </main>
  );
};

export default BaseLayout;
