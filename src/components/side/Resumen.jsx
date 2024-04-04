import PropTypes from 'prop-types';

export const Resumen = ({ caloriasRestantes, caloriasConsumidas, porcentajeIngestaDiaria }) => {
    return (
        <div className="resumen">
            <h3>Resumen para XX/XX/XX</h3>
            <div className="resumen-info">
                <p>Restantes:      {caloriasRestantes}</p>
                <p>Consumidas: {caloriasConsumidas }</p>
                <p>% de la ingesta diaria: {porcentajeIngestaDiaria}%</p>
            </div>
        </div>
    );
};

Resumen.propTypes = {
    caloriasRestantes: PropTypes.number.isRequired,
    caloriasConsumidas: PropTypes.number.isRequired,
    porcentajeIngestaDiaria: PropTypes.number.isRequired,
};
