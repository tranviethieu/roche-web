import createAxiosClientCore from '.';

const axiosClientCore = createAxiosClientCore();

const sampleServices = {
  //Chi tiết bênh nhân lấy theo id
  GetDetailsOrderByPatientID: (
    data: {
      patient: string;
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.get(
      `/Sample/GetDetailsOrderByPatientID?patient=${data?.patient}`,
      {
        cancelToken: tokenAxios,
      }
    );
  },
  //theo dõi bệnh nhân lấy mẫu nhưng chưa giao
  GetListSampleNotTranfer: (
    data: {
      keywords: string;
      pageCurrent: number;
      pageSize: number;
      unitID: number;
      departmentID: number;
      sampleTypeCode: string;
      timeHour: number;
      cateTestID: number;
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.post(`/Sample/GetListSampleNotTranfer`, data, {
      cancelToken: tokenAxios,
    });
  },
  //theo dõi bệnh nhân lấy mẫu khẩn
  GetListSample: (
    data: {
      idSample: string;
      keywords: string;
      pageCurrent: number;
      pageSize: number;
      unitID: number;
      departmentID: number;
      sampleTypeCode: string;
      timeHour: number;
      cateTestID: number;
    },
    tokenAxios?: any
  ) => {
    return axiosClientCore.post(`/Sample/${data.idSample}`, data, {
      cancelToken: tokenAxios,
    });
  },
};

export default sampleServices;
