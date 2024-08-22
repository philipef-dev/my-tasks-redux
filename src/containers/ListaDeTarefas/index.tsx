import * as S from './styles'
import Tarefas from '../../components/Tarefas'

const ListaDeTarefas = () => {
  return (
    <S.Container>
      <S.Titulo>
        2 tarefas marcadas como: &quot; todas &quot; e &quot; termo &quot;
      </S.Titulo>
      <S.ListaDeTarefas>
        <ul>
          <li>
            <Tarefas />
          </li>
          <li>
            <Tarefas />
          </li>
          <li>
            <Tarefas />
          </li>
        </ul>
      </S.ListaDeTarefas>
    </S.Container>
  )
}

export default ListaDeTarefas
