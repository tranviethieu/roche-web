import { useState } from 'react';
import { ContextInstrumentDefinition, IInstrumentDefinition } from './context';
import { Button, Flex, Tabs, TabsProps } from 'antd';
import Detail from './components/Detail';
import TableInstrumentDefinition from './components/TableInstrumentDefinition/TableInstrumentDefinition';
import Isolate from './components/Isolate';
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: <Detail />,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: <Isolate />,
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];
const InstrumentDefinition = () => {
  const [detail, setDetail] = useState<IInstrumentDefinition | null>(null);
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <section className="container_roche">
      <div className="main_roche">
        <ContextInstrumentDefinition.Provider value={{ detail, setDetail }}>
          <TableInstrumentDefinition />
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
          {detail && (
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          )}
        </ContextInstrumentDefinition.Provider>
      </div>
    </section>
  );
};
export default InstrumentDefinition;
