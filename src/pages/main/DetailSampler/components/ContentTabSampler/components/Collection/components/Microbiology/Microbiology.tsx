import { Col, Row } from 'antd';
import TableGeneralLab from '../TableGeneralLab';
import TableSamplerType from './components/TableSamplerType';
import AlgorithmSelection from './components/AlgorithmSelection';

const Microbiology = () => {
  return (
    <Row gutter={[10, 10]}>
      <Col span={14}>
        <TableSamplerType />
      </Col>
      <Col span={10}>
        <AlgorithmSelection />
      </Col>
      <Col span={24}>
        <TableGeneralLab />
      </Col>
    </Row>
  );
};
export default Microbiology;
