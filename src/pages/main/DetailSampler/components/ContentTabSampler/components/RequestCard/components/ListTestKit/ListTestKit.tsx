import { Checkbox, Col, GetProp, List, Row } from 'antd';
import styles from './ListTestKit.module.scss';
interface DataItem {
  id: string;
  name: string;
}
const data = [
  {
    id: '1',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '2',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '3',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '4',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '5',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '6',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '7',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '8',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '1',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '2',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '3',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '4',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '5',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '6',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '7',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '8',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '1',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '2',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '3',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '4',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '5',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '6',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '7',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '8',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '1',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '2',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '3',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '4',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '5',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '6',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '7',
    name: '(900010) Điện giải đồ ',
  },
  {
    id: '8',
    name: '(900010) Điện giải đồ ',
  },
];
const ListTestKit = () => {
  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues
  ) => {
    console.log('TestKit = ', checkedValues);
  };
  const listTestData = chunkArray(data, 6);
  return (
    <Checkbox.Group
      className={styles.listContainer}
      onChange={onChange}
      defaultValue={['1', '3']}
    >
      <div className={styles.header}>1. Danh sách bộ xét nghiệm</div>
      <List
        size="small"
        className={styles.listContent}
        //bordered
        dataSource={listTestData}
        renderItem={(item) => (
          <List.Item>
            <Row style={{ width: '100%' }}>
              {item.map((e: DataItem, index: number) => (
                <Col key={index} span={4}>
                  <Checkbox value={e.id}>{e.name}</Checkbox>
                </Col>
              ))}
            </Row>
          </List.Item>
        )}
      />
    </Checkbox.Group>
  );
};
export default ListTestKit;
const chunkArray = (array: DataItem[], size: number): DataItem[][] => {
  const result: DataItem[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
