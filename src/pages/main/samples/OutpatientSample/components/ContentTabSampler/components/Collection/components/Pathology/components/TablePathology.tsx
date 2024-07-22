import { useQuery } from '@tanstack/react-query';
import {
  ConfigProvider,
  message,
  Popconfirm,
  Table,
  TableColumnsType,
} from 'antd';
import { Img } from 'react-image';
import { QUERY_KEY } from '~/constants/config/enum';
import icons from '~/constants/images/icons';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';

const TablePathology = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.TablePathology],
    queryFn: () =>
      httpRequest({
        http: crmAccountServices.getListAccount({
          paging: {
            count: 20,
            from: 0,
          },
          isActive: null,
          isDoctor: false,
          keySearch: '',
          departmentId: '',
        }),
      }),
  });
  const columns: TableColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'Order ID HIS',
      key: 'fullName',
      fixed: 'left',
      width: 60,
      render: (_: any, record: any) => {
        return <>{record?._id || '---'}</>;
      },
    },
    {
      title: 'Sample type',
      dataIndex: 'description',
      key: 'description',
      width: 80,
      render: (_: any, record: any) => {
        return <>{record?.description || '---'}</>;
      },
    },

    {
      title: 'Priority',
      dataIndex: 'department',
      key: 'department',
      width: 80,
      render: (_: any, { code }: any) => {
        return <>{code || '---'}</>;
      },
    },
    {
      title: 'Block ID',
      dataIndex: 'position',
      key: 'position',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Slide ID',
      dataIndex: 'Slide',
      key: 'Slide',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Thuật toán',
      dataIndex: 'tt',
      key: 'tt',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>{seq || '---'}</>;
      },
    },
    {
      title: 'Collection',
      dataIndex: 'Collection',
      key: 'Collection',
      width: 80,
      render: (_: any, { seq }: any) => {
        return <>Thuật toán 1</>;
      },
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isActive',
      key: 'isActive',
      align: 'center',
      fixed: 'right',
      width: 80,
      render: (_: any, record: any) => (
        <Popconfirm
          title="Delete the pathology"
          description="Are you sure to delete this pathology?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            message.success(`Remove ${record.name}`);
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
          scroll={{ x: 'max-content', y: '31vh' }}
          dataSource={
            data?.list?.map((item: any) => ({ ...item, key: item._id })) || []
          }
          pagination={false}
        />
      </div>
    </ConfigProvider>
  );
};
export default TablePathology;
