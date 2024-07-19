import { createContext } from 'react';
import { PatientInfo } from '~/types/patient.type';
export interface IMicrobiology {
  SampleType: string[];
  Algorithm: string[];
}
export interface IContextDetailSampler {
  id?: string;
  patientInfo: PatientInfo | null;
  setPatientInfo: (data: PatientInfo) => void;
  stt: number;
  setStt: (stt: number) => void;
  currentSteps: number;
  microbiology: IMicrobiology | null;
  setMicrobiology: (data: IMicrobiology) => void;
}

export const ContextDetailSampler = createContext<IContextDetailSampler>({
  id: '',
  patientInfo: null,
  setPatientInfo: () => null,
  stt: 0,
  setStt: () => 0,
  currentSteps: 1,
  microbiology: null,
  setMicrobiology: () => null,
});
