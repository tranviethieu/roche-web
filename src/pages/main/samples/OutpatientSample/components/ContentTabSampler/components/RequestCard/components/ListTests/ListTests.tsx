import { useState } from 'react';
import styles from './ListTests.module.scss';
import { Flex } from 'antd';
import BoxTestResults from './components/BoxTestResults';

const ListTests = () => {
  const [checkedHS, setCheckedHS] = useState<string[]>();

  return (
    <div className={styles.listContainer}>
      <div className={styles.header}>2. Danh sách xét nghiệm</div>
      <Flex gap={4} style={{ padding: '0 4px 4px 4px', width: '100%' }}>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Hóa sinh"
            idScroll="idHS"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
            color="#389E0D"
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Miễn dịch"
            idScroll="idMD"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
            color="#D46B08"
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Đông máu"
            idScroll="idDM"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
            color="#1D39C4"
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Khí máu"
            idScroll="idKm"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
            color="#CF1322"
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Nhóm máu - Máu lắng"
            idScroll="idML"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Nước tiều định lượng"
            idScroll="idDL"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Nước tiều định lượng"
            idScroll="idDL"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Nước tiều định lượng"
            idScroll="idDL1"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
          />
        </div>
        <div className={styles.itemFlex}>
          <BoxTestResults
            title="Nước tiều định lượng"
            idScroll="idDL2"
            height="calc(100vh - 630px)"
            checked={checkedHS}
            setChecked={setCheckedHS}
          />
        </div>
      </Flex>
    </div>
  );
};
export default ListTests;
