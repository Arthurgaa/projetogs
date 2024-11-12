import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Cadastrar = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        senha: ''
    });
    const [mensagemErro, setMensagemErro] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMensagemErro(''); // Reseta a mensagem de erro ao tentar enviar o formulário novamente

        // Verifica se o usuário já existe
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((usuarios) => {
                // Verifica se o nome de usuário já está cadastrado
                const usuarioExistente = usuarios.find(
                    (usuario) => usuario.usuario === formData.usuario
                );

                if (usuarioExistente) {
                    // Define a mensagem de erro caso o usuário já exista
                    setMensagemErro("Esse usuário já existe.");
                } else {
                    // Caso o usuário não exista, cadastra o novo usuário
                    fetch("http://localhost:5000/usuarios", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData)
                    })
                    .then((res) => {
                        if (res.ok) {
                            navigate('/login'); // Redireciona para o login após cadastrar
                        } else {
                            alert("Erro ao cadastrar usuário");
                        }
                    })
                    .catch((error) => console.error("Erro ao cadastrar usuário:", error));
                }
            })
            .catch((error) => console.error("Erro ao buscar usuários:", error));
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-[#EFFDF3] p-8 rounded-lg shadow-lg w-full max-w-md">
                <img src="/logo.png" alt="logo" className="mx-auto mb-6 h-12" />
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Criar Conta</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="usuario"
                            value={formData.usuario}
                            onChange={handleChange}
                            placeholder="Usuário"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            placeholder="Senha"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {mensagemErro && (
                        <p className="text-red-500 text-center">{mensagemErro}</p>
                    )}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#111827] text-white font-semibold py-2 rounded-lg transition duration-200"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
                <ul className="mt-6 text-center space-y-3 text-gray-600">
                    <li>
                        <span className="text-sm">Já possui conta? </span>
                        <a href="/login" className="text-blue-600 hover:underline">Login</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Cadastrar;
