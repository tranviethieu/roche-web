import { Badge, Button, Flex, Input, Select } from 'antd';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { ArrowLeft2, ArrowRight2, Star1, Notification } from 'iconsax-react';
import { RootState, store } from '~/redux/store';
import { Link } from 'react-router-dom';
import { setIsOverview } from '~/redux/reducer/site';
import { useSelector } from 'react-redux';
import MenuRoot from './components/MenuRoot';
import { Img } from 'react-image';
import { SearchProps } from 'antd/es/input';
import icons from '~/constants/images/icons';
import Overview from '~/pages/Overview';
import DropdownProfile from './components/DropdownProfile';
const { Search } = Input;
const Header = () => {
  const { isOverview } = useSelector((state: RootState) => state.site);
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value);
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

          <Search
            className="search_header"
            type="primary"
            placeholder="Tìm kiếm ..."
            allowClear
            onSearch={onSearch}
            style={{ width: 170 }}
          />
          <Badge count={10}>
            <Notification size="25" color="#FFF" variant="Bold" />
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
