import { useMutation } from '@tanstack/react-query';
import {
  Button,
  Checkbox,
  ConfigProvider,
  Flex,
  Input,
  InputNumber,
  InputNumberProps,
  message,
  Popconfirm,
  Space,
  Table,
  TableProps,
} from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Img } from 'react-image';
import icons from '~/constants/images/icons';
import {
  ContextDetailSampler,
  IContextDetailSampler,
} from '~/pages/main/samples/OutpatientSample/context';
import { httpRequest } from '~/services';
import dMTestServices from '~/services/roche/dMTestServices';

interface IBlockID {
  key: React.Key;
  id: string;
  name: string;
}
const dataSelect: IBlockID[] = [
  { key: '10', id: '10', name: '101B1' },
  { key: '11', id: '11', name: '101B1' },
  { key: '2', id: '2', name: '101B1' },
  { key: '3', id: '3', name: '101B1' },
  { key: '4', id: '4', name: '101B1' },
  { key: '5', id: '5', name: '101B1' },
  { key: '6', id: '6', name: '101B1' },
];
export interface createBlockId {
  sampleTypeCode: string;
  userName: string;
  name: string;
  note: string;
}
const ListBlockID = () => {
  const [dataTable, setDataTable] = useState<IBlockID[]>([]);
  const [numberIdBlock, setNumberIdBlock] = useState<number>(0);
  const { pathology, setPathology, id } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const addBlockIdMutation = useMutation({
    mutationFn: (body: createBlockId[]) =>
      httpRequest({
        showMessageFailed: true,
        showMessageSuccess: true,
        //setLoading: setLoadingCreate,
        http: dMTestServices.CreateBlock({ blockIds: body }),
      }),
    onSuccess(data) {
      console.log(data);
    },
  });
  useEffect(() => {
    if (pathology.sampleTypes.length > 0) {
      setDataTable(dataSelect);
      setPathology({
        ...pathology,
        blockIds: dataSelect.map((item) => item.id),
      });
    } else {
      setDataTable([]);
      setPathology({
        ...pathology,
        blockIds: [],
      });
    }
  }, [pathology.sampleTypes]);

  const columns: TableProps<IBlockID>['columns'] = [
    {
      title: 'Block ID',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, record) => {
        return <>{record.name}</>;
      },
    },
    {
      title: 'No Slide',
      dataIndex: 'NoSlide',
      key: 'NoSlide',
      render: (_, record) => {
        return (
          <>
            <Checkbox />
          </>
        );
      },
    },
    {
      title: 'Tác vụ',
      dataIndex: 'status',
      width: 60,
      key: 'status',
      align: 'center',
      render: (_: any, record: any) => (
        <Popconfirm
          title="Delete the list IBlockID"
          description="Are you sure to delete this list IBlockID?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => {
            message.success(`Remove ${record.name}`);
            setDataTable((prev) =>
              prev.filter((item) => item.id !== record.id)
            );
          }}
        >
          <div style={{ cursor: 'pointer' }}>
            <Img src={icons.remove} />
          </div>
        </Popconfirm>
      ),
    },
  ];
  const addBlockIds = () => {
    const arrayBlocks: createBlockId[] = [];
    if (pathology?.sampleTypes.length > 0) {
      pathology?.sampleTypes.map((item) => {
        for (let i = 0; i < Number(numberIdBlock); i++) {
          arrayBlocks.push({
            name: `${item}B${i}`,
            sampleTypeCode: item,
            note: '',
            userName: id as string,
          });
        }
      });
    }
    return arrayBlocks;
  };

  const handleAddBlockId = async () => {
    const a = addBlockIds();
    console.log(a);
    addBlockIdMutation.mutate(addBlockIds());
  };
  const onChangeInputNumber: InputNumberProps['onChange'] = (value) => {
    setNumberIdBlock(Number(value));
  };
  return (
    <>
      <Flex justify="space-between" style={{ marginBottom: '6px' }}>
        <Space wrap align="center">
          <div className="step_custom">2</div>
          <div className="text_title_custom">Chọn Block</div>
        </Space>
        <Space wrap align="center">
          <InputNumber
            size="small"
            min={0}
            max={100}
            style={{ width: 80 }}
            defaultValue={numberIdBlock}
            placeholder="Nhập SL Block"
            onChange={onChangeInputNumber}
          />
          <Button type="default" size="small" onClick={handleAddBlockId}>
            Tạo
          </Button>
        </Space>
      </Flex>
      <div
        style={{
          border: '0.6px solid #14477B',
          borderRadius: '8px',
          padding: '1px',
        }}
      >
        <Table
          columns={columns}
          scroll={{ x: 'max-content', y: '154px' }}
          dataSource={dataTable}
          pagination={false}
        />
      </div>
    </>
  );
};
export default ListBlockID;
