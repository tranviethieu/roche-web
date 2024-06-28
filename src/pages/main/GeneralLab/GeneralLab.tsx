import { Flex, Table, TableProps } from 'antd';
import React, { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
interface RecordType {
  id: number;
  order: string;
  number: string;
  listPriority: string;
  tubeID: string;
  collection: string;
  status: boolean;
  totalTube: number;
  sampleType: string;
}
const GeneralLab: React.FC = () => {
  const tblRef: Parameters<typeof Table>[0]['ref'] = useRef(null);
  //const [data, setData] = useState<RecordType[]>([]);

  const fixedColumns: TableProps<RecordType>['columns'] = [
    {
      title: 'Order ID LIS',
      dataIndex: 'order',
      width: 20,

      onCell: (_, rowIndex) => ({
        colSpan: rowIndex !== undefined && rowIndex < 4 ? 0 : 1,
        rowSpan: rowIndex !== undefined && rowIndex === 0 ? 4 : 1,
        className:
          rowIndex !== undefined && rowIndex === 0 ? 'grouped-cell left' : '',
      }),
      render: (_: any, record: any, rowIndex) => {
        if (rowIndex === 0) {
          return (
            <div className="cell-left">
              <div style={{ margin: 'auto 10px' }}>{combinedText || '---'}</div>
            </div>
          );
        }
        return <> {record?.order || '---'}</>;
      },
    },
    {
      title: 'Lần lấy mẫu thứ',
      dataIndex: 'number',
      width: 20,
      onCell: (_, rowIndex) => ({
        colSpan: rowIndex !== undefined && rowIndex < 4 ? 0 : 1,
        rowSpan: rowIndex !== undefined && rowIndex === 0 ? 4 : 1,
        className:
          rowIndex !== undefined && rowIndex === 0
            ? 'grouped-cell left right'
            : '',
      }),
      render: (_: any, record: any, rowIndex) => {
        if (rowIndex === 0) {
          return (
            <div className="cell-center">
              <div style={{ margin: 'auto 10px' }}>
                {record?.number || '---'}
              </div>
            </div>
          );
        }
        return <> {record?.number || '---'}</>;
      },
    },
    {
      title: 'Lis priority',
      width: 20,
      dataIndex: 'LastName',
      onCell: (_, rowIndex) => ({
        colSpan: rowIndex !== undefined && rowIndex < 4 ? 0 : 1,
        rowSpan: rowIndex !== undefined && rowIndex === 0 ? 4 : 1,
        className:
          rowIndex !== undefined && rowIndex === 0 ? 'grouped-cell right' : '',
      }),
      render: (_: any, record: any, rowIndex) => {
        if (rowIndex === 0) {
          return (
            <div className="cell-right">
              <div style={{ margin: 'auto 10px' }}>
                {record?.listPriority || '---'}
              </div>
            </div>
          );
        }
        return <> {record?.listPriority || '---'}</>;
      },
    },

    {
      title: 'Sample Type',
      width: 35,
      dataIndex: 'sampleType',
      onCell: (_, rowIndex) => ({
        rowSpan: rowIndex !== undefined && rowIndex === 0 ? 3 : 1,
        className: 'sampleType',
      }),
      render: (_: any, record: any, rowIndex) => {
        if (rowIndex === 0) {
          return (
            <div className="type_green">
              <div>{record?.sampleType || '---'}</div>
            </div>
          );
        }
        if (rowIndex > 2) {
          return (
            <div
              className={
                rowIndex === 3
                  ? 'type_red'
                  : rowIndex === 4
                    ? 'type_orange'
                    : 'type_gray'
              }
            >
              <div>{record?.sampleType || '---'}</div>
            </div>
          );
        }
      },
    },
    {
      title: 'Tube Type',
      width: 35,
      align: 'center',
      dataIndex: 'tubeID',
      onCell: () => ({
        className: 'tubeType',
      }),
      render: (_: any, record: any, rowIndex) => {
        return (
          <div
            className={
              rowIndex === 3
                ? 'type_red'
                : rowIndex === 4
                  ? 'type_orange'
                  : rowIndex == 5
                    ? 'type_gray'
                    : 'type_green2'
            }
          >
            <div>{record?.sampleType || '---'}</div>
          </div>
        );
      },
    },
    {
      title: 'Màu ống',
      width: 25,
      align: 'center',
      dataIndex: 'address3',
      render: (_: any, rowIndex: any) => {
        return (
          <Flex>
            <div
              className={rowIndex < 4 ? 'tubecolor_red' : 'tubecolor_blue'}
            ></div>
          </Flex>
        );
      },
    },
    {
      title: 'Tube ID',
      width: 25,
      align: 'center',
      dataIndex: 'tubeID',
      render: (_: any, record: any) => {
        return record?.tubeID || '---';
      },
    },
    {
      title: 'TG Cảnh báo (Phút)',
      width: 25,
      align: 'center',
      dataIndex: 'timeNotify',
      onCell: () => ({
        className: 'timeNotify',
      }),
      render: (_: any, record: any) => {
        if (Number(record?.id * 15) < 45) {
          return (
            <div className="type_green2">
              <div>{Number(record?.id * 15)}</div>
            </div>
          );
        } else {
          return (
            <div className="type_red">
              <div>{Number(record?.id * 15)}</div>
            </div>
          );
        }
      },
    },
    {
      title: 'Số lượng test từng ống ',
      width: 30,
      align: 'center',
      dataIndex: 'test',
      render: (_: any) => {
        return '2/10';
      },
    },
    {
      title: 'Trạng thái in',
      width: 25,
      align: 'center',
      dataIndex: 'test',
      render: (_: any, record: any) => {
        if (record.id < 3) {
          return <div>Đã in</div>;
        } else {
          return <div style={{ color: '#E45454' }}>Chưa in</div>;
        }
      },
    },
    {
      title: 'Collection',
      width: 30,
      align: 'center',
      dataIndex: 'test',
      onCell: () => ({
        className: 'collection',
      }),
      render: (_: any, record: any) => {
        if (record.id < 3) {
          return (
            <div className="type_gray">
              <div>Collected</div>
            </div>
          );
        } else {
          return (
            <div className="type_green2">
              <div>Yes</div>
            </div>
          );
        }
      },
    },
    {
      title: 'Tác vụ ',
      width: 30,
      align: 'center',
      dataIndex: 'test',
      render: (_: any) => {
        return (
          <Link to={'/'} style={{ fontSize: '10px', color: '#4979D1' }}>
            Xem chi tiết
          </Link>
        );
      },
    },
  ];

  const getData = (count: number) => {
    const data: RecordType[] = new Array(count).fill(null).map((_, index) => ({
      id: index,
      number: `${(index + 1).toString(16)}`,
      order: `${(index + 1).toString(16)}`,
      listPriority: `S`,
      tubeID: `Tube ID -${index + 1}`,
      collection: `Collected`,
      status: index % 3 === 0 ? true : false,
      totalTube: index + 15,
      sampleType: `Sample type -${index + 1}`,
    }));

    return data;
  };
  const data = getData(6);
  const combinedText = useMemo(() => {
    return data
      .slice(0, 3)
      .map((record) => record.order)
      .join(', ');
  }, [data]);
  return (
    <>
      <Table
        className="table_generalLab"
        bordered={false}
        virtual
        columns={fixedColumns}
        scroll={{ x: 'auto', y: 600 }}
        rowKey="id"
        dataSource={data}
        pagination={false}
        ref={tblRef}
        rowSelection={{
          type: 'checkbox',
          columnWidth: 15,
        }}
      />
    </>
  );
};
export default GeneralLab;
