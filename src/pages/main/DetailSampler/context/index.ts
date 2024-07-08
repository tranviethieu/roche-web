import { createContext } from 'react';
import { Sampler } from '~/types/sampler.type';

export interface IContextDetailSampler {
  uuid?: string;
  data: Sampler | null;
  setData: (data: Sampler) => void;
  stt: number;
  setStt: (stt: number) => void;
}

export const ContextDetailSampler = createContext<IContextDetailSampler>({
  uuid: '',
  data: null,
  setData: () => null,
  stt: 0,
  setStt: () => 0,
});
