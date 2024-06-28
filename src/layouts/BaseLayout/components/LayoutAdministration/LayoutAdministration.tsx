import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sider from '../Sider';
import { menuItemAdmin } from '~/constants/config';
const LayoutAdministration = () => {
  return (
    <Layout className="layout_children">
      <aside className="aside_sider">
        <Sider menus={menuItemAdmin} keyParent="administration" />
      </aside>
      <Outlet />
    </Layout>
  );
};
export default LayoutAdministration;
