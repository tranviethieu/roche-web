import React, { useEffect, useState } from 'react';
import {
  ConfigProvider,
  message,
  Popconfirm,
  Table,
  TableProps,
  Select,
  Flex,
} from 'antd';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';
import clsx from 'clsx';

interface SamplerType {
  key: React.Key;
  id?: string;
  name: string;
}
const data: SamplerType[] = [
  {
    key: '2',
    id: '2',
    name: 'Bệnh nhân đang mang thai',
  },
  {
    key: '3',
    name: 'Bệnh nhân đã từng có tai biến',
    id: '3',
  },
  {
    key: '4',
    name: 'Bệnh nhân có hút thuốc',
    id: '4',
  },
  {
    key: '5',
    name: 'Bệnh nhân có hút thuốc',
    id: '5',
  },
  {
    key: '6',
    name: 'Bệnh nhân có hút thuốc',
    id: '6',
  },
];
const TableSamplerType = () => {
  const [dataTable, setDataTable] = useState<SamplerType[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log(`Selected: ${value}`);
  };
  useEffect(() => {
    const obj = {
      key: '1',
      name: '1',
      id: '1',
    };
    if (!data.some((item) => item.id === obj.id)) {
      data.unshift(obj);
      setDataTable(data);
    }
  }, []);
  const columns: TableProps<SamplerType>['columns'] = [
    {
      title: 'Sample Type',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, record, index) => {
        if (index === 0) {
          return (
            <Select
              style={{ width: '300px' }}
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
      <Flex gap={5} wrap align="center" style={{ marginBottom: '8px' }}>
        <div className="step_custom active">1</div>
        <div className="text_title_custom active">Chọn loại bệnh phẩm</div>
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
          scroll={{ x: 'max-content', y: '160px' }}
          dataSource={dataTable}
          pagination={false}
        />
      </div>
    </ConfigProvider>
  );
};

export default TableSamplerType;
