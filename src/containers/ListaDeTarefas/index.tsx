import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import Tarefas from '../../components/Tarefas'
import * as S from './styles'
import Botao from '../../components/Botão'

const ListaDeTarefas = () => {
  const listaDeTarefas = useSelector((state: RootState) => state.tarefas.itens)

  const { termo, criterio, valor } = useSelector(
    (state: RootState) => state.filtro
  )

  const filtrarTarefas = () => {
    let tarefasFiltradas = listaDeTarefas
    if (termo !== undefined) {
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

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = ''

    const complementacao =
      termo !== undefined && termo.length > 0 ? ` e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefas encontradas como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefas encontradas como: "${criterio} = ${valor}"`
    }

    return mensagem
  }

  const tarefas = filtrarTarefas()
  const mensagem = exibeResultadoFiltrado(tarefas.length)

  return (
    <S.Container>
      <S.Titulo>{mensagem}</S.Titulo>
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
      <Botao />
    </S.Container>
  )
}

export default ListaDeTarefas
