import { useQuery } from '@tanstack/react-query';
import { Table, TableColumnsType } from 'antd';

import PaginationCustom from '~/components/common/Pagination';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';
import { useQueryHook } from '~/common/hooks/useQuery';
const Results = () => {
  const { getAllQueryParams } = useQueryHook();
  const { page, pageSize, _status, _departmentId, _search } =
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
      title: 'Họ và tên',
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
      render: (_: any, record: any) => {
        return <>{record?.fullName || '---'}</>;
      },
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (_: any, { gender }: any) => {
        return (
          <>
            {gender == 'male'
              ? 'Nam'
              : gender == 'female'
                ? 'Nữ'
                : gender == null
                  ? 'Khác'
                  : '---'}
          </>
        );
      },
    },
    {
      title: 'Bộ phận',
      dataIndex: 'department',
      key: 'department',
      render: (_: any, { department }: any) => {
        return <>{department?.name || '---'}</>;
      },
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      key: 'position',
      render: (_: any, { position }: any) => {
        return <>{position?.name || '---'}</>;
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center',
      fixed: 'right',
      render: (_: any, { isActive }: any) => {
        return (
          <>
            {isActive ? (
              <span style={{ color: '#4979D1', fontWeight: '600' }}>
                Hoạt động
              </span>
            ) : (
              <span style={{ color: '#E45454', fontWeight: '600' }}>Dừng</span>
            )}
          </>
        );
      },
    },
  ];
  console.log(page);
  return (
    <section className="container_roche">
      <div className="main_roche">
        <div className="table_roche">
          <Table
            loading={isLoading}
            dataSource={
              data?.list?.map((item: any) => ({ ...item, key: item._id })) || []
            }
            columns={columns}
            scroll={{ x: 'max-content', y: '50vh' }} // Đảm bảo cuộn ngang và dọc
            pagination={false}
          />
          <PaginationCustom
            total={Number(data?.count || 0)}
            pageSize={Number(pageSize) || 20}
            page={Number(page)}
          />
        </div>
      </div>
    </section>
  );
};

export default Results;
