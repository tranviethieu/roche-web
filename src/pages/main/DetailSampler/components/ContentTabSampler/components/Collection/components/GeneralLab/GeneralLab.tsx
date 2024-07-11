import { Col, Row } from 'antd';
import TableGeneralLab from './components/TableGeneralLab';

const GeneralLab = () => {
  return (
    <Row gutter={[10, 10]} style={{ width: '100%' }}>
      <Col span={18}>
        <TableGeneralLab />
      </Col>
      <Col span={6}>
        <>aa</>
      </Col>
    </Row>
  );
};
export default GeneralLab;
