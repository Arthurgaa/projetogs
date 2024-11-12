import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Error from './routes/Error.jsx';
import Cadastrar from './routes/Cadastrar.jsx';
import Login from './routes/Login.jsx';
import Sobre from './routes/Sobre.jsx';
import Solucao from './routes/Solucao.jsx';

// Configuração das rotas
const router = createBrowserRouter([
  {
    //Elementos Pai
    path: '/', 
    element: <App />, 
    errorElement: <Error />,
    
    //Elementos Filho
    children: [
      { path: '/', element: <Home /> }, 
      { path: '/login', element: <Login /> }, 
      { path: '/cadastrar', element: <Cadastrar /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/solucao', element: <Solucao /> },
    ]
  }
]);

// Renderiza o aplicativo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);