import { useState } from 'react';
import { ContextAntibioticFamilies, IAntibioticFamilies } from './context';
import TableAntibioticFamilies from './components/TableAntibioticFamilies';

const AntibioticFamilies = () => {
  const [detail, setDetail] = useState<IAntibioticFamilies | null>(null);
  return (
    <section className="container_roche">
      <div className="main_roche">
        <ContextAntibioticFamilies.Provider value={{ detail, setDetail }}>
          <TableAntibioticFamilies />
        </ContextAntibioticFamilies.Provider>
      </div>
    </section>
  );
};
export default AntibioticFamilies;
