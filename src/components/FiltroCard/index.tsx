import { useDispatch, useSelector } from 'react-redux'
import { aletarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { RootState } from '../../store'

export type Props = {
  contador: string
  status: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ contador, status, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootState) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const ativo = verificaEstaAtivo()

  const filtrar = () => {
    dispatch(
      aletarFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{status}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
