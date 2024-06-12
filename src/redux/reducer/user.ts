import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAccount {
  hospitalName: string;
  _id: string;
  userName: string;
  isRoot: boolean;
  phoneNumber: string;
  title: string | null;
  work: string;
  code: string | null;
  address: string | null;
  gender: string;
  nationIdentity: string | null;
  certificate: string | null;
  birthday: Date | string | null;
  fullName: string;
  email: string;
  avatar: string;
  isActive: boolean;
  hospitalId: string;
  roles: string[];
  isDoctor: boolean;
  isDoctorHome: boolean;
  isDoctorOnline: boolean;
  isDoctorChat: boolean;
  description: string | null;
  hospitals: string[];
  nationality: null;
  province: {
    code: string;
    name: string;
  } | null;
  district: {
    code: string;
    name: string;
  } | null;
  ward: {
    code: string;
    name: string;
  } | null;
  street: string | null;
  nation: {
    code: string;
    name: string;
  } | null;
  position: {
    code: string;
    name: string;
  } | null;
}

interface IHospital {
  hospital_id: string;
  scope: string;
  logoId: string;
  name: string;
  homePage: string;
}

interface HospitalState {
  infoAccount: IAccount | null;
  infoHospital: IHospital | null;
  phoneCheck: boolean;
}

const initialState: HospitalState = {
  infoAccount: null,
  infoHospital: null,
  phoneCheck: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInfoHospital: (state, action: PayloadAction<IHospital | null>) => {
      state.infoHospital = action?.payload;
    },
    setInfoAccount: (state, action: PayloadAction<IAccount | null>) => {
      state.infoAccount = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInfoHospital, setInfoAccount } = userSlice.actions;
export default userSlice.reducer;
