interface HomeProps {
  titulo: string
  texto: string
}

function Home({ titulo, texto }: HomeProps) {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{texto}</p>
    </div>

  )
}

export default Home