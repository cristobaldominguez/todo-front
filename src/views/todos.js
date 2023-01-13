import { useParams } from 'react-router-dom'

function Todos() {
  const { id } = useParams()

  return <h1>Todo {id}</h1>
}

export default Todos