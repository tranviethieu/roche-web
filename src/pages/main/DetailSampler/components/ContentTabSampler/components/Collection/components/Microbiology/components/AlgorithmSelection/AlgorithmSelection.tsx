import { Button, Checkbox, CheckboxProps, Flex } from 'antd';
import { useEffect, useState } from 'react';

const plainOptions = [
  { value: '1', name: 'Tay trái' },
  { value: '2', name: 'Tay phải' },
  { value: '3', name: 'Chân trái' },
];

const AlgorithmSelection = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkedNotSelection, setCheckedNotSelection] = useState(false);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: string[]) => {
    setCheckedList(list);
  };
  useEffect(() => {
    if (checkedList.length > 0) {
      setCheckedNotSelection(false);
    } else {
      setCheckedNotSelection(true);
    }
  }, [checkedList]);
  const onChangeNotSelection: CheckboxProps['onChange'] = (e) => {
    setCheckedNotSelection(e.target.checked);
    setCheckedList([]);
  };
  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(
      e.target.checked ? plainOptions.map((option) => option.value) : []
    );
  };
  return (
    <>
      <Flex gap={5} wrap align="center" style={{ marginBottom: '6px' }}>
        <div className="step_custom">2</div>
        <div className="text_title_custom">Chọn loại bệnh phẩm</div>
        <Button size="small" type="primary" style={{ marginLeft: 'auto' }}>
          Confirm
        </Button>
      </Flex>
      <div
        style={{
          border: '0.6px solid #14477B',
          borderRadius: '8px',
          padding: '10px',
          height: '190px',
          background: '#fff',
        }}
      >
        <Flex vertical gap={8}>
          <Checkbox
            checked={checkedNotSelection}
            onChange={onChangeNotSelection}
          >
            Không áp dụng vị trí lấy mẫu
          </Checkbox>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Chọn vị trí lấy mẫu
          </Checkbox>

          <Checkbox.Group
            style={{ width: '100%' }}
            onChange={onChange}
            value={checkedList}
          >
            <Flex gap={8} vertical style={{ marginLeft: '20px' }}>
              {plainOptions?.map((item) => (
                <Checkbox key={item.value} value={item.value}>
                  {item.name}
                </Checkbox>
              ))}
            </Flex>
          </Checkbox.Group>
        </Flex>
      </div>
    </>
  );
};
export default AlgorithmSelection;
