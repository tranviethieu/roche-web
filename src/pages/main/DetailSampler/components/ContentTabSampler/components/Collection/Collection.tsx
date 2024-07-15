import {
  Badge,
  Col,
  Collapse,
  CollapseProps,
  Row,
  Skeleton,
  Tabs,
  TabsProps,
} from 'antd';
import styles from './Collection.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CSSProperties,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useQueryHook } from '~/common/hooks/useQuery';
import ListDetailTube from './components/ListDetailTube';
import ProcessSampler from './components/ProcessSampler';
import IssuesSampler from './components/IssuesSampler';
import ListImageSampler from './components/ListImageSampler';
import { ArrowCircleRight } from 'iconsax-react';
import Microbiology from './components/Microbiology';

const TableGeneralLab = lazy(() =>
  delayForDemo(import('./components/TableGeneralLab'))
);

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
  panelStyle
) => [
  {
    key: '1',
    label: 'Thông tin chi tiết ống',
    children: <ListDetailTube />,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'Tiến trình',
    children: <ProcessSampler />,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'Issues',
    children: <IssuesSampler />,
    style: panelStyle,
  },
  {
    key: '4',
    label: 'Image',
    children: <ListImageSampler />,
    style: panelStyle,
  },
];
const items: TabsProps['items'] = [
  {
    key: 'generalLab',
    label: <Badge status="success" text="General lab" />,
    children: (
      <Suspense fallback={<Skeleton paragraph={{ rows: 10 }} />}>
        <TableGeneralLab />
      </Suspense>
    ),
  },
  {
    key: 'microbiology',
    label: <Badge status="success" text="Microbiology" />,
    children: <Microbiology />,
  },
  {
    key: 'pathology',
    label: <Badge status="success" text="Pathology" />,
    children: <></>,
  },
  {
    key: 'interview',
    label: 'Interview',
    children: <></>,
  },
];
const Collection = () => {
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState<string>('');
  const { getQueryParamValue } = useQueryHook();

  useEffect(() => {
    const tab = getQueryParamValue('tab');
    if (tab) {
      setActiveKey(tab);
    } else {
      setActiveKey('generalLab');
    }
  }, [getQueryParamValue, search]);

  const handleTabChange = useCallback(
    (key: string) => {
      navigate(
        {
          hash,
          search: `?tab=${key}`,
        },
        { replace: true, state: { scroll: false } }
      );
    },
    [hash, navigate]
  );
  const panelStyle: React.CSSProperties = {
    border: 'none',
    padding: 0,
  };
  return (
    <section className={styles.container}>
      <Row gutter={[10, 10]} style={{ width: '100%' }}>
        <Col span={19}>
          <Tabs
            activeKey={activeKey}
            size="small"
            tabPosition={'left'}
            items={items}
            onChange={handleTabChange}
          />
        </Col>
        <Col span={5}>
          <div className={styles.box}>
            <Collapse
              className="collapse_custom"
              defaultActiveKey={['1', '2', '3', '4']}
              expandIcon={({ isActive }) => (
                <ArrowCircleRight
                  size="20"
                  color="#80ACD9"
                  variant="Bold"
                  style={{
                    transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                />
              )}
              items={getItems(panelStyle)}
              style={{ border: 'none', borderRadius: 8 }}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default Collection;

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}
