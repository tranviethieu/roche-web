import { Dropdown, MenuProps, Space, message } from 'antd';
import React, { useState } from 'react';
import styles from './DropdownProfile.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import Dialog from '~/components/common/Dialog';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
import { store } from '~/redux/store';

const DropdownProfile: React.FC = () => {
  const [showPopupSignOut, setShowPopupSignOut] = useState<boolean>(false);
  const handleLogout = async () => {
    setShowPopupSignOut(false);
    store.dispatch(setStateLogin(false));
    store.dispatch(setToken(null));
    message.success('Logout success');
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/profile" style={{ fontSize: 'var(--size-label)' }}>
          Profile
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <div
          style={{ fontSize: 'var(--size-label)' }}
          onClick={() => {
            setShowPopupSignOut(true);
          }}
        >
          Logout
        </div>
      ),
    },
  ];
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
              <img
                src="/static/images/logo.png"
                alt="#roche"
                width={28}
                height={28}
                style={{ borderRadius: '50%' }}
              />
            </Space>
          </a>
        </Dropdown>
        <h1 className={clsx(styles.title_h1, 'display_1400')}>
          Nguyễn Huy Hùng
        </h1>
      </Space>
      <Dialog
        danger
        open={showPopupSignOut}
        onClose={() => setShowPopupSignOut(false)}
        onSubmit={handleLogout}
        titleCancel="Hủy"
        titleSubmit="Đăng xuất"
        title="Đăng xuất khỏi hệ thống!"
        note="Bạn có chắc chắn muốn đăng xuất khỏi hệ thống!"
      />
    </Space>
  );
};
export default DropdownProfile;
