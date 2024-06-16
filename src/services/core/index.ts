import axios from 'axios';
import { store } from '~/redux/store';

const createAxiosClientCore = () => {
  const axiosClientCore = axios.create({
    headers: {
      'content-type': 'application/json',
      Accept: 'text/plain',
    },
    timeout: 60000,
    timeoutErrorMessage: 'Request timeout',
  });

  axiosClientCore.interceptors.request.use(async (config) => {
    const token = store.getState().auth.token;
    //const baseURL = store.getState().site.variableEnv?.publicApiCore;
    const baseURL = 'https://api-meapp.benhvien.tech/core';
    //const infoHospital = store.getState().user.infoHospital;

    // Cập nhật baseURL nếu có sự thay đổi
    if (config.baseURL !== baseURL) {
      config.baseURL = baseURL;
    }
    config.headers.Authorization = token ? 'Bearer ' + token : null;
    config.headers['X-MeApp-HospitalId'] = '65711feac325e66f7103f89e';
    //config.headers['X-MeApp-HospitalId'] = infoHospital?.hospital_id ? infoHospital?.hospital_id : null;
    return config;
  });

  axiosClientCore.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }

      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        throw error.response.data;
      }

      if (!axios.isCancel(error)) throw error;
    }
  );

  return axiosClientCore;
};

export default createAxiosClientCore;
