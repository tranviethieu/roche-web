import { PiWarningCircleBold } from 'react-icons/pi';
import Popup from '~/components/common/Popup';
import { PropsDialog } from './interfaces';
import clsx from 'clsx';
import styles from './Dialog.module.scss';
import { useStyleClass } from '~/common/hooks/usStyleClass';
import { Button, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

function Dialog({
  titleSubmit = 'Xác nhận',
  titleCancel = 'Hủy bỏ',
  Icon,
  className,
  ...props
}: PropsDialog) {
  const styleClass = useStyleClass(props, styles);
  return (
    <>
      <Modal
        title={
          <>
            <ExclamationCircleFilled /> {props.title}
          </>
        }
        open={props.open}
        onOk={props.onSubmit}
        onCancel={props.onClose}
        closeIcon={false}
      >
        <p className={styles.note}>{props?.note}</p>
      </Modal>
      {/* <Popup open={props.open} onClose={props.onClose}>
        <div className={clsx('effectZoom', styles.popup, styleClass)}>
          <div className={styles.groupBtnPopup}>
            <Button
              className="click"
              type="default"
              onClick={props.onClose}
              size="small"
              style={{ minWidth: '60px' }}
            >
              {titleCancel}
            </Button>
            <Button
              className="click"
              size="small"
              type="primary"
              onClick={props.onSubmit}
              {...props}
            >
              {titleSubmit}
            </Button>
          </div>
        </div>
      </Popup> */}
    </>
  );
}

export default Dialog;
