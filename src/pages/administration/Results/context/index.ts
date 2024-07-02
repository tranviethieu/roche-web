import { createContext } from 'react';
export interface IResults {
  id: string;
  type: string;
  description: string;
  order?: string;
}

export interface IContextResults {
  uuid?: string;
  detail: IResults | null;
  setDetail: (data: IResults | null) => void;
}

export const ContextResults = createContext<IContextResults>({
  uuid: '',
  detail: null,
  setDetail: () => null,
});
