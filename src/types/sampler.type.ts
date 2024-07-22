import React from 'react';

export interface Sampler {
  id: string;
  stt: number;
  codeSampler: number;
  name: string;
  room: {
    id: string;
    numberRoom: number;
  };
  roomArray: {
    id: string;
    numberRoom: number;
  }[];
}
export type Samplers = Pick<Sampler, 'id' | 'codeSampler'>[];

export interface listSamplerType {
  key: React.Key;
  code: string | null;
  name: string | null;
  note: string | null;
  viTriLayMauID: string | null;
  id: number;
  status: number | null;
  createdDateUtc: Date;
  createdUid: string | null;
  updatedDateUtc: Date;
  updatedUid: string | null;
  deleted: string | null;
  deletedBy: string | null;
}
