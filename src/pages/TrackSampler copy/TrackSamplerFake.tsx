import React, { useEffect, useMemo, useState } from 'react';

import styles from './TrackSampler.module.scss';
import { Pagination, Table, TableColumnsType } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import crmAccountServices from '~/services/core/crmAccountServices';
import FilterTrackSampler from './components/FilterTrackSampler';
import { useLocation, useParams } from 'react-router-dom';
//import DoughnutChart from '~/components/common/DoughnutChart/DoughnutChart';
const TrackSamplerFake: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { tabId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const queryObj = Object.fromEntries(queryParams.entries());
  // Lấy giá trị của một query parameter cụ thể
  const { _status, _keyword, page, pageSize, _departmentId } = queryObj;
  const { data } = useQuery({
    queryKey: [QUERY_KEY.ListDoctors, _keyword, pageSize, page, _status],
    queryFn: () =>
      httpRequest({
        setLoading,
        http: crmAccountServices.getListAccount({
          paging: {
            count: pageSize ? Number(pageSize) : 20,
            from: Number(pageSize || 20) * (Number(page || 1) - 1),
          },
          isActive: _status ? (_status == '1' ? true : false) : null,
          isDoctor: false,
          keySearch: _keyword ? (_keyword as string) : '',
          departmentId: _departmentId ? (_departmentId as string) : '',
        }),
      }),
  });
  const { data: data2 } = useQuery({
    queryKey: [QUERY_KEY.ListDoctorsAll, _keyword, pageSize, page, _status],
    queryFn: () =>
      httpRequest({
        setLoading,
        http: crmAccountServices.getListAccountAll({
          paging: {
            count: pageSize ? Number(pageSize) : 20,
            from: Number(pageSize || 20) * (Number(page || 1) - 1),
          },
          isActive: _status ? (_status == '1' ? true : false) : null,
          isDoctor: false,
          keySearch: _keyword ? (_keyword as string) : '',
          departmentId: _departmentId ? (_departmentId as string) : '',
        }),
      }),
  });
  console.log(data2);
  console.log(data);
  const columns: TableColumnsType<any> = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: 50,
      fixed: 'left',
      align: 'center',
      render: (index) => {
        return (
          <>{(Number(page || 1) - 1) * Number(pageSize || 20) + index + 1}</>
        );
      },
    },
    {
      title: 'Họ và tên',
      dataIndex: 'fullName',
      width: 100,
      fixed: 'left',
      key: 'fullName',
      render: (_: any, record: any) => {
        return <>{record?.fullName || '---'}</>;
      },
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      width: 100,
      key: 'phoneNumber',
      render: (_: any, { phoneNumber }: any) => {
        return (
          <>
            <span className={styles.textTitle}>{phoneNumber || '---'}</span>
          </>
        );
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 100,
      key: 'email',
      render: (_: any, { email }: any) => {
        return (
          <>
            <span className={styles.textTitle}>{email || '---'}</span>
          </>
        );
      },
    },

    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      width: 100,
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
      width: 100,
      key: 'department',
      render: (_: any, { department }: any) => {
        return <>{department?.name || '---'}</>;
      },
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      width: 100,
      key: 'position',
      render: (_: any, { position }: any) => {
        return <>{position?.name || '---'}</>;
      },
    },

    {
      title: 'Trạng thái',
      dataIndex: 'isActive',
      width: 100,
      key: 'isActive',
      align: 'center',
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
  const processedData = useMemo(() => {
    return data?.list.map((row: any) => ({ ...row, key: row?._id })) || [];
  }, [data]);
  console.log(tabId);
  // const dataChart = [
  //   { value: 10, color: 'red' },
  //   { value: 20, color: 'green' },
  //   { value: 30, color: 'blue' },
  //   { value: 40, color: 'orange' },
  // ];
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F1') {
        event.preventDefault(); // Prevent the default action of the F1 key (e.g., opening help in browsers)
        alert('F1 key pressed');
        // Add your custom action here
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
      <FilterTrackSampler />
      <div className={styles.container}>
        <Table
          loading={loading}
          dataSource={processedData}
          columns={columns}
          scroll={{ x: 1500, y: 600 }}
          pagination={false}
        />
        <Pagination
          total={Number(processedData?.count || 0)}
          pageSize={Number(pageSize) || 20}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
        {/* <DoughnutChart data={dataChart} size={200} innerRadius={50} /> */}
      </div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>

      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>

      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
    </>
  );
};

export default TrackSamplerFake;
