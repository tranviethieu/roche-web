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
