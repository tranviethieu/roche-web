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
    return Promise.all([
      axiosClientCore.post(`/crm/account/list`, data, {
        cancelToken: tokenAxios,
      }),
      axiosClientCore.post(`/crm/account/list`, data, {
        cancelToken: tokenAxios,
      }),
    ]);
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
  fetchAccounts: (
    data: {
      paging: {
        from: number | null;
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
};

export default crmAccountServices;
