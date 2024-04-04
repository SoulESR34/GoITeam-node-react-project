

const UserNav = () => {
  //aqui va la logíca para lo enlaces de la navegación

  return (
    <nav className="navigation">
      {/* Aquí se coloca  enlaces de navegación */}
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/productos">Productos</a>
        </li>
        {/* Otros enlaces */}
      </ul>
    </nav>
  );
};

export default UserNav;
