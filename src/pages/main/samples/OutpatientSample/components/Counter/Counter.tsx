import { CaretDownOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import {
  Badge,
  Button,
  Dropdown,
  Flex,
  MenuProps,
  message,
  Modal,
  Space,
} from 'antd';
import SttSampler from '../SttSampler/SttSampler';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';
import { useContext, useEffect } from 'react';
import { ContextDetailSampler, IContextDetailSampler } from '../../context';
const items: MenuProps['items'] = [
  {
    label: '2',
    key: '1',
  },
  {
    label: '1',
    key: '2',
  },
];
const { confirm } = Modal;
const Counter = () => {
  const { stt } = useContext<IContextDetailSampler>(ContextDetailSampler);
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F1') {
        event.preventDefault();
        showConfirmOrder();
      }
      if (event.key === 'F2') {
        event.preventDefault();
        showDeleteCurrentNumber();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const showConfirmOrder = () => {
    confirm({
      className: 'custom_confirm_model',
      title: 'Gọi số',
      icon: <ExclamationCircleFilled />,
      content: `Bạn có muốn gọi số ${stt?.orderNumber.toString().padStart(3, '0')} tiếp theo?`,
      onOk() {
        message.success('Gọi số tiếp theo thành công!');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const showDeleteCurrentNumber = () => {
    confirm({
      className: 'custom_confirm_model',
      title: 'Bỏ số',
      icon: <ExclamationCircleFilled />,
      content: `Bạn có muốn bỏ số ${stt?.currentNumber.toString().padStart(3, '0')}?`,
      onOk() {
        message.success('Bỏ số thành công!');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  return (
    <Flex gap={10} justify="space-between">
      <Flex gap={10}>
        <Dropdown menu={menuProps}>
          <Button
            icon={<CaretDownOutlined />}
            iconPosition="end"
            style={{ textAlign: 'start' }}
          >
            <span style={{ width: 140 }}> Quầy 1</span>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button
            style={{ width: 140 }}
            icon={<CaretDownOutlined />}
            iconPosition="end"
          >
            <Badge status="success" text=" Đang hoạt động" />
          </Button>
        </Dropdown>
      </Flex>
      <Flex gap={10}>
        <SttSampler />
        <Space style={{ fontWeight: 500 }}>
          Số đang phục vụ
          <Button type="primary" style={{ background: '#005AB4' }}>
            {`1`.padStart(3, '0')}
          </Button>
        </Space>
        <Button
          type="primary"
          style={{ background: '#2EA757' }}
          onClick={(event: any) => {
            event.preventDefault();
            showConfirmOrder();
          }}
        >
          Gọi số (F1)
        </Button>
        <Button
          type="primary"
          danger
          onClick={(event: any) => {
            event.preventDefault();
            showDeleteCurrentNumber();
          }}
        >
          Bỏ số (F2)
        </Button>
        <Img
          src={icons.iconList}
          alt="#list"
          width={24}
          style={{ cursor: 'pointer' }}
        />
      </Flex>
    </Flex>
  );
};
export default Counter;
