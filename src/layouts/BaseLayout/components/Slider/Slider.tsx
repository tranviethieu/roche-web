import { Button, Menu, MenuProps } from 'antd';
import styles from './Slider.module.scss';
import { useState } from 'react';

import { menuItemSlider } from '~/constants/config';
import { ArrowRight2 } from 'iconsax-react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
const Slider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClickMenu: MenuProps['onClick'] = (e) => {
    e && navigate(e.key);
    setCollapsed(true);
  };
  return (
    <aside className={styles.main}>
      <div style={{ position: 'relative' }}>
        <Button
          onClick={toggleCollapsed}
          style={{ width: 321 }}
          className={styles.button_menu}
        >
          Menu
          <ArrowRight2
            size="24"
            className={clsx(styles.route, { [styles.open]: !collapsed })}
          />
        </Button>
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          className="menu_main"
          items={menuItemSlider}
          onClick={handleClickMenu}
          style={{
            height: collapsed ? '0' : 'auto',
          }}
        />
      </div>
    </aside>
  );
};
export default Slider;
