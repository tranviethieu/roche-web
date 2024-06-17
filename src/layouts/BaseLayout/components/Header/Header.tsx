import {
  Button,
  Flex,
  Popconfirm,
  PopconfirmProps,
  Select,
  message,
} from 'antd';
import styles from './Header.module.scss';
import { QuestionCircleOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { ArrowDown2, ArrowRight2 } from 'iconsax-react';
import { logout } from '~/redux/reducer/auth';
import { RootState, store } from '~/redux/store';
import { Link } from 'react-router-dom';
import ListMenu from '../ListMenu';
import Overview from '~/pages/Overview';
import { setIsOverview } from '~/redux/reducer/site';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isOverview } = useSelector((state: RootState) => state.site);
  const confirm: PopconfirmProps['onConfirm'] = () => {
    store.dispatch(logout());
    message.success('Logout success');
  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
  };
  return (
    <header
      className={styles.header}
      style={{ height: isOverview ? '100vh' : '' }}
    >
      <div className={styles.container}>
        <div>
          <Flex gap={12} align="center">
            <Button
              size="small"
              htmlType="button"
              onClick={() => {
                store.dispatch(setIsOverview(!isOverview));
              }}
            >
              <ArrowRight2
                size="18"
                className={clsx(styles.arrow, { [styles.open]: isOverview })}
              />
            </Button>
            <h1 className={styles.title}>Overview</h1>
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
            ></Button>
            <Button
              htmlType="button"
              type="primary"
              size="small"
              style={{ background: '#C8C9CC' }}
              className={styles.notify}
            ></Button>
          </Flex>
        </div>

        <Flex gap={12}>
          <Select
            defaultValue="ROCHE"
            style={{ width: 162, height: 40 }}
            onChange={(value: string) => {
              console.log(`selected ${value}`);
            }}
            options={[
              { value: 'ROCHE', label: 'ROCHE' },
              { value: 'ROCHE1', label: 'ROCHE1' },
            ]}
          />
          <Select
            defaultValue="CS1"
            style={{ width: 162, height: 40 }}
            onChange={(value: string) => {
              console.log(`selected ${value}`);
            }}
            options={[
              { value: 'CS1', label: 'CS1' },
              { value: 'CS2', label: 'CS2' },
            ]}
          />
          <Popconfirm
            title="Do you want to Logout?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Confirm"
            cancelText="Cancel"
          >
            <Button
              size="small"
              htmlType="button"
              className={styles.buttonLogout}
            >
              Logout
            </Button>
          </Popconfirm>
          <Button
            size="small"
            htmlType="button"
            className={styles.buttonDefault}
          >
            <ArrowDown2 size="24" />
          </Button>
          <Button
            size="small"
            htmlType="button"
            className={styles.buttonDefault}
          >
            <QuestionCircleOutlined />
          </Button>
          <Link to="">
            <img src="/static/images/logo.png" alt="#roche" />
          </Link>
        </Flex>
      </div>
      <div className={clsx({ [styles.container_overview]: isOverview })}>
        {isOverview && <Overview />}
        <ListMenu checkOverview={isOverview} />
      </div>
    </header>
  );
};
export default Header;
