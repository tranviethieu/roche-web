import { ConfigProvider, Steps } from 'antd';
const description = 'Nguyễn Thị Minh.';
const items = [
  {
    title: 'Lấy mẫu',
    description,
  },
  {
    title: 'Giao mẫu',
    description,
  },
  {
    title: 'Nhận mẫu',
    description,
  },
];
const ProcessSampler = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            titleLineHeight: 20,
            customIconSize: 20,
          },
        },
      }}
    >
      <section style={{ padding: '10px 0' }}>
        <Steps
          size="small"
          current={1}
          labelPlacement="vertical"
          items={items}
        />
      </section>
    </ConfigProvider>
  );
};
export default ProcessSampler;
