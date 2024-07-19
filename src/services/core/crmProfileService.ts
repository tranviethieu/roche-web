import createAxiosClientCore from '.';

const axiosClientCore = createAxiosClientCore();

const crmProfileService = {
  getProfileFromToken: (tokenAxios?: any) => {
    return axiosClientCore.post(`/crm/account/profile`, {
      cancelToken: tokenAxios,
    });
  },
  getInfoHospital: (
    data: {
      hospitalId: string;
      id: string;
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.post(
      `/adminHospital/${data.id}?hospitalId=${data?.hospitalId}`,
      data,
      {
        cancelToken: tokenAxios,
      }
    );
  },
};

export default crmProfileService;
