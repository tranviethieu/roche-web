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
  isMobile: boolean;
  fontSize: 'sm' | 'md' | 'xl';
  bgColor: string;
  variableEnv: IVariableEnv | null;
  routerActive: string;
  breadcrumb: ItemBreadcrumb[];
}

const initialState: SiteState = {
  loading: true,
  routerPrev: '/',
  openLogout: false,
  isMobile: false,
  isOverview: false,
  fontSize: 'sm',
  bgColor:
    'linear-gradient(135deg, rgb(71, 120, 209) 29%, rgb(247, 170, 248) 100%)',
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
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setFontSize: (state, action: PayloadAction<'sm' | 'md' | 'xl'>) => {
      state.fontSize = action.payload;
    },
    setBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
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
  setIsMobile,
  setFontSize,
  setBgColor,
  setVariableEnv,
  setRouterActive,
  setIsOverview,
  setBreadcrumb,
} = siteSlice.actions;
// Action creators are generated for each case reducer function
export default siteSlice.reducer;
