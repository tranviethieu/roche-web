import { toast } from 'react-toastify';

export const toastText = ({ msg }: { msg: string }) =>
  toast.info(msg, {
    position: 'top-center',
    hideProgressBar: true,
    closeButton: false,
    className: 'toastify-custom',
    icon: false,
  });

export const toastSuccess = ({ msg }: { msg: string }) =>
  toast.success(msg, {
    hideProgressBar: true,
    closeButton: true,
    className: 'toastify-custom-success',
  });

export const toastInfo = ({ msg }: { msg: string }) =>
  toast.info(msg, {
    hideProgressBar: true,
    closeButton: true,
    className: 'toastify-custom-info',
  });
export const toastWarn = ({ msg }: { msg: string }) =>
  toast.warning(msg, {
    hideProgressBar: true,
    closeButton: true,
    className: 'toastify-custom-warn',
  });
export const toastError = ({ msg }: { msg: string }) =>
  toast.error(msg, {
    hideProgressBar: true,
    closeButton: true,
    className: 'toastify-custom-error',
  });
