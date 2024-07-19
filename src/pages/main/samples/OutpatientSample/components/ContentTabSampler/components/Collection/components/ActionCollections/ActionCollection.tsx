import {
  CaretDownOutlined,
  FilePdfOutlined,
  PrinterOutlined,
  RedoOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  CheckboxProps,
  Dropdown,
  Flex,
  MenuProps,
  Space,
} from 'antd';
const items: MenuProps['items'] = [
  {
    key: '1',
    label: <a>Printer 1</a>,
  },
];
const ActionCollection = () => {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Flex
      wrap
      align="center"
      justify="space-between"
      style={{ margin: 'auto 10px 0 100px' }}
    >
      <Flex>
        <Checkbox onChange={onChange}>Print upon label</Checkbox>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Printer 1
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Flex>
      <Flex gap={10}>
        <Button ghost type="primary" size="middle" icon={<RedoOutlined />}>
          Re-Send to infinity
        </Button>
        <Button ghost type="primary" size="middle" icon={<RedoOutlined />}>
          Re-Send status to HIS
        </Button>
        <Button
          ghost
          type="primary"
          size="middle"
          icon={<UnorderedListOutlined />}
        >
          Collect (F12)
        </Button>
        <Button ghost type="primary" size="middle" icon={<PrinterOutlined />}>
          Collection and next (F11)
        </Button>
        <Button ghost type="primary" size="middle" icon={<FilePdfOutlined />}>
          Export pdf
        </Button>
        <Button
          ghost
          type="default"
          size="middle"
          icon={<PrinterOutlined />}
          style={{ border: '1px solid #FA8C16', color: '#FA8C16' }}
        >
          Print/Re-print Barcode
        </Button>
        <Button danger type="default" size="middle">
          Un-Collect
        </Button>
        <Button danger type="default" size="middle">
          Cancel
        </Button>
        <Button type="primary" size="middle">
          Next (F10)
        </Button>
      </Flex>
    </Flex>
  );
};
export default ActionCollection;
