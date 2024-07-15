import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import styles from './BoxNotDelivered.module.scss';
import { Badge, Col, Divider, List, Row, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QUERY_KEY } from '~/constants/config/enum';
import crmAccountServices from '~/services/core/crmAccountServices';
import clsx from 'clsx';
import { httpRequest } from '~/services';

interface PropBoxDelivered {}

const BoxNotDelivered: React.FC<PropBoxDelivered> = () => {
  const { data, fetchNextPage, error, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.Notifications],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await httpRequest({
          http: crmAccountServices.fetchAccounts({
            paging: {
              from: pageParam,
              count: 20,
            },
            keySearch: '',
          }),
        });
        return {
          items: res?.list || [],
          total: res.count || 0,
        };
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        if (pages.length < Math.ceil(lastPage.total / 20)) {
          return pages.length + 1;
        }
        return undefined;
      },
    });

  if (error) return <div>Error loading data</div>;

  return (
    <div className={styles.card}>
      <div style={{ width: '100%' }}>
        <div className={styles.boxTitle}>
          <div className={styles.title}>
            MẪU ĐÃ LẤY NHƯNG CHƯA GIAO
            <Badge
              className="site-badge-count-109"
              count={109}
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
          loader={<Skeleton title paragraph={{ rows: 2 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableBoxNotDelivered"
        >
          <List
            dataSource={data?.pages.flat().flatMap((page) => page.items) || []}
            renderItem={(item: any) => (
              <List.Item key={item?._id}>
                <Row style={{ width: '100%', fontWeight: 500 }}>
                  <Col span={12}>{item.fullName}</Col>
                  <Col span={6}>Nam</Col>
                  <Col span={6}>{item.phoneNumber}</Col>
                </Row>
              </List.Item>
            )}
          />
          {isFetching && (
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
