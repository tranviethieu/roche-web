import { Button, Checkbox, CheckboxProps, Flex } from 'antd';
import { useContext, useEffect, useState } from 'react';
import {
  ContextDetailSampler,
  IContextDetailSampler,
} from '~/pages/main/samples/OutpatientSample/context';

const plainOptions = [
  { value: '1', name: 'Thuật toán 1' },
  { value: '2', name: 'Thuật toán 2' },
  { value: '3', name: 'Thuật toán 3' },
];

const AlgorithmSelection = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkedNotSelection, setCheckedNotSelection] = useState(false);
  const { setMicrobiology, microbiology } =
    useContext<IContextDetailSampler>(ContextDetailSampler);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: string[]) => {
    setCheckedList(list);
  };
  const handleMicrobiology = () => {
    alert(`${JSON.stringify(microbiology)}`);
  };
  useEffect(() => {
    if (checkedList.length > 0) {
      setCheckedNotSelection(false);
    } else {
      setCheckedNotSelection(true);
    }
    setMicrobiology({
      SampleType: microbiology?.SampleType ?? [],
      Algorithm: checkedList,
    });
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
        <div className="step_custom">4</div>
        <div className="text_title_custom">Chọn phương pháp nhuộm</div>
        <Button
          size="small"
          type="primary"
          style={{ marginLeft: 'auto' }}
          onClick={handleMicrobiology}
        >
          Confirm
        </Button>
      </Flex>
      <div
        style={{
          border: '0.6px solid #14477B',
          borderRadius: '8px',
          padding: '10px',
          height: '186px',
          background: '#fff',
        }}
      >
        <Flex vertical gap={8}>
          <Checkbox
            checked={checkedNotSelection}
            onChange={onChangeNotSelection}
          >
            Không Lựa chọn phương pháp nhuộm
          </Checkbox>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Lựa chọn phương pháp nhuộm
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
