import React, { useState } from 'react';
import {
  ConfigProvider,
  message,
  Popconfirm,
  Table,
  TableProps,
  Select,
} from 'antd';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';

interface SamplerType {
  key: React.Key;
  id?: string;
  name: string;
}

const TableSamplerType = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const data: SamplerType[] = [
    {
      key: '1',
      id: '1',
      name: 'Bệnh nhân đang mang thai',
    },
    {
      key: '2',
      name: 'Bệnh nhân đã từng có tai biến',
      id: '2',
    },
    {
      key: '3',
      name: 'Bệnh nhân có hút thuốc',
      id: '3',
    },
  ];

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log(`Selected: ${value}`);
  };

  const columns: TableProps<SamplerType>['columns'] = [
    {
      title: 'Sample Type',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, record, index) => {
        if (index === 0) {
          return (
            <Select
              style={{ width: '100%' }}
              value={selectedValue}
              onChange={handleSelectChange}
              placeholder="Select an option"
            >
              {data.map((item) => (
                <Select.Option key={item.key} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          );
        }
        return <>{index + 1}</>;
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
          title="Delete the list test"
          description="Are you sure to delete this list test?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            message.success('Remove');
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
    onChange: (selectedRowKeys: React.Key[], selectedRows: SamplerType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
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
      <div>Chọn loại bệnh phẩm</div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </ConfigProvider>
  );
};

export default TableSamplerType;
