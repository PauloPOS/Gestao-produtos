function Footer() {
  return (
    <footer className="bg-blue-700 rounded-lg shadow m-4 dark:bg-blue-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center dark:text-blue-200">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline hover:text-yellow-300 dark:hover:text-yellow-400">
            Infnet - Gestão de Produtos
          </a>
          . Todos os direitos reservados
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-blue-200 sm:mt-0">
          <li>
            <a
              href="https://infnet.edu.br"
              className="hover:underline hover:text-yellow-300 dark:hover:text-yellow-400"
            >
              Site Oficial
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
