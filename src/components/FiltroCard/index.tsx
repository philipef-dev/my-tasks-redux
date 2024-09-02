import { useDispatch } from 'react-redux'
import { aletarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

export type Props = {
  $ativo?: boolean
  contador: string
  status: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ $ativo, contador, status, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      aletarFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Card $ativo={$ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{status}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
