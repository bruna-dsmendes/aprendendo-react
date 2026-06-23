import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  // Função para aumentar o número
  function adicionar() {
    setValor(valor + 1);
  }

  // Função para reduzir o número
  function subtrair() {
    setValor(valor - 1);
  }

  return (
    <div>
      <h1>Componente Contador</h1>
      <p>O valor atual é: {valor}</p>

      {/* Botões de ação */}
      <button onClick={adicionar}>Adicionar 1</button>
      <button onClick={subtrair} style={{ marginLeft: '10px' }}>Reduzir 1</button>
    </div>
  );
}

export default Contador;