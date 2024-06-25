import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import styles from './BoxNotDelivered.module.scss';
import { Col, Divider, List, Row, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QUERY_KEY } from '~/constants/config/enum';
import crmAccountServices from '~/services/core/crmAccountServices';
import clsx from 'clsx';

interface PropBoxDelivered {}

const BoxNotDelivered: React.FC<PropBoxDelivered> = () => {
  const { data, fetchNextPage, error, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.Notifications],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await crmAccountServices.fetchAccounts({
        paging: {
          from: pageParam,
          count: 20,
        },
        keySearch: '',
      });

      return {
        items: res?.data?.list || [],
        total: res.data.count || 0,
      };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < Math.ceil(lastPage.total / 10)) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  if (error) return <div>Error loading data</div>;

  return (
    <div className={styles.card}>
      <div className={styles.boxTitle}>
        <div className={styles.title}>MẪU ĐÃ LẤY NHƯNG CHƯA GIAO</div>
      </div>
      <div className={styles.box}></div>
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
            dataSource={
              data?.pages
                .flat()
                .map((page) => page.items)
                .flat() || []
            }
            renderItem={(item: any) => (
              <List.Item key={item?._id}>
                <Row style={{ width: '100%', fontWeight: 700 }}>
                  <Col span={12}>{item.fullName}</Col>
                  <Col span={6}>Nam</Col>
                  <Col span={6}>{item.phoneNumber}</Col>
                </Row>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default BoxNotDelivered;
