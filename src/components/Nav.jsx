import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Nav=()=>{
    const navigate = useNavigate();

    // Função de logout
    const handleLogout = () => {
        // Remover os itens de sessão
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('senha');

        // Redirecionar para a página inicial
        navigate('/');
    };


    return(
        <>
            <Link to="/">Home</Link>
            <Link to="/solucao">Solução</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/cadastrar">Login</Link>
            <button onClick={handleLogout} className="logout-btn">
                   Logout
            </button>
        </>
    )
}

export default Nav