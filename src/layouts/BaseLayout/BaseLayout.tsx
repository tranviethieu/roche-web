import React from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout: React.FC = () => {
  return (
    <div>
      <h1>Application Layout</h1>
      <Outlet />
    </div>
  );
};

export default BaseLayout;
