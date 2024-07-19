import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import styles from './BoxNotDelivered.module.scss';
import { Badge, Col, Divider, List, Row, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QUERY_KEY } from '~/constants/config/enum';
import clsx from 'clsx';
import { httpRequest } from '~/services';
import { useNavigate } from 'react-router-dom';
import sampleServices from '~/services/roche/sampleServices';
import { useQueryHook } from '~/common/hooks/useQuery';

interface PropBoxDelivered {}

const BoxNotDelivered: React.FC<PropBoxDelivered> = () => {
  const navigate = useNavigate();
  const { getAllQueryParams } = useQueryHook();
  const { _timeHour, _sampleTypeCode, _departmentID, _cateTestID, _search } =
    getAllQueryParams();
  const { data, fetchNextPage, isSuccess, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.Notifications],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await httpRequest({
          http: sampleServices.GetListSampleNotTranfer({
            keywords: _search as string,
            pageCurrent: pageParam == 0 ? 1 : pageParam,
            pageSize: 20,
            unitID: 10,
            sampleTypeCode: _sampleTypeCode ? _sampleTypeCode : 'string',
            departmentID: _departmentID ? Number(_departmentID) : 0,
            timeHour: _timeHour ? Number(_timeHour) : 0,
            cateTestID: _cateTestID ? Number(_cateTestID) : 0,
          }),
        });
        return {
          items: res?.listRecords || [],
          total: res.totalPage || 0,
        };
      },
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < Math.ceil(lastPage.total / 20)) {
          return pages.length + 1;
        }
        return undefined;
      },
    });

  //if (error) return <div>Error loading data</div>;

  return (
    <div className={styles.card}>
      <div style={{ width: '100%' }}>
        <div className={styles.boxTitle}>
          <div className={styles.title}>
            MẪU ĐÃ LẤY NHƯNG CHƯA GIAO
            <Badge
              className="site-badge-count-109"
              count={data?.pages ? data?.pages[0]?.total : 0}
              style={{ backgroundColor: '#2EA757' }}
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.box}></div> */}
      <Row
        style={{
          width: '100%',
          fontWeight: 700,
          padding: '0 8px',
          color: '#003972',
          fontSize: 'var(--size-label)',
        }}
      >
        <Col span={12}>Tên bệnh nhân</Col>
        <Col span={6}>Giới tính</Col>
        <Col span={6}>Tuble ID</Col>
      </Row>
      <div
        id="scrollableBoxNotDelivered"
        className={clsx(styles.scrollable, 'cls_custom_scroll')}
      >
        <InfiniteScroll
          dataLength={data?.pages.flat().length || 0}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={
            isSuccess && <Skeleton title paragraph={{ rows: 2 }} active />
          }
          // endMessage={
          //   isSuccess && <Divider plain>It is all, nothing more </Divider>
          // }
          scrollableTarget="scrollableBoxNotDelivered"
        >
          <List
            dataSource={data?.pages.flat().flatMap((page) => page.items) || []}
            renderItem={(item: any) => (
              <List.Item
                key={item?.patientId}
                className={styles?.item_active}
                onClick={() => {
                  navigate(`/main/sampler/detailSampler/${item?.patientId}`);
                }}
              >
                <Row style={{ width: '100%', fontWeight: 500 }}>
                  <Col span={12}>{item.fullName}</Col>
                  <Col span={6}>
                    {item.gender == 1 ? 'Nam' : item.gender == 2 ? 'Nữ' : '---'}
                  </Col>
                  <Col span={6}>{item.phoneNumber}</Col>
                </Row>
              </List.Item>
            )}
          />
          {isFetching && isSuccess && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Skeleton title paragraph={{ rows: 2 }} active />
            </div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default BoxNotDelivered;
