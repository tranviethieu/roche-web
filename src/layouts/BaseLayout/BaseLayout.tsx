import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';

import 'nprogress/nprogress.css'; // Import CSS của nprogress
import nprogress from 'nprogress';
import { Layout } from 'antd';
const BaseLayout: React.FC = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   nprogress.start();
  //   const savedTitle = localStorage.getItem('pageTitle');
  //   if (savedTitle) {
  //     document.title = savedTitle;
  //   }
  //   nprogress.done();
  // }, [location.pathname]);

  return (
    <Layout className="layout_roche">
      <Header />
      <div className="content_web_roche">
        <Outlet />
      </div>
    </Layout>
  );
};

export default BaseLayout;
