import { createContext } from 'react';
import { PatientInfo } from '~/types/patient.type';
export interface IMicrobiology {
  SampleType: string[];
  Algorithm: string[];
}
export type ISttSampler = {
  currentNumber: number;
  orderNumber: number;
};
export type IPathology = {
  sampleTypes: string[];
  blockIds: string[];
  slideIds: string[];
  algorithmSelection: string[];
};
export interface IContextDetailSampler {
  id?: string;
  patientInfo: PatientInfo | null;
  setPatientInfo: (data: PatientInfo) => void;
  stt: ISttSampler;
  setStt: (stt: ISttSampler) => void;
  currentSteps: number;
  microbiology: IMicrobiology | null;
  setMicrobiology: (data: IMicrobiology) => void;
  pathology: IPathology;
  setPathology: (data: IPathology) => void;
}

export const ContextDetailSampler = createContext<IContextDetailSampler>({
  id: '',
  patientInfo: null,
  setPatientInfo: () => null,
  stt: { currentNumber: 0, orderNumber: 0 },
  setStt: () => ({ currentNumber: 0, orderNumber: 0 }),
  currentSteps: 1,
  microbiology: null,
  setMicrobiology: () => null,
  pathology: {
    sampleTypes: [],
    blockIds: [],
    slideIds: [],
    algorithmSelection: [],
  },
  setPathology: () => null,
});
