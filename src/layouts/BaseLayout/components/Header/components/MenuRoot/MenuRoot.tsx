import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Flex, Menu, MenuProps } from 'antd';
import { Home } from 'iconsax-react';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'nprogress/nprogress.css';
import nprogress from 'nprogress';
import {
  PATH,
  MenuItem,
  menuItemMain,
  menuItemAdmin,
  menuItemMonitoring,
} from '~/constants/config';
import Slider from '../Slider';
type MenuItemRoot = {
  key: string;
  icon?: any;
  label: string;
};

const items: MenuItemRoot[] = [
  {
    key: PATH.Main,
    icon: <Home size="20" />,
    label: 'Main',
  },
  {
    key: PATH.Administration,
    icon: <Home size="20" />,
    label: 'Administration',
  },
  {
    key: PATH.Monitoring,
    icon: <Home size="20" />,
    label: 'Monitoring',
  },
];

const MenuRoot = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [menuSlider, setMenuSlider] = useState<MenuItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const firstPathSegment: MenuItemRoot = useMemo(() => {
    nprogress.start();
    const segments = location.pathname.split('/');
    let segment = `/${segments[1]}`;
    if (segment === 'main') segment = '/';
    const item = items.find((item) => item?.key == segment);
    nprogress.done();
    return item || items[0];
  }, [location.pathname]);
  const handleClickMenu: MenuProps['onClick'] = (e) => {
    e && navigate(e.key);
    setCollapsed(true);
  };
  useEffect(() => {
    switch (firstPathSegment.key) {
      case PATH.Main:
        setMenuSlider(menuItemMain);
        break;
      case PATH.Administration:
        setMenuSlider(menuItemAdmin);
        break;
      case PATH.Monitoring:
        setMenuSlider(menuItemMonitoring);
        break;
      default:
        setMenuSlider([]);
        break;
    }
  }, [firstPathSegment]);
  return (
    <Flex gap={10} style={{ position: 'relative' }}>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        size="small"
        style={{
          fontSize: 20,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          margin: 'auto',
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      {firstPathSegment.key && (
        <Flex wrap align="center" gap={5} style={{ color: '#fff' }}>
          {firstPathSegment?.icon}
          <h5>{firstPathSegment?.label}</h5>
        </Flex>
      )}
      <Menu
        defaultSelectedKeys={[String(firstPathSegment?.key) || '/']}
        mode="inline"
        className="menu_main"
        inlineCollapsed={collapsed}
        items={items}
        style={{
          height: collapsed ? '0' : 'auto',
          width: '160px',
          zIndex: '999',
        }}
        onClick={handleClickMenu}
      />
      {menuSlider.length != 0 && <Slider menuItemSlider={menuSlider} />}
    </Flex>
  );
};
export default MenuRoot;
