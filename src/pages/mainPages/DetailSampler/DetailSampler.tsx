import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex, Input, MenuProps, Space, message } from 'antd';
import styles from './DetailSampler.module.scss';
import React from 'react';
const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
];

const DetailSampler: React.FC = () => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <section>
      <div className={styles.form_section}>
        <Flex gap={10}>
          <Dropdown menu={menuProps}>
            <Button style={{ width: 120 }}>
              <Space>
                Quầy 1
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={menuProps}>
            <Button style={{ width: 120 }}>
              <Space>
                Đang hoạt động
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Input min={1} max={10} />
        </Flex>
      </div>
    </section>
  );
};
export default DetailSampler;
