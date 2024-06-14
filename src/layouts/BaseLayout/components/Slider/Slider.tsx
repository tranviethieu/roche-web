import { Button, Menu } from 'antd';
import styles from './Slider.module.scss';
import { useState } from 'react';

import { menuItemSlider } from '~/constants/config';
import { ArrowRight2 } from 'iconsax-react';
import clsx from 'clsx';
const Slider: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
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
          style={{
            height: collapsed ? '0' : 'auto',
          }}
        />
      </div>
    </aside>
  );
};
export default Slider;
