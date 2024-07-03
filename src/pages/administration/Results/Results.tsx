import { ContextResults, IResults } from './context';
import { useState } from 'react';
import TableResults from './components/TableResults';
import AddResults from './components/AddResults';
import { Button, Flex } from 'antd';
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
          <AddResults />
        </ContextResults.Provider>
      </Flex>
    </section>
  );
};

export default Results;
