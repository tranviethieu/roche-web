import { Fragment } from 'react/jsx-runtime';
import styles from './SplashScreen.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';
import { getItemStorage, setItemStorage } from '~/common/func/localStorage';
import { KEY_STORE } from '~/constants/config';
import { RootState, store } from '~/redux/store';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
import { setLoading } from '~/redux/reducer/site';
import { useSelector } from 'react-redux';
const SplashScreen: React.FC = () => {
  const { token, isLogin } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.site);
  // Set data vào redux từ localStorage
  useEffect(() => {
    (async () => {
      const state = await getItemStorage(KEY_STORE);

      if (!!state) {
        store.dispatch(setToken(state.token));
        store.dispatch(setStateLogin(state.isLogin));
      }
      console.log(state);
      store.dispatch(setLoading(false));
    })();
  }, []);
  // Lưu vào localStorage
  useEffect(() => {
    if (!loading) {
      setItemStorage(KEY_STORE, {
        token: token,
        isLogin: isLogin,
      });
    }
  }, [token, isLogin, loading]);

  return (
    <Fragment>
      <div className={clsx(styles.container, { [styles.close]: !loading })}>
        <div>
          <img
            className={styles.logo}
            src="/static/animation/loadingMeapp.gif"
            alt="SplashScreen"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default SplashScreen;
