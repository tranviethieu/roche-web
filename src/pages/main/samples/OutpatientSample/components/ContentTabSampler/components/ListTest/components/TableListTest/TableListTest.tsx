import { useMutation, useQuery } from '@tanstack/react-query';
import { message, Popconfirm, Table, TableColumnsType } from 'antd';
import { useState } from 'react';
import { useQueryHook } from '~/common/hooks/useQuery';
import PaginationCustom from '~/components/common/Pagination';
import { QUERY_KEY } from '~/constants/config/enum';
import { setLoading } from '~/redux/reducer/site';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';
const TableListTest = () => {
  const { getAllQueryParams } = useQueryHook();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { page, pageSize, _status, _departmentId, _search } =
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
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      width: 80,
      render: (_: any, record: any) => {
        console.log(record);
        return (
          <>
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
          </>
        );
      },
    },
  ];
  const allApiSelected = useMutation({
    mutationFn: () =>
      httpRequest({
        setLoading: setLoading,
        http: crmAccountServices.getListAccount({
          paging: {
            count: 10000,
            from: 0,
          },
          isActive: _status ? (_status == '1' ? true : false) : null,
          isDoctor: false,
          keySearch: _search ? (_search as string) : '',
          departmentId: _departmentId ? (_departmentId as string) : '',
        }),
      }),
    onSuccess(data) {
      if (data) {
        const keys: React.Key[] = data?.list?.map((item: any) => item._id);
        setSelectedRowKeys(keys);
      }
    },
  });
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const onSelectAllChange = (selected: boolean) => {
    if (selected) {
      allApiSelected.mutate();
    } else {
      setSelectedRowKeys([]);
    }
  };
  return (
    <div className="table_roche" style={{ marginRight: 10 }}>
      <Table
        loading={isLoading}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
          onSelectAll: onSelectAllChange,
          preserveSelectedRowKeys: true,
          selections: [Table.SELECTION_NONE],
        }}
        dataSource={
          data?.list?.map((item: any) => ({ ...item, key: item._id })) || []
        }
        columns={columns}
        scroll={{ x: 'max-content', y: 'calc(100vh - 420px)' }}
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
export default TableListTest;
