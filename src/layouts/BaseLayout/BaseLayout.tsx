import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

import 'nprogress/nprogress.css'; // Import CSS của nprogress
import nprogress from 'nprogress';
const BaseLayout: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <main>
      <Header />
      <div className="content_web_roche">
        <Outlet />
      </div>
    </main>
  );
};

export default BaseLayout;
