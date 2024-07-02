import { createContext } from 'react';
export interface IAntibioticFamilies {
  id: string;
  type: string;
  description: string;
  order?: string;
}

export interface IContextAntibioticFamilies {
  id?: string;
  detail: IAntibioticFamilies | null;
  setDetail: (data: IAntibioticFamilies | null) => void;
}

export const ContextAntibioticFamilies =
  createContext<IContextAntibioticFamilies>({
    id: '',
    detail: null,
    setDetail: () => null,
  });
