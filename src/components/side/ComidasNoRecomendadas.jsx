

const ComidasNoRecomendadas = () => {
  const comidas = ['Pizza', 'Hamburguesas', 'Helados', 'Pasteles'];

  return (
    <div className="comidas-no-recomendadas">
      <h3>Comidas no recomendadas</h3>
      <ul>
        {comidas.map((comida) => (
          <li key={comida}>{comida}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComidasNoRecomendadas;
