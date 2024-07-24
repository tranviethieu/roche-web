import { createBlockId } from '~/pages/main/samples/OutpatientSample/components/ContentTabSampler/components/Collection/components/Pathology/components/ListBlockID';
import createAxiosClientCore from '.';

const axiosClientCore = createAxiosClientCore();

const dMTestServices = {
  GetAllTestPaging: (
    data: {
      keywords: string;
      pageCurrent: number;
      pageSize: number;
      name?: string | null;
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.post(`/DMTest/GetAllTestPaging`, data, {
      cancelToken: tokenAxios,
    });
  },
  //
  CreateBlock: (data: { blockIds: createBlockId[] }, tokenAxios?: any) => {
    return axiosClientCore.post(`/DMTest/CreateBlock`, data.blockIds, {
      cancelToken: tokenAxios,
    });
  },
  // DeleteBlockAllAsync: (
  //   data: {
  //     userName: string;
  //     sampletypecode: string },
  //   tokenAxios?: any
  // ) => {
  //   return axiosClientCore.post(`/DMTest/DeleteBlockAllAsync?userName=${data?.userName}&sampletypecode=1`, data.blockIds, {
  //     cancelToken: tokenAxios,
  //   });
  // },
};

export default dMTestServices;
