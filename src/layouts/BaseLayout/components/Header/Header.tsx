import { Badge, Button, Flex, Input, Select } from 'antd';
import styles from './Header.module.scss';
import clsx from 'clsx';
import {
  ArrowLeft2,
  ArrowRight2,
  Star1,
  Notification,
  SearchNormal1,
} from 'iconsax-react';
import { RootState, store } from '~/redux/store';
import { Link } from 'react-router-dom';
import { setIsOverview } from '~/redux/reducer/site';
import { useSelector } from 'react-redux';
import MenuRoot from './components/MenuRoot';
import { Img } from 'react-image';

import icons from '~/constants/images/icons';
import Overview from '~/pages/Overview';
import DropdownProfile from './components/DropdownProfile';
import { listLanguges } from '~/locale/i18n';
import { useTranslation } from 'react-i18next';
import SearchInput from '~/components/common/SearchInput';

const Header = () => {
  const { i18n } = useTranslation();
  const { isOverview } = useSelector((state: RootState) => state.site);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };
  return (
    <header
      className={clsx(styles.header, { [styles.isOverview]: isOverview })}
    >
      <div className={styles.container}>
        <Flex wrap align="center" gap={10}>
          <Link to="" style={{ display: 'flex' }}>
            <Img
              src="/static/images/logo.png"
              alt="#roche"
              width={30}
              height={30}
            />
          </Link>
          <Link to="" style={{ display: 'flex' }}>
            <Img src="/static/images/logo2.svg" alt="#roche" />
          </Link>
          <h1 className={clsx(styles.title_h1, 'display_1400')}>
            PHẦN MỀM QUẢN LÝ XÉT NGHIỆM
          </h1>
          <MenuRoot />
          <Button
            size="small"
            htmlType="button"
            className={styles.buttonDefault}
          >
            <ArrowLeft2 size="18" color="#fff" />
          </Button>
          <Button
            size="small"
            htmlType="button"
            className={styles.buttonDefault}
            style={{ backgroundColor: '#fff', padding: 0 }}
          >
            <Star1 size="20" color="#FFE000" variant="Bold" />
          </Button>
          <Button
            size="small"
            htmlType="button"
            className={styles.buttonDefault}
            onClick={() => {
              store.dispatch(setIsOverview(!isOverview));
            }}
          >
            <ArrowRight2
              size="18"
              color="#fff"
              className={clsx(styles.arrow, { [styles.open]: isOverview })}
            />
          </Button>
          <h1 className={styles.title_h1}>Overview</h1>
          <Flex gap={8} align="center">
            <Button
              htmlType="button"
              type="primary"
              danger
              size="small"
              className={styles.notify}
            >
              1
            </Button>
            <Button
              htmlType="button"
              type="primary"
              size="small"
              style={{ background: '#FDEB71' }}
              className={styles.notify}
            >
              2
            </Button>
            <Button
              htmlType="button"
              type="primary"
              size="small"
              style={{ background: '#C8C9CC' }}
              className={styles.notify}
            >
              1
            </Button>
          </Flex>
        </Flex>
        <Flex gap={12} wrap align="center">
          <Select
            defaultValue={localStorage.getItem('language') || 'en'}
            className="select_header display_1400"
            style={{ width: 100, height: 25 }}
            onChange={changeLanguage}
            options={listLanguges}
          />
          <Select
            defaultValue="CS1"
            className="select_header display_1400"
            style={{ width: 170, height: 25 }}
            onChange={(value: string) => {
              console.log(`selected ${value}`);
            }}
            options={[
              { value: 'CS1', label: 'CS1 - Bệnh viện Nam Học Hà Nội' },
              { value: 'CS2', label: 'CS2' },
            ]}
          />
          <SearchInput />
          <Badge size="small" count={99} overflowCount={9}>
            <Notification size="28" color="#FFF" variant="Bold" />
          </Badge>

          <DropdownProfile />
          <Img src={icons.menu} alt="#menu" style={{ cursor: 'pointer' }} />
        </Flex>
      </div>

      <div className={clsx({ [styles.container_overview]: isOverview })}>
        {isOverview && <Overview />}
      </div>
    </header>
  );
};
export default Header;
