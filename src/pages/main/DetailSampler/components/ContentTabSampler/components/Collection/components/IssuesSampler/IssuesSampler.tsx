import { ConfigProvider, Table, TableProps } from 'antd';
import React from 'react';

interface DataType {
  key: React.Key;
  id?: string;
  name: string;
  status?: boolean;
  email?: string;
}
const IssuesSampler = () => {
  const data: DataType[] = [
    {
      key: '1',
      id: '1',
      name: 'Bệnh nhân đang mang thai',
    },
    {
      key: '2',
      name: 'Bệnh nhân đã từng có tai biến',
      id: '2',
      status: true,
    },
    {
      key: '3',
      name: 'Bệnh nhân có hút thuốc',
      id: '3',
    },
    // {
    //   key: '4',
    //   name: 'Bệnh nhân có ??',
    //   id: '4',
    // },
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
export default IssuesSampler;
