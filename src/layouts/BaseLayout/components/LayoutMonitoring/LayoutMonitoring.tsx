import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from '../Sider';
import { menuItemMonitoring } from '~/constants/config';
const LayoutMonitoring = () => {
  return (
    <Layout className="layout_children">
      <aside className="aside_sider">
        <Sider menus={menuItemMonitoring} keyParent="monitoring" />
      </aside>
      <Outlet />
    </Layout>
  );
};
export default LayoutMonitoring;
