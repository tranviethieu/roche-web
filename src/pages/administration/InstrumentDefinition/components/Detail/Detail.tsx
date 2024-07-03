import { useContext } from 'react';
import {
  ContextInstrumentDefinition,
  IContextInstrumentDefinition,
} from '../../context';

const Detail = () => {
  const { detail } = useContext<IContextInstrumentDefinition>(
    ContextInstrumentDefinition
  );
  console.log(detail);
  return <>aa</>;
};
export default Detail;
