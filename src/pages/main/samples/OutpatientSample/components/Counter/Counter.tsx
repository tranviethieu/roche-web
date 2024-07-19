import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Flex, MenuProps, message, Space } from 'antd';
import SttSampler from '../SttSampler/SttSampler';
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
const Counter = () => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Flex gap={10} justify="space-between">
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
      </Flex>
      <SttSampler />
    </Flex>
  );
};
export default Counter;
