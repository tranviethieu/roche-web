import { useQuery } from '@tanstack/react-query';
import { Table, TableColumnsType } from 'antd';
import { useQueryHook } from '~/common/hooks/useQuery';
import PaginationCustom from '~/components/common/Pagination';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';

const Perform = () => {
  const { getAllQueryParams, updateQueryParam } = useQueryHook();
  const { page, pageSize, _status, _departmentId, _search, id } =
    getAllQueryParams();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.Perform, page, pageSize, _search],
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
      title: 'Order ID HIS',
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
      width: 60,
      render: (_: any, record: any) => {
        return <>{record?._id || '---'}</>;
      },
    },
    {
      title: 'Order ID LIS',
      dataIndex: 'description',
      key: 'description',
      width: 80,
      render: (_: any, record: any) => {
        return <>{record?.description || '---'}</>;
      },
    },

    {
      title: 'Xét nghiệm',
      dataIndex: 'department',
      key: 'department',
      width: 80,
      render: (_: any, { code }: any) => {
        return <>{code || '---'}</>;
      },
    },
    {
      title: 'Test ID',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Đơn vị',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Dải tham chiếu',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Vị trí',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Tác vụ',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
  ];
  return (
    <div className="table_roche" style={{ marginRight: 10 }}>
      <Table
        loading={isLoading}
        dataSource={
          data?.list?.map((item: any) => ({ ...item, key: item._id })) || []
        }
        columns={columns}
        //style={{ height: height }}
        scroll={{ x: 'max-content', y: 'calc(100vh - 420px)' }} // Đảm bảo cuộn ngang và dọc
        pagination={false}
      />
      <PaginationCustom
        total={Number(data?.count || 0)}
        pageSize={Number(pageSize) || 20}
        page={Number(page) || 1}
      />
    </div>
  );
};
export default Perform;
