import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '/public/logo.png'; // Atualize o caminho conforme necessário

const Nav = () => {
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  // Função de logout
  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    setMensagem("Usuário deslogado com sucesso!");
    setTimeout(() => {
      setMensagem(''); // Limpa a mensagem após 2 segundos
      navigate('/');   // Redireciona para a página inicial
    }, 2000); // Tempo de exibição da mensagem em milissegundos
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo e nome da empresa */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <Link to="/" className="text-xl font-semibold hover:text-gray-400">EcoSphere</Link>
        </div>

        {/* Links de navegação */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-400">Início</Link>
          <Link to="/solucao" className="hover:text-gray-400">Solução</Link>
          <Link to="/sobre" className="hover:text-gray-400">Sobre</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/cadastrar" className="hover:text-gray-400">Cadastre-se</Link>
          <button 
            onClick={handleLogout} 
            className="bg-[#9cc149] hover:bg-green-600 text-white font-semibold py-1 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mensagem de logout */}
      {mensagem && (
        <div className="text-center bg-green-500 text-white py-2">
          {mensagem}
        </div>
      )}
    </nav>
  );
};

export default Nav;
