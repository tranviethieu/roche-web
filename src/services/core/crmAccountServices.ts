import createAxiosClientCore from '.';

const axiosClientCore = createAxiosClientCore();

const crmAccountServices = {
  getListAccount: (
    data: {
      paging: {
        from: number;
        count: number;
      };
      keySearch?: string | null;
      isDoctor?: boolean | null;
      isActive?: boolean | null;
      departmentId?: string;
      ids?: React.Key[];
      hospitalId?: string;
      departmentIds?: string[];
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.post(`/crm/account/list`, data, {
      cancelToken: tokenAxios,
    });
  },
  getListAccountAll: async (
    data: {
      paging: {
        from: number;
        count: number;
      };
      keySearch?: string | null;
      isDoctor?: boolean | null;
      isActive?: boolean | null;
      departmentId?: string;
      ids?: React.Key[];
      hospitalId?: string;
      departmentIds?: string[];
    },
    tokenAxios?: any
  ) => {
    const [response1, response2] = await Promise.all([
      axiosClientCore.post(`/crm/account/list`, data, {
        cancelToken: tokenAxios,
      }),
      axiosClientCore.post(`/crm/account/list`, data, {
        cancelToken: tokenAxios,
      }),
    ]);
    return [response1, response2];
  },
  getDetailAccount: (
    data: {
      userId: string;
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.post(`/crm/account/${data?.userId}`, data, {
      cancelToken: tokenAxios,
    });
  },
  createAccount: (data: any, tokenAxios?: any) => {
    return axiosClientCore.post(`/crm/account/add`, data, {
      cancelToken: tokenAxios,
    });
  },
  updateAccount: (data: any, tokenAxios?: any) => {
    return axiosClientCore.post(`/crm/account/update`, data, {
      cancelToken: tokenAxios,
    });
  },
};
export const getListAccountAll = async (data: any, tokenAxios?: any) => {
  const dataRes = await Promise.all([
    axiosClientCore.post(`/crm/account/list`, data, {
      cancelToken: tokenAxios,
    }),
    axiosClientCore.post(`/crm/account/list2`, data, {
      cancelToken: tokenAxios,
    }),
  ]);
  console.log(dataRes);
  return dataRes;
};

export default crmAccountServices;
