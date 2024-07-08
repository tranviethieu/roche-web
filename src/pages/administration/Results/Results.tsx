import { ContextResults, IResults } from './context';
import { lazy, Suspense, useState } from 'react';
import TableResults from './components/TableResults';
import { Button, Flex, Spin } from 'antd';
const AddResults = lazy(() => delayForDemo(import('./components/AddResults')));
const Results = () => {
  const [detail, setDetail] = useState<IResults | null>(null);
  const headleAdd = () => {
    setDetail(null);
  };
  return (
    <section className="container_roche">
      <Flex className="main_roche" vertical>
        <ContextResults.Provider value={{ detail, setDetail }}>
          <TableResults />
          <Flex
            style={{ width: '100%', margin: '10px 0' }}
            justify="flex-end"
            align="center"
            gap={10}
          >
            <Button htmlType="button" type="primary" onClick={headleAdd}>
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
            <Suspense fallback={<Spin size="large" />}>
              <AddResults />
            </Suspense>
          )}
        </ContextResults.Provider>
      </Flex>
    </section>
  );
};

export default Results;
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
