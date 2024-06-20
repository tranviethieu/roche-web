import { Col, Row } from 'antd';
import styles from './PipeDetail.module.scss';
const PipeDetail: React.FC = () => {
  return (
    <>
      <div className={styles.pipeDetail}>
        <h4>Thông tin chi tiết ống </h4>
        <Row>
          <Col span={12}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
          <Col span={12}></Col>
          <Col span={6}></Col>
          <Col span={6}></Col>
        </Row>
      </div>
    </>
  );
};
export default PipeDetail;
