import { createContext } from 'react';
export interface IInstrumentDefinition {
  id: string;
  type: string;
  description: string;
  order?: string;
}

export interface IContextInstrumentDefinition {
  id?: string;
  detail: IInstrumentDefinition | null;
  setDetail: (data: IInstrumentDefinition | null) => void;
}

export const ContextInstrumentDefinition =
  createContext<IContextInstrumentDefinition>({
    id: '',
    detail: null,
    setDetail: () => null,
  });
