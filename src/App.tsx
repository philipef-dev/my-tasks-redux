import BarraLateral from './container/BarraLateral'
import ListaDeTarefas from './container/ListaDeTarefas'
import { Container } from './styles'

function App() {
  return (
    <Container>
      <BarraLateral />
      <ListaDeTarefas />
    </Container>
  )
}

export default App
