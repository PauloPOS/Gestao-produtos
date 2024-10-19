// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <h1>Sistema de Gestão de Produtos</h1>
      </header>
      <nav>
        <a href="#">Página 1</a>
        <a href="#">Página 2</a>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 Gestão de Produtos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Layout;

































