import { useState } from 'react';
import { Input } from 'antd';
import styles from './FloatInput.module.scss';
import clsx from 'clsx';

const FloatInput = ({
  label,
  value,
  placeholder,
  type,
  required,
  ...props
}: any) => {
  const [focus, setFocus] = useState(false);

  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className={styles.float_label}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Input onChange={props.onChange} type={type} defaultValue={value} />
      <label
        className={clsx(styles.label, {
          [styles.as_label]: !!isOccupied,
          [styles.as_placeholder]: !!!isOccupied,
        })}
      >
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatInput;
