import { Outlet } from 'react-router-dom';
import Sider from '../Sider';
import { Layout } from 'antd';
import { menuItemMain } from '~/constants/config';

const LayoutMain = () => {
  return (
    <Layout className="layout_children">
      <aside className="aside_sider">
        <Sider menus={menuItemMain} keyParent="main" />
      </aside>
      <Outlet />
    </Layout>
  );
};
export default LayoutMain;
