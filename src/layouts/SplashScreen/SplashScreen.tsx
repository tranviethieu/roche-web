import { Fragment } from 'react/jsx-runtime';
import styles from './SplashScreen.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { getItemStorage, setItemStorage } from '~/common/func/localStorage';
import { KEY_STORE } from '~/constants/config';
import { RootState, store } from '~/redux/store';
import { setStateLogin, setToken } from '~/redux/reducer/auth';
import { setLoading, setVariableEnv } from '~/redux/reducer/site';
import { useSelector } from 'react-redux';
import { getEnvConfig } from '~/common/func/env';
import { Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import crmProfileService from '~/services/core/crmProfileService';
import { setInfoAccount } from '~/redux/reducer/user';
const SplashScreen: React.FC = () => {
  const { token, isLogin } = useSelector((state: RootState) => state.auth);
  const { loading, variableEnv } = useSelector(
    (state: RootState) => state.site
  );
  const [isReadSuccess, setIsReadSuccess] = useState<boolean>(false);
  // Get thông tin profile
  const dataProfile = useQuery({
    queryKey: [QUERY_KEY.GetProfileSplashScreen, token],
    queryFn: () =>
      httpRequest({
        http: crmProfileService.getProfileFromToken(),
      }),
    staleTime: 2 * 60 * 1000,
    enabled: !!token && !!isReadSuccess,
  });
  useEffect(() => {
    if (dataProfile.data) {
      store.dispatch(setInfoAccount(dataProfile.data));
    }
  }, [dataProfile.data]);
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
            publicURLImage: envConfig.PUBLIC_URL_IMAGE,
          })
        );
        setIsReadSuccess(true); //set đẻ gọi api
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
