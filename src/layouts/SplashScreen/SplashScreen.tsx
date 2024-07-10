import { Fragment } from 'react/jsx-runtime';
import styles from './SplashScreen.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';
import { getItemStorage, setItemStorage } from '~/common/func/localStorage';
import { KEY_STORE } from '~/constants/config';
import { RootState, store } from '~/redux/store';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
import { setLoading, setVariableEnv } from '~/redux/reducer/site';
import { useSelector } from 'react-redux';
import { getEnvConfig } from '~/common/func/env';
import { Spin } from 'antd';
const SplashScreen: React.FC = () => {
  const { token, isLogin } = useSelector((state: RootState) => state.auth);
  const { loading, variableEnv } = useSelector(
    (state: RootState) => state.site
  );
  //const [isReadSuccess, setIsReadSuccess] = useState<boolean>(false);
  // Set data vào redux từ localStorage
  useEffect(() => {
    (async () => {
      const state = await getItemStorage(KEY_STORE);
      if (!!state) {
        store.dispatch(setToken(state.token));
        store.dispatch(setStateLogin(state.isLogin));
        store.dispatch(setVariableEnv(state.variableEnv));
      }
      store.dispatch(setLoading(false));
    })();
  }, []);
  // Đọc biến env từ folder public
  useEffect(() => {
    (async () => {
      const envConfig = await getEnvConfig();
      if (envConfig) {
        store.dispatch(
          setVariableEnv({
            publicApi: envConfig.PUBLIC_API,
            publicApiDev: envConfig.PUBLIC_API_DEV,
            publicApiSocket: envConfig.PUBLIC_SOCKET,
          })
        );
        //setIsReadSuccess(true); //set đẻ gọi api
      }
    })();
  }, []);
  // Lưu vào localStorage
  useEffect(() => {
    if (!loading) {
      setItemStorage(KEY_STORE, {
        token: token,
        isLogin: isLogin,
        variableEnv: variableEnv,
      });
    }
  }, [token, isLogin, loading, variableEnv]);

  return (
    <Fragment>
      <div className={clsx(styles.container, { [styles.close]: !loading })}>
        <div>
          <Spin tip="Roche" size="large">
            <div
              style={{
                padding: 50,
                borderRadius: 4,
              }}
            ></div>
          </Spin>
          {/* <img className={styles.logo} src={icons.logo} alt="SplashScreen" /> */}
        </div>
      </div>
    </Fragment>
  );
};
export default SplashScreen;
