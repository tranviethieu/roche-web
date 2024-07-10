import { Col, Row } from 'antd';
import ListTestKit from './components/ListTestKit/ListTestKit';
import ListTests from './components/ListTests/ListTests';

const RequestCard = () => {
  return (
    <section style={{ background: '#f2f4f7', padding: '10px', height: '100%' }}>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <ListTestKit />
        </Col>
        <Col span={24}>
          <ListTests />
        </Col>
      </Row>
    </section>
  );
};
export default RequestCard;
