import './styles/side.css';

import { Resumen } from './Resumen';
import ComidasNoRecomendadas from './ComidasNoRecomendadas';


export const Side = () => {


  return (
    <div className="side">
      <Resumen />
      <ComidasNoRecomendadas />
    </div>
  );
};

