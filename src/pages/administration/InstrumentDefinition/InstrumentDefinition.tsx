import { useState } from 'react';
import { ContextInstrumentDefinition, IInstrumentDefinition } from './context';

const InstrumentDefinition = () => {
  const [detail, setDetail] = useState<IInstrumentDefinition | null>(null);
  return (
    <section className="container_roche">
      <div className="main_roche">
        <ContextInstrumentDefinition.Provider value={{ detail, setDetail }}>
          <></>
        </ContextInstrumentDefinition.Provider>
      </div>
    </section>
  );
};
export default InstrumentDefinition;
