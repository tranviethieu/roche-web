import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

const LayoutMain = () => {
  return (
    <Layout className="layout_children">
      {/* <aside className="aside_sider">
        <Sider menus={menuItemMain} keyParent="main" />
      </aside> */}
      <Outlet />
    </Layout>
  );
};
export default LayoutMain;
