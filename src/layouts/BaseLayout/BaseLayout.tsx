import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import { Layout } from 'antd';
const BaseLayout: React.FC = () => {
  return (
    <Layout className="layout_roche">
      <Header />
      <div className="container_roche">
        <Outlet />
      </div>
    </Layout>
  );
};

export default BaseLayout;
