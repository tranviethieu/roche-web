import { Dropdown, MenuProps, Modal, Space, message } from 'antd';
import React from 'react';
import styles from './DropdownProfile.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
import { RootState, store } from '~/redux/store';
import { useSelector } from 'react-redux';
import { Img } from 'react-image';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
const { confirm } = Modal;

const DropdownProfile: React.FC = () => {
  const { infoAccount } = useSelector((state: RootState) => state.user);
  const { variableEnv } = useSelector((state: RootState) => state.site);
  const { t } = useTranslation();
  const handleLogout = async () => {
    store.dispatch(setStateLogin(false));
    store.dispatch(setToken(null));
    message.success('Logout success');
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/profile" style={{ fontSize: 'var(--size-label)' }}>
          {t('header.Profile')}
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <div
          style={{ fontSize: 'var(--size-label)' }}
          onClick={() => {
            showLogoutConfirm();
          }}
        >
          {t('header.Logout')}
        </div>
      ),
    },
  ];
  const showLogoutConfirm = () => {
    confirm({
      className: 'custom_confirm_model',
      title: t('header.logoutTitle'),
      destroyOnClose: false,
      icon: <ExclamationCircleFilled />,
      content: t('header.logoutContent'),
      okText: t('header.Logout'),
      okType: 'danger',
      cancelText: t('header.Cancel'),
      onOk() {
        handleLogout();
      },
    });
  };
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          menu={{ items }}
          placement="bottomLeft"
          arrow
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Img
                src={
                  variableEnv?.publicURLImage && infoAccount?.avatar
                    ? `${variableEnv?.publicURLImage}${infoAccount?.avatar}`
                    : '/static/images/logo.png'
                }
                alt={`#${infoAccount?.userName}`}
                width={28}
                height={28}
                style={{ borderRadius: '50%' }}
              />
              <h1 className={clsx(styles.title_h1, 'display_1400')}>
                {infoAccount?.fullName ?? ''}
              </h1>
            </Space>
          </a>
        </Dropdown>
      </Space>
    </Space>
  );
};
export default DropdownProfile;
