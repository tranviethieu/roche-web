import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IVariableEnv {
  publicApi: string;
  publicApiDev: string;
  publicApiSocket: string;
}

export interface ItemBreadcrumb {
  title: string;
  href?: string;
}

export interface SiteState {
  loading: boolean;
  isOverview: boolean;
  routerPrev: string;
  openLogout: boolean;
  variableEnv: IVariableEnv | null;
  routerActive: string;
  breadcrumb: ItemBreadcrumb[];
}

const initialState: SiteState = {
  loading: true,
  routerPrev: '/',
  openLogout: false,
  isOverview: false,
  variableEnv: null,
  routerActive: '/',
  breadcrumb: [],
};

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    updateRouterPrev: (state, action: PayloadAction<string>) => {
      state.routerPrev = action?.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action?.payload;
    },
    toogleOpenLogout: (state) => {
      state.openLogout = !state.openLogout;
    },
    setVariableEnv: (state, action: PayloadAction<IVariableEnv | null>) => {
      state.variableEnv = action.payload;
    },
    setRouterActive: (state, action: PayloadAction<string>) => {
      state.routerActive = action.payload;
    },
    setIsOverview: (state, action: PayloadAction<boolean>) => {
      state.isOverview = action.payload;
    },
    setBreadcrumb: (state, action: PayloadAction<ItemBreadcrumb[]>) => {
      state.breadcrumb = action.payload;
    },
  },
});

export const {
  updateRouterPrev,
  setLoading,
  toogleOpenLogout,
  setVariableEnv,
  setRouterActive,
  setIsOverview,
  setBreadcrumb,
} = siteSlice.actions;
// Action creators are generated for each case reducer function
export default siteSlice.reducer;
