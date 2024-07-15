import { ConfigProvider, Space, Table, TableProps } from 'antd';
import React from 'react';

interface DataType {
  key: React.Key;
  id?: string;
  name: string;
  status?: boolean;
  email?: string;
}
const ListDetailTube = () => {
  const data: DataType[] = [
    {
      key: '1',
      id: '1',
      name: 'Định lượng glucose [Máu]',
    },
    {
      key: '2',
      name: 'Định lượng Creatinin [Máu]',
      id: '2',
      status: true,
    },
    {
      key: '3',
      name: 'Đo hoạt độ AST',
      id: '3',
    },
  ];
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: 20,
      render: (_, record, index) => {
        console.log(record);
        return <>{index + 1}</>;
      },
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      width: 120,
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 60,
      key: 'status',
      align: 'center',
      render: (_, record) =>
        record.status ? (
          <div style={{ color: '#2EA757' }}>YES</div>
        ) : (
          <div style={{ color: '#FF1010' }}>NO</div>
        ),
    },
    {
      title: 'Tác vụ',
      key: 'action',
      width: 40,
      render: (_, record) => {
        console.log(record);
        return (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        );
      },
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#fff',
          },
        },
      }}
    >
      <Table columns={columns} dataSource={data} pagination={false} />
    </ConfigProvider>
  );
};
export default ListDetailTube;