import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type MenuAccount = {
  name: string;
};
export interface PermisstionState {
  permissionsAccount: string[];
  listMenuAccount: MenuAccount[];
}

const initialState: PermisstionState = {
  permissionsAccount: [],
  listMenuAccount: [],
};

export const permisstionSlice = createSlice({
  name: 'permisstion',
  initialState,
  reducers: {
    setPermissionsAccount: (state, action: PayloadAction<string[]>) => {
      state.permissionsAccount = action?.payload;
    },
    setListMenuAccount: (state, action: PayloadAction<MenuAccount[]>) => {
      state.listMenuAccount = action?.payload;
    },
  },
});

export const { setPermissionsAccount, setListMenuAccount } =
  permisstionSlice.actions;
export default permisstionSlice.reducer;
