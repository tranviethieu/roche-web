import { Row, Col } from 'antd';
import ListSampleType from './components/ListSampleType';
import ListBlockID from './components/ListBlockID';
import ListSlideID from './components/ListSlideID';
import AlgorithmSelection from './components/AlgorithmSelection';
import TablePathology from './components/TablePathology';

const Pathology = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col span={6}>
        <ListSampleType />
      </Col>
      <Col span={6}>
        <ListBlockID />
      </Col>
      <Col span={6}>
        <ListSlideID />
      </Col>
      <Col span={6}>
        <AlgorithmSelection />
      </Col>
      <Col span={24}>
        <TablePathology />
      </Col>
    </Row>
  );
};
export default Pathology;
