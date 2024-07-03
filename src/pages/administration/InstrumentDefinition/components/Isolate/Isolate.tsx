import { Button, Flex, Space, Transfer, TransferProps } from 'antd';
import { useState } from 'react';
interface RecordType {
  key: string;
  title: string;
  description: string;
}
const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));
const initialTargetKeys = mockData
  .filter((item) => Number(item.key) > 10)
  .map((item) => item.key);
const Isolate = () => {
  const [targetKeys, setTargetKeys] =
    useState<TransferProps['targetKeys']>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<TransferProps['targetKeys']>(
    []
  );

  const onChange: TransferProps['onChange'] = (
    nextTargetKeys,
    direction,
    moveKeys
  ) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  //   const onScroll: TransferProps['onScroll'] = (direction, e) => {
  //     console.log('direction:', direction);
  //     console.log('target:', e.target);
  //   };
  //   const moveToLeft = () => {
  //     setTargetKeys([]);
  //   };

  //   const moveToRight = () => {
  //     setTargetKeys(mockData.map((item) => item.key));
  //   };

  return (
    <div>
      {/* <Button onClick={moveToRight}>Chuyển tất cả sang phải</Button>
      <Button onClick={moveToLeft}>Chuyển tất cả sang trái</Button> */}
      <Transfer
        dataSource={mockData}
        titles={['Available values', 'Selected values']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        //onScroll={onScroll}
        render={(item) => item.title}
        selectionsIcon={<></>}
        //showSelectAll={false}
      />
      <Flex>
        <Space align="center" style={{ marginLeft: 'auto' }}>
          <Button type="primary" htmlType="submit">
            Confirm
          </Button>
          <Button htmlType="button" type="primary">
            Cancel
          </Button>
        </Space>
      </Flex>
    </div>
  );
};
export default Isolate;
