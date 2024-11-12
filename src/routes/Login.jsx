import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // Hook-useRef pega a referência de um componente ou elemento do DOM
    const usuario = useRef();
    const senha = useRef();

    // Hook-useState - Manipula o estado da variável
    const [usuarios, setUsuarios] = useState([]);

    // Hook -useNavigate- redireciona para outro componente
    const navigate = useNavigate();

    // Função de validação
    function validar() {
        for (let i = 0; i < usuarios.length; i++) {
            // Comparação de senhas e usuários como strings
            if (
                usuarios[i].usuario === usuario.current.value &&
                usuarios[i].senha === senha.current.value
            ) {
                return true;
            }
        }
        return false;
    }

    // Função handleSubmit
    const handleSubmit = (e) => {
        // Previne que a página faça qualquer modificação, ex: reload
        e.preventDefault();
        if (validar()) {
            // Criando a autenticação
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            navigate("/");
        } else {
            alert("Usuário ou senha inválidos");
        }
    }

    // Hook-useEffect para buscar os dados do login no json
    useEffect(() => {
        // Pega os dados do json
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((res) => {
                // Atualiza o estado com os dados recebidos
                setUsuarios(res);
            })
            .catch((err) => console.log(err)); // Em caso de erro
    }, []);

    return (
        <section className="container">
            <div className="container-login">
                <div className="login">

                    <form className="login-form" onSubmit={handleSubmit}>
                        <span className="titulo-login">Faça seu Login</span>

                        <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="usuario"
                                ref={usuario}
                                placeholder="Usuário" // Adicionando placeholder para melhor acessibilidade
                            />
                        </div>

                        <div className="w-input">
                            <input
                                type="password"
                                className="input-form"
                                id="senha"
                                ref={senha}
                                placeholder="Senha" // Adicionando placeholder
                            />
                        </div>

                        <div className="login-btn">
                            <button type="submit" className="login-form-btn">Login</button>
                        </div>

                        {/* Seção de links úteis */}
                        <ul className="uteis">
                            <li>
                                <span className="texto1">Esqueceu sua senha?</span>
                            </li>
                            <li>
                                <span className="texto1">Não possui conta?</span>
                                <a href="#">
                                    Criar
                                </a>
                            </li>
                        </ul>

                    </form>
                </div>
                <img src="/logo.png" alt="logo" />
            </div>
        </section>
    );
}

export default Login;
