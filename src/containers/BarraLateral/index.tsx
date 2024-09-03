import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootState } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootState) => state.filtro)

  return (
    <S.Aside>
      <S.Campo
        type="text"
        value={termo}
        onChange={(e) => dispatch(alteraTermo(e.target.value))}
        placeholder="Procurar"
      />
      <S.Filtros>
        <FiltroCard
          valor={enums.Status.PENDENTE}
          criterio="status"
          contador="3"
          status="pendentes"
        />
        <FiltroCard
          valor={enums.Status.CONCLUIDA}
          criterio="status"
          contador="4"
          status="concluídas"
        />
        <FiltroCard
          valor={enums.Prioridade.URGENTE}
          criterio="prioridade"
          contador="7"
          status="urgentes"
        />
        <FiltroCard
          valor={enums.Prioridade.IMPORTANTE}
          criterio="prioridade"
          contador="9"
          status="importantes"
        />
        <FiltroCard
          valor={enums.Prioridade.NORMAL}
          criterio="prioridade"
          contador="3"
          status="normal"
        />
        <FiltroCard criterio="todas" contador="7" status="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
