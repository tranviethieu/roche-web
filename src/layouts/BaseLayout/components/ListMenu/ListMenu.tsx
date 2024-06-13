// import { Link } from 'react-router-dom';
// import styles from './ListMenu.module.scss';
import { Menu, MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: '/',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'dashboard',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
];
const ListMenu = () => {
  const [current, setCurrent] = useState('/');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
  //   return (
  //     <nav className={styles.main}>
  //       <ul className={styles.ul}>
  //         <li>
  //           <Link to="">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/dashboard">About</Link>
  //         </li>
  //         <li>
  //           <a href="#services">Services</a>
  //         </li>
  //         <li>
  //           <a href="#contact">Contact</a>
  //         </li>
  //       </ul>
  //     </nav>
  //   );
};
export default ListMenu;
