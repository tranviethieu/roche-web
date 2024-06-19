import { Link, useLocation } from 'react-router-dom';
import styles from './ListMenu.module.scss';
import clsx from 'clsx';
import icons from '~/constants/images/icons';
import { Img } from 'react-image';
import { PATH } from '~/constants/config';
import React, { useCallback } from 'react';

type ListPage = {
  name: string;
  path: string;
  icon: any;
};

const itemsMenu: ListPage[] = [
  {
    name: 'Main',
    path: PATH.Main,
    icon: <Img src={icons.main} alt="main" />,
  },
  {
    name: 'Administration',
    path: PATH.Administration,
    icon: <Img src={icons.administration} alt="administration" />,
  },
  {
    name: 'Monitoring',
    path: PATH.Monitoring,
    icon: <Img src={icons.monitoring} alt="monitoring" />,
  },
];
interface PopListMenu {
  checkOverview?: boolean;
}

const ListMenu: React.FC<PopListMenu> = ({ checkOverview = false }) => {
  const location = useLocation();
  const checkActive = useCallback(
    (pathname: string) => {
      const currentRoute = location.pathname.split('/')[1];
      return (
        pathname === `/${currentRoute}` ||
        (currentRoute == 'main' && pathname == '/')
      );
    },
    [location]
  );
  return (
    <nav
      className={clsx(styles.main, { [styles.checkOverview]: checkOverview })}
    >
      <ul className={styles.ul}>
        {itemsMenu.map((item: ListPage, index: number) => (
          <li key={index}>
            <Link
              to={item.path}
              className={clsx(styles.nav, {
                [styles.start]: index === 0,
                [styles.active]: checkActive(item.path),
              })}
            >
              <div className={styles.path}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="#search"
        className={clsx(styles.search, {
          [styles.active]: location.hash.includes('#search'),
        })}
      >
        Search
      </Link>
    </nav>
  );
};
export default ListMenu;
