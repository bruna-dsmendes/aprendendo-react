import { useEffect, useState } from "react";

function Tarefa() {

  const [tarefa, setTarefa] = useState("");
  const [completado, setCompletado] = useState(false);


  useEffect(() => {

    if (completado) {
      setTarefa("Tarefa finalizada com sucesso!")
    }
  }, [completado]);

  return (

    <div>
      <div>
        <h2>Componente Tarefa</h2>
        <h3>{tarefa}</h3>
        <p>Conclua a tarefa</p>
        <button onClick={() => setCompletado(true)}> Concluir Tarefa</button>
      </div>
    </div>
  )
}

export default Tarefa;