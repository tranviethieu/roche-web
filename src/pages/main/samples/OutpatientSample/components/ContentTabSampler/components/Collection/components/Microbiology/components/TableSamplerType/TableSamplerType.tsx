import React, { useContext, useEffect, useState } from 'react';
import { message, Popconfirm, Table, TableProps, Select, Space } from 'antd';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';
import {
  ContextDetailSampler,
  IContextDetailSampler,
} from '~/pages/main/samples/OutpatientSample/context';
import { listSamplerType } from '~/types/sampler.type';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import sampleServices from '~/services/roche/sampleServices';
interface ITableSamplerType {
  key: React.Key;
  id: number;
  name: string;
}
const TableSamplerType = () => {
  const [dataTable, setDataTable] = useState<ITableSamplerType[]>([]);

  const { setMicrobiology, microbiology } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const [selectedValue, setSelectedValue] = useState<number | undefined>(
    undefined
  );

  const handleSelectChange = (value: number) => {
    setSelectedValue(value);
  };
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.ListSamplerType],
    queryFn: () =>
      httpRequest({
        http: sampleServices.GetAllSampleTypePaging({
          keywords: '',
          pageCurrent: 1,
          pageSize: 1000,
          name: '',
        }),
      }),
  });

  useEffect(() => {
    if (selectedValue) {
      const obj: ITableSamplerType = data?.listRecords.find(
        (item: listSamplerType) => item.id === selectedValue
      );
      if (obj && !dataTable.some((item) => item.id === obj.id)) {
        setDataTable((prev) => [...prev, { ...obj, key: obj.id }]);
        console.log(dataTable);
        message.success(`Thêm mới ${obj.name} thành công`);
      }
    }
  }, [selectedValue, dataTable, data?.listRecords]);

  const columns: TableProps<ITableSamplerType>['columns'] = [
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
      render: (_: any, record) => (
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
              {data?.listRecords &&
                data.listRecords.map((item: listSamplerType, index: number) => (
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
    <>
      <Space wrap align="center" style={{ marginBottom: '8px' }}>
        <div className="step_custom active">1</div>
        <div className="text_title_custom active">Chọn loại bệnh phẩm</div>
      </Space>
      <div
        style={{
          border: '0.6px solid #14477B',
          borderRadius: '8px',
          padding: '1px',
          minHeight: '195px',
          background: '#fff',
        }}
      >
        <Table
          loading={isLoading}
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
          scroll={{ x: 'max-content', y: '140px' }}
          dataSource={dataTable}
          pagination={false}
        />
      </div>
    </>
  );
};

export default TableSamplerType;
