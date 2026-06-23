// src/App.tsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Contador from './pages/contador/Contador';
import Tarefa from './pages/tarefa/Tarefa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home titulo="Componente Home" texto="Exibindo o Componente Home" />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/tarefa" element={<Tarefa />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;