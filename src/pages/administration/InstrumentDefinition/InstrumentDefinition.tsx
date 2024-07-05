import { useEffect, useState } from 'react';
import { ContextInstrumentDefinition, IInstrumentDefinition } from './context';
import { Button, Flex, TabsProps } from 'antd';
import Detail from './components/Detail';
import TableInstrumentDefinition from './components/TableInstrumentDefinition/TableInstrumentDefinition';
import Isolate from './components/Isolate';

import TabsCustom from '~/components/common/TabsCustom';
import { useQueryHook } from '~/common/hooks/useQuery';

const items: TabsProps['items'] = [
  {
    key: 'detail',
    label: 'Details',
    children: <Detail />,
  },
  {
    key: 'detail1',
    label: 'Tab2',
    children: <Isolate />,
  },
  {
    key: 'detail2',
    label: 'Tab3',
    children: 'Content of Tab Pane 3',
  },
];

const InstrumentDefinition = () => {
  const [detail, setDetail] = useState<IInstrumentDefinition | null>(null);
  const { getQueryParamValue } = useQueryHook();
  const id = getQueryParamValue('id');
  useEffect(() => {
    if (id) setDetail((prev: any) => ({ ...prev, id }));
    else setDetail(null);
  }, [id]);
  return (
    <section className="container_roche">
      <div className="main_roche">
        <ContextInstrumentDefinition.Provider value={{ detail, setDetail }}>
          <TableInstrumentDefinition height={detail?.id ? '40vh' : '70vh'} />
          <Flex
            style={{ width: '100%', margin: '10px 0' }}
            justify="flex-end"
            align="center"
            gap={10}
          >
            <Button
              htmlType="button"
              type="primary"
              onClick={() => {
                setDetail(null);
              }}
              disabled={!!id}
            >
              Add
            </Button>
            <Button htmlType="button" type="primary">
              Disable
            </Button>
            <Button htmlType="button" type="primary">
              Filter
            </Button>
          </Flex>
          {detail?.id && <TabsCustom items={items} activeKeyDefault="detail" />}
        </ContextInstrumentDefinition.Provider>
      </div>
    </section>
  );
};
export default InstrumentDefinition;
