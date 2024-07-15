import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAccount {
  _id: string;
  userName: string;
  isRoot: boolean;
  title: string | null;
}

interface AccountState {
  infoAccount: IAccount | null;
}

const initialState: AccountState = {
  infoAccount: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInfoAccount: (state, action: PayloadAction<IAccount | null>) => {
      state.infoAccount = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInfoAccount } = userSlice.actions;
export default userSlice.reducer;
