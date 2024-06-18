import { logout, setStateLogin, setToken } from '~/redux/reducer/auth';

import { store } from '~/redux/store';
import { setInfoAccount } from '~/redux/reducer/user';
import {
  setListMenuAccount,
  setPermissionsAccount,
} from '~/redux/reducer/permisstion';
import {
  toastError,
  toastInfo,
  toastSuccess,
  toastWarn,
} from '~/common/func/toast';

enum RESULT {
  SUCCESSFUL = 0,
}

export const httpRequest = async ({
  http,
  setLoading,
  setError,
  msgSuccess = 'Thành công',
  showMessageSuccess = false,
  showMessageFailed = false,
  onError,
}: {
  http: any;
  setLoading?: (any: any) => void;
  onError?: () => void;
  setError?: (err: any) => void;
  showMessageSuccess?: boolean;
  showMessageFailed?: boolean;
  msgSuccess?: string;
}) => {
  setLoading && setLoading(() => true);

  try {
    const res: any = await http;

    if (!Array.isArray(res)) {
      if (res?.code == RESULT.SUCCESSFUL) {
        showMessageSuccess && toastSuccess({ msg: msgSuccess || res?.message });
        return res?.data || true;
      } else {
        if (setError) {
          setError(res?.message);
        }
        onError && onError();
        showMessageFailed && toastWarn({ msg: res?.message });
        return res?.data;
      }
    }
    if (Array.isArray(res)) {
      return res.map((res: any) => res.data);
    }
  } catch (err: any) {
    if (err?.error?.code == 401 || err?.response?.status == 401) {
      store.dispatch(logout());
      store.dispatch(setStateLogin(false));
      store.dispatch(setToken(null));
      store.dispatch(setInfoAccount(null));
      store.dispatch(setPermissionsAccount([]));
      store.dispatch(setListMenuAccount([]));
      showMessageFailed && toastError({ msg: 'Hết hạn đăng nhập' });
    } else if (typeof err == 'string') {
      showMessageFailed && toastWarn({ msg: err || 'Có lỗi đã xảy ra' });
    } else if (err?.code == 'ERR_NETWORK' || err?.code == 'ECONNABORTED') {
      showMessageFailed && toastInfo({ msg: 'Kiểm tra kết nối internet' });
    }
    if (setError) {
      setError(err);
    }
  } finally {
    setLoading && setLoading(() => false);
  }
};
