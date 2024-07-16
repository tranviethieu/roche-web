import { ConfigProvider, message, Popconfirm, Table, TableProps } from 'antd';
import React from 'react';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';

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
      render: (_: any, record: any) => (
        <div style={{ cursor: 'pointer' }}>YES</div>
      ),
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#fff',
            cellPaddingInline: 4,
            cellPaddingBlock: 4,
          },
        },
      }}
    >
      <Table columns={columns} dataSource={data} pagination={false} />
    </ConfigProvider>
  );
};
export default IssuesSampler;
