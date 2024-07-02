import { useQuery } from '@tanstack/react-query';
import { Checkbox, Table, TableColumnsType } from 'antd';
import { useContext } from 'react';
import { useQueryHook } from '~/common/hooks/useQuery';
import PaginationCustom from '~/components/common/Pagination';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';
import {
  IContextAntibioticFamilies,
  ContextAntibioticFamilies,
} from '../../context';

const TableAntibioticFamilies = () => {
  const { detail, setDetail } = useContext<IContextAntibioticFamilies>(
    ContextAntibioticFamilies
  );
  const { getAllQueryParams } = useQueryHook();
  const { page, pageSize, _status, _departmentId, _search } =
    getAllQueryParams();
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.ListAntibioticFamilies, page, pageSize, _search],
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
      title: 'Family ID',
      dataIndex: 'fullName',
      key: 'fullName',
      fixed: 'left',
      width: 60,
      render: (_: any, record: any) => {
        return <>{record?._id || '---'}</>;
      },
    },
    {
      title: 'Abbreviation',
      dataIndex: 'description',
      key: 'description',
      width: 80,
      render: (_: any, record: any) => {
        return <>{record?.description || '---'}</>;
      },
    },

    {
      title: 'Description',
      dataIndex: 'department',
      key: 'department',
      width: 80,
      render: (_: any, { code }: any) => {
        return <>{code || '---'}</>;
      },
    },
    {
      title: 'Order',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Trạng thái',
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
  return (
    <div className="table_roche">
      <Table
        loading={isLoading}
        dataSource={
          data?.list?.map((item: any) => ({ ...item, key: item._id })) || []
        }
        columns={columns}
        style={{ height: 'calc(56vh + 34px)' }}
        scroll={{ x: 'max-content', y: '56vh' }} // Đảm bảo cuộn ngang và dọc
        pagination={false}
        rowClassName={(record) =>
          record.key === detail?.id ? 'editable-row active-row' : 'editable-row'
        }
        onRow={(record) => ({
          onClick: () => {
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
        page={Number(page)}
      />
    </div>
  );
};
export default TableAntibioticFamilies;
