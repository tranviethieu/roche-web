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
const ListSampleType = () => {
  const [dataTable, setDataTable] = useState<ITableSamplerType[]>([]);
  const { pathology, setPathology } =
    useContext<IContextDetailSampler>(ContextDetailSampler);

  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleSelectChange = (value: string) => {
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
      const obj: any = data?.listRecords.find(
        (item: listSamplerType) => item.code === selectedValue
      );
      if (obj && !dataTable.some((item) => item.key === obj.code)) {
        setDataTable((prev) => [
          ...prev,
          { id: obj?.id, name: obj?.name, key: obj?.code },
        ]);
        //message.success(`Thêm mới ${obj.name} thành công`);
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
      setPathology({
        ...pathology,
        sampleTypes:
          selectedRowKeys.length > 0
            ? selectedRowKeys.map((key) => String(key))
            : [],
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
              style={{ width: '200px' }}
              value={selectedValue}
              onChange={handleSelectChange}
              placeholder="Sample Type"
              allowClear
            >
              {data?.listRecords &&
                data.listRecords.map((item: listSamplerType, index: number) => (
                  <Select.Option key={index} value={item.code}>
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
          //minHeight: '160px',
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
          scroll={{ x: 'max-content', y: '130px' }}
          dataSource={dataTable}
          pagination={false}
        />
      </div>
    </>
  );
};

export default ListSampleType;
