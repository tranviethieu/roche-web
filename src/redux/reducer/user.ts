import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAccount {
  _id: string;
  userName: string;
  isRoot: boolean;
  phoneNumber: string;
  title: string | null;
}

interface AccountState {
  infoAccount: IAccount | null;
  array: string[];
}

const initialState: AccountState = {
  infoAccount: null,
  array: ['aaa'],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInfoAccount: (state, action: PayloadAction<IAccount | null>) => {
      state.infoAccount = action?.payload;
    },
    // addAccount:(state, action: PayloadAction<IAccount | null>) =>{
    //   state.array = action?.payload;
    // }
  },
});

// Action creators are generated for each case reducer function
export const { setInfoAccount } = userSlice.actions;
export default userSlice.reducer;
