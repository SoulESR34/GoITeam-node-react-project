import './styles/side.css';

import { Resumen } from './Resumen';
import ComidasNoRecomendadas from './ComidasNoRecomendadas';


export const Side = () => {


  return (
    <div className="side">
      {/* Contenido del resumen */}
      <Resumen />

      {/* Lista de comidas no recomendadas */}
      <ComidasNoRecomendadas />
    </div>
  );
};

