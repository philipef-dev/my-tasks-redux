import { useDispatch, useSelector } from 'react-redux'
import { aletarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { RootState } from '../../store'

export type Props = {
  status: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ status, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtro = useSelector((state: RootState) => state.filtro)
  const tarefas = useSelector((state: RootState) => state.tarefas)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((tarefa) => tarefa.prioridade === valor)
        .length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((tarefa) => tarefa.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      aletarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{status}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
