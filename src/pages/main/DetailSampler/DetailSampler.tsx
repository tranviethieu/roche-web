import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex, MenuProps, Space, message } from 'antd';
import styles from './DetailSampler.module.scss';
import React, { useState } from 'react';
import { ContextDetailSampler } from './context';
import SttSampler from './components/SttSampler/SttSampler';
import { Sampler } from '~/types/sampler.type';
import { useParams } from 'react-router-dom';
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
  const [data, setData] = useState<Sampler | null>(null);
  const [stt, setStt] = useState<number>(0);
  const { id } = useParams();
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
        <ContextDetailSampler.Provider value={{ data, setData, stt, setStt }}>
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
            <SttSampler />
          </Flex>
        </ContextDetailSampler.Provider>
      </div>
    </section>
  );
};
export default DetailSampler;
