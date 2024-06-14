import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import ListMenu from './components/ListMenu';
import Slider from './components/Slider';

const BaseLayout: React.FC = () => {
  return (
    <main>
      <Header />
      <ListMenu />
      <Slider />
      <Outlet />
    </main>
  );
};

export default BaseLayout;
