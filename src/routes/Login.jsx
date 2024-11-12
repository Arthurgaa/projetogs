import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const usuario = useRef();
    const senha = useRef();
    const [usuarios, setUsuarios] = useState([]);
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    function validar() {
        for (let i = 0; i < usuarios.length; i++) {
            if (
                usuarios[i].usuario === usuario.current.value &&
                usuarios[i].senha === senha.current.value
            ) {
                return true;
            }
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            setMensagem("Usuário logado com sucesso!");
            setTimeout(() => {
                navigate("/");
            }, 2000); // Redireciona após 2 segundos
        } else {
            alert("Usuário ou senha inválidos");
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((res) => setUsuarios(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-[#EFFDF3] p-8 rounded-lg shadow-lg w-full max-w-md">
                <img src="/logo.png" alt="logo" className="mx-auto mb-6 h-12" />
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Faça seu Login</h2>
                {mensagem && (
                    <div className="mb-4 p-2 text-center text-green-600 font-medium">
                        {mensagem}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            id="usuario"
                            ref={usuario}
                            placeholder="Usuário"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="senha"
                            ref={senha}
                            placeholder="Senha"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#111827] text-white font-semibold py-2 rounded-lg transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <ul className="mt-6 text-center space-y-3 text-gray-600">
                    <li>
                        <span className="text-sm">Esqueceu sua senha?</span>
                    </li>
                    <li>
                        <span className="text-sm">Não possui conta? </span>
                        <a href="/cadastrar" className="text-blue-600 hover:underline">Criar</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Login;
