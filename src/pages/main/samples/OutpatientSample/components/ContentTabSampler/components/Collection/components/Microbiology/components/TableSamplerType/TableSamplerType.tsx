import React, { useContext, useEffect, useState } from 'react';
import {
  ConfigProvider,
  message,
  Popconfirm,
  Table,
  TableProps,
  Select,
  Space,
} from 'antd';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';
import {
  ContextDetailSampler,
  IContextDetailSampler,
} from '~/pages/main/samples/OutpatientSample/context';

interface SamplerType {
  key: React.Key;
  id?: string;
  name: string;
}

const dataSelect: SamplerType[] = [
  { key: '10', id: '10', name: 'Sample type - 1' },
  { key: '11', id: '11', name: 'Sample type - 2' },
  { key: '2', id: '2', name: 'Sample type - 12' },
  { key: '3', id: '3', name: 'Sample type - 13' },
  { key: '4', id: '4', name: 'Sample type - 14' },
  { key: '5', id: '5', name: 'Sample type - 15' },
  { key: '6', id: '6', name: 'Sample type - 16' },
];

const TableSamplerType = () => {
  const [dataTable, setDataTable] = useState<SamplerType[]>([]);
  const { setMicrobiology, microbiology } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    setDataTable([
      { key: '10', id: '10', name: 'Sample type - 1' },
      { key: '11', id: '11', name: 'Sample type - 2' },
    ]);
  }, []);

  useEffect(() => {
    if (selectedValue) {
      const obj = dataSelect.find((item) => item.id === selectedValue);
      if (obj && !dataTable.some((item) => item.id === obj.id)) {
        setDataTable((prev) => [...prev, obj]);
        message.success(`Thêm mới ${obj.name} thành công`);
      }
    }
  }, [selectedValue, dataTable]);

  const columns: TableProps<SamplerType>['columns'] = [
    {
      title: 'Sample Type',
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
          title="Delete the list Sample Type"
          description="Are you sure to delete this list Sample Type?"
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
      setMicrobiology({
        SampleType: selectedRowKeys.map((key) => String(key)),
        Algorithm: microbiology?.Algorithm ?? [],
      });
    },
  };

  const CustomHeaderWrapper: React.FC<{
    columns: TableProps<any>['columns'];
  }> = ({ columns, ...props }) => (
    <>
      <thead {...props} />

      <tbody>
        <tr>
          <th
            colSpan={columns?.length}
            style={{ textAlign: 'left', padding: '4px 30px' }}
          >
            <Select
              style={{ width: '300px' }}
              value={selectedValue}
              onChange={handleSelectChange}
              placeholder="Sample Type"
              allowClear
            >
              {dataSelect.map((item, index) => (
                <Select.Option key={index} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </th>
        </tr>
      </tbody>
    </>
  );

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
      <Space wrap align="center" style={{ marginBottom: '8px' }}>
        <div className="step_custom active">1</div>
        <div className="text_title_custom active">Chọn loại bệnh phẩm</div>
      </Space>
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
          components={{
            header: {
              wrapper: (props: any) => (
                <CustomHeaderWrapper {...props} columns={columns} />
              ),
            },
          }}
          columns={columns}
          scroll={{ x: 'max-content', y: '120px' }}
          dataSource={dataTable}
          pagination={false}
        />
      </div>
    </ConfigProvider>
  );
};

export default TableSamplerType;
