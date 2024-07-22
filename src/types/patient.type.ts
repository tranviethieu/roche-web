export interface PatientInfo {
  userName?: string | null;
  fullName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  unitId?: string | null;
  depId?: string | null;
  phoneNumber?: string | null;
  cccd?: string | null;
  age?: number | null;
  gender?: string | null;
  passport?: string | null;
  address?: string | null;
  birdday?: Date | null;
  email?: string | null;
  type?: string | null;
  sampleTypeName?: string | null;
  orderIDHis?: string | null;
  orderIDLis?: string | null;
  patientVisiter?: string | null;
  counter: number;
  name?: string | null;
  cateTestID?: string | null;
  roomTestID?: string | null;
  barCode?: string | null;
  timeWarning?: string | null;
  prorityLisID?: string | null;
  sampleTypeCode?: string | null;
  destinationID?: string | null;
  statusLocationID?: string | null;
  preStatusSampleID?: string | null;
  statusSampleID?: string | null;
  statusResultID?: string | null;
  blockID?: string | null;
  slideID?: string | null;
  logicID?: string | null;
  isGenaralLab?: boolean | null;
  isMicrobilogy?: boolean | null;
  isPathLogy?: boolean | null;
  isInterview?: boolean | null;
  chuanDoan?: string | null;
  nhipSinhLy?: string | null;
  loaiLayMau?: string | null;
  services?: string | null;
  hostID?: string | null;
  hostCaptureID?: string | null;
  doctor?: string | null;
  strListID?: string | null;
  groupServicesID?: string | null;
  signed?: boolean | null;
  userSigned?: string | null;
}