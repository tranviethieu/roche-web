import { useQuery } from '@tanstack/react-query';
import { Checkbox, Table, TableColumnsType } from 'antd';
import { useContext } from 'react';
import { useQueryHook } from '~/common/hooks/useQuery';
import PaginationCustom from '~/components/common/Pagination';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';
import {
  ContextInstrumentDefinition,
  IContextInstrumentDefinition,
} from '../../context';
interface prop {
  height?: string;
}
const TableInstrumentDefinition = ({ height = '70vh' }: prop) => {
  const { detail, setDetail } = useContext<IContextInstrumentDefinition>(
    ContextInstrumentDefinition
  );
  const { getAllQueryParams, updateQueryParam } = useQueryHook();
  const { page, pageSize, _status, _departmentId, _search, id } =
    getAllQueryParams();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.ListResults, page, pageSize, _search],
    queryFn: () =>
      httpRequest({
        http: crmAccountServices.getListAccount({
          paging: {
            count: pageSize ? Number(pageSize) : 20,
            from: Number(pageSize || 20) * (Number(page || 1) - 1),
          },
          isActive: _status ? (_status == '1' ? true : false) : null,
          isDoctor: false,
          keySearch: _search ? (_search as string) : '',
          departmentId: _departmentId ? (_departmentId as string) : '',
        }),
      }),
  });
  const columns: TableColumnsType<any> = [
    {
      title: 'Type',
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
      width: 60,
      render: (_: any, record: any) => {
        return <>{record?._id || '---'}</>;
      },
    },
    {
      title: 'ID',
      dataIndex: 'description',
      key: 'description',
      width: 80,
      render: (_: any, record: any) => {
        return <>{record?.description || '---'}</>;
      },
    },

    {
      title: 'Version',
      dataIndex: 'department',
      key: 'department',
      width: 80,
      render: (_: any, { code }: any) => {
        return <>{code || '---'}</>;
      },
    },
    {
      title: 'Instrument name',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Location',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Communication description',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Trace',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center',
      fixed: 'right',
      width: 80,
      render: (_: any, { isActive }: any) => {
        return (
          <>
            <Checkbox defaultChecked={isActive}></Checkbox>
          </>
        );
      },
    },
    {
      title: 'External usage',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center',
      fixed: 'right',
      width: 80,
      render: (_: any, { isActive }: any) => {
        return (
          <>
            <Checkbox defaultChecked={isActive}></Checkbox>
          </>
        );
      },
    },
  ];
  console.log(detail);
  return (
    <div className="table_roche">
      <Table
        loading={isLoading}
        dataSource={
          data?.list?.map((item: any) => ({ ...item, key: item._id })) || []
        }
        columns={columns}
        //style={{ height: height }}
        scroll={{ x: 'max-content', y: height }} // Đảm bảo cuộn ngang và dọc
        pagination={false}
        rowClassName={(record) =>
          record.key === id ? 'editable-row active-row' : 'editable-row'
        }
        onRow={(record) => ({
          onClick: () => {
            updateQueryParam('id', record?._id as string);
            setDetail({
              id: record?._id,
              description: record?.description,
              type: record?.code,
              order: record?.seq,
            });
          },
        })}
      />
      <PaginationCustom
        total={Number(data?.count || 0)}
        pageSize={Number(pageSize) || 20}
        page={Number(page) || 1}
      />
    </div>
  );
};
export default TableInstrumentDefinition;
