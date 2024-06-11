// src/pages/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useIsFetching, useIsMutating } from 'react-query';

const Layout: React.FC = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  return (
    <div>
      <div>
        <h1>
          Fetching status: {isFetching ? 'Fetching data...' : 'No fetching'}
        </h1>
        <h1>
          Mutating status: {isMutating ? 'Mutating data...' : 'No mutating'}
        </h1>
      </div>
      <h1>Application Layout</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
