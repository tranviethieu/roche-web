import { Pagination, PaginationProps } from 'antd';
import { useQueryHook } from '~/common/hooks/useQuery';

interface propPagination {
  total: number;
  page: number;
  pageSize: number;
}
const PaginationCustom: React.FC<propPagination> = ({
  total = 0,
  pageSize = 20,
  page = 1,
}) => {
  const { setQueryParams } = useQueryHook();
  const onChange: PaginationProps['onChange'] = (pageNumber, pageSize) => {
    setQueryParams({
      page: pageNumber ? pageNumber.toString() : '1',
      pageSize: pageSize.toString(),
    });
  };

  return (
    <Pagination
      total={total}
      defaultCurrent={page}
      defaultPageSize={pageSize}
      //pageSize={Number(pageSize)}
      showQuickJumper
      showSizeChanger
      showTotal={(total) => `Tổng số lượng: ${total}`}
      locale={{ jump_to: 'Đi tới trang', page: '' }}
      onChange={onChange}
    />
  );
};
export default PaginationCustom;
