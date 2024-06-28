import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Sampler } from '~/types/sampler.type';
export interface IContextDetailSampler {
  uuid: string;
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

const SamplerDetailProvider: React.FC<any> = ({ children }) => {
  const [data, setData] = useState<Sampler | null>(null);
  const [stt, setStt] = useState<number>(0);
  const { id } = useParams();
  return (
    <ContextDetailSampler.Provider
      value={{
        uuid: id || '',
        data,
        setData,
        stt,
        setStt,
      }}
    >
      {children}
    </ContextDetailSampler.Provider>
  );
};
export default SamplerDetailProvider;
