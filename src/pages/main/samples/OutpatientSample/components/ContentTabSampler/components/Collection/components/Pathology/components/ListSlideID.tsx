import {
  Button,
  ConfigProvider,
  Flex,
  Input,
  message,
  Popconfirm,
  Space,
  Table,
  TableProps,
} from 'antd';
import { useEffect, useState } from 'react';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';

interface ISlideID {
  key: React.Key;
  id: string;
  name: string;
}
const dataSelect: ISlideID[] = [
  { key: '10', id: '10', name: '101B1' },
  { key: '11', id: '11', name: '101B1' },
  { key: '2', id: '2', name: '101B1' },
  { key: '3', id: '3', name: '101B1' },
  { key: '4', id: '4', name: '101B1' },
  { key: '5', id: '5', name: '101B1' },
  { key: '6', id: '6', name: '101B1' },
];
const ListSlideID = () => {
  const [dataTable, setDataTable] = useState<ISlideID[]>([]);
  useEffect(() => {
    setDataTable(dataSelect);
  }, []);
  const columns: TableProps<ISlideID>['columns'] = [
    {
      title: 'Slide ID',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, record) => {
        return <>{record.name}</>;
      },
    },
    {
      title: 'Tác vụ',
      dataIndex: 'status',
      width: 60,
      key: 'status',
      align: 'center',
      render: (_: any, record: any) => (
        <Popconfirm
          title="Delete the list Slide ID"
          description="Are you sure to delete this list Slide ID?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            message.success(`Remove ${record.name}`);
            setDataTable((prev) =>
              prev.filter((item) => item.id !== record.id)
            );
          }}
        >
          <div style={{ cursor: 'pointer' }}>
            <Img src={icons.remove} />
          </div>
        </Popconfirm>
      ),
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      console.log('selectedRows: ', selectedRowKeys);
    },
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            rowHoverBg: 'rgba(0, 0, 0, 0.06)',
            cellPaddingInline: 4,
            cellPaddingBlock: 4,
          },
        },
      }}
    >
      <Flex justify="space-between" style={{ marginBottom: '6px' }}>
        <Space wrap align="center">
          <div className="step_custom">3</div>
          <div className="text_title_custom">Chọn Slide</div>
        </Space>
        <Space wrap align="center">
          <Input
            size="small"
            style={{ width: 80 }}
            placeholder="Nhập SL Slide ID"
          />
          <Button type="default" size="small">
            Tạo
          </Button>
        </Space>
      </Flex>
      <div
        style={{
          border: '0.6px solid #14477B',
          borderRadius: '8px',
          padding: '1px',
        }}
      >
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          columns={columns}
          scroll={{ x: 'max-content', y: '154px' }}
          dataSource={dataTable}
          pagination={false}
        />
      </div>
    </ConfigProvider>
  );
};
export default ListSlideID;
