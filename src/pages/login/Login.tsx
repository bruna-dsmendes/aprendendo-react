import { useState } from "react"
import Home from "../home/Home";

function Login() {

  const [estaLogado, setEstaLogado] = useState<boolean>(false);

  return (
    <>
      {estaLogado === true ? // SE ESTÁ LOGADO 

        (
          <Home
            titulo="Componente Home"
            texto="Exibindo o Componente Home"
          />
        )

        : // SENÃO

        (
          <div>
            <h2>Componente Login</h2>
            <button onClick={() => setEstaLogado(true)}>Entrar</button>
          </div>
        )

      }
    </>
  )
}

export default Login