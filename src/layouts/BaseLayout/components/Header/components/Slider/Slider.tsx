import { Button, Menu, MenuProps } from 'antd';
import styles from './Slider.module.scss';
import { useMemo, useState } from 'react';
import { ArrowRight2 } from 'iconsax-react';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItem } from '~/constants/config';
import { store } from '~/redux/store';
import { ItemBreadcrumb, setBreadcrumb } from '~/redux/reducer/site';

const Slider: React.FC<{ menuItemSlider: MenuItem[] }> = ({
  menuItemSlider,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  // const { breadcrumb } = useSelector((state: RootState) => state.site);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const listBreadcrumb = (): ItemBreadcrumb[] => {
    const { pathname } = window.location; // Sử dụng window.location để lấy đường dẫn hiện tại
    const paths = pathname.split('/').filter((e, i) => i !== 1 && e); // Chia đường dẫn thành các phần và loại bỏ phần tử rỗng

    const breadcrumbs = paths.map((part, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/'); // Tạo liên kết đầy đủ cho mỗi phần
      return { title: part, href };
    });

    return [...breadcrumbs];
  };
  const handleClickMenu: MenuProps['onClick'] = (e) => {
    e && navigate(e.key);
    const items: ItemBreadcrumb[] = listBreadcrumb();
    store.dispatch(setBreadcrumb(items));
    setCollapsed(false);
  };

  const defaultSelectedKeys = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);
  return (
    <div className={styles.main}>
      <div className={styles.slider_main}>
        <Button
          onClick={toggleCollapsed}
          style={{ width: 120 }}
          className={styles.button_menu}
        >
          Menu
          <ArrowRight2
            size="16"
            className={clsx(styles.route, { [styles.open]: collapsed })}
          />
        </Button>
        <Menu
          mode="inline"
          theme="light"
          defaultSelectedKeys={[defaultSelectedKeys]}
          inlineCollapsed={!collapsed}
          className="menu_main"
          items={menuItemSlider}
          onClick={handleClickMenu}
          style={{
            height: collapsed ? 'auto' : '0',
            width: collapsed ? 'auto' : 'auto',
          }}
        />
        {/* <Breadcrumb separator="\" items={breadcrumb} /> */}
      </div>
    </div>
  );
};
export default Slider;
