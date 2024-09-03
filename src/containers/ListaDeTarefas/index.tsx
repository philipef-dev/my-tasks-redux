import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Tarefas from '../../components/Tarefas'
import * as S from './styles'

const ListaDeTarefas = () => {
  const listaDeTarefas = useSelector((state: RootState) => state.tarefa.itens)

  const { termo, criterio, valor } = useSelector(
    (state: RootState) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = listaDeTarefas
    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >=
          0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (tarefa) => tarefa.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (tarefa) => tarefa.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return listaDeTarefas
    }
  }

  return (
    <S.Container>
      <S.Titulo>
        2 tarefas marcadas como: &quot; todas &quot; e &quot; {termo} &quot;
      </S.Titulo>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>

      {/* PAREI NO MINUTO 11 */}

      <S.ListaDeTarefas>
        <ul>
          {filtrarTarefas().map((t) => (
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
