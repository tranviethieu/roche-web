import styles from './OutpatientSample.module.scss';
import React, { useEffect, useState } from 'react';
import { ContextDetailSampler, IMicrobiology } from './context';
import Counter from './components/Counter';
import FormSamplerHIS from './components/FormSamplerHIS/FormSamplerHIS';
import ContentTabSampler from './components/ContentTabSampler';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/config/enum';
import { httpRequest } from '~/services';
import { useParams } from 'react-router-dom';
import sampleServices from '~/services/roche/sampleServices';
import { PatientInfo } from '~/types/patient.type';

const OutpatientSample: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);
  const [microbiology, setMicrobiology] = useState<IMicrobiology | null>(null);
  const { id } = useParams();
  const [stt, setStt] = useState<number>(0);
  const currentSteps = 1;
  const detailPatient = useQuery({
    queryKey: [QUERY_KEY.DetailPatientSample, id],
    queryFn: () =>
      httpRequest({
        http: sampleServices.GetDetailsOrderByPatientID({
          patient: id as string,
        }),
      }),

    enabled: id !== undefined,
    staleTime: 1000 * 10,
  });

  useEffect(() => {
    if (detailPatient.data) {
      setPatientInfo(detailPatient.data.data);
    }
  }, [detailPatient.data]);

  return (
    <section className={styles.form_section}>
      <ContextDetailSampler.Provider
        value={{
          id,
          patientInfo,
          setPatientInfo,
          stt,
          setStt,
          currentSteps,
          microbiology,
          setMicrobiology,
        }}
      >
        <div className={styles.header_form}>
          <Counter />
          <FormSamplerHIS />
        </div>
        <div className={styles.container_form}>
          <ContentTabSampler />
        </div>
      </ContextDetailSampler.Provider>
    </section>
  );
};
export default OutpatientSample;
