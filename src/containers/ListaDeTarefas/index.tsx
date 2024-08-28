import * as S from './styles'
import Tarefas from '../../components/Tarefas'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const ListaDeTarefas = () => {
  const listaDeTarefas = useSelector((state: RootState) => state.tarefa)

  return (
    <S.Container>
      <S.Titulo>
        2 tarefas marcadas como: &quot; todas &quot; e &quot; termo &quot;
      </S.Titulo>
      <S.ListaDeTarefas>
        <ul>
          {listaDeTarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefas
                id={t.id}
                titulo={t.titulo}
                status={t.status}
                descricao={t.descricao}
                prioridade={t.prioridade}
              />
            </li>
          ))}
        </ul>
      </S.ListaDeTarefas>
    </S.Container>
  )
}

export default ListaDeTarefas
