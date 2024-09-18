import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootState } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'
import { Button, Campo } from '../../styles'
import { useNavigate } from 'react-router'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootState) => state.filtro)
  const navigate = useNavigate()

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <Campo
            type="text"
            value={termo}
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
            placeholder="Procurar"
          />
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              status="pendentes"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              status="concluídas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              status="urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              status="importantes"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              status="normal"
            />
            <FiltroCard criterio="todas" status="todas" />
          </S.Filtros>
        </>
      ) : (
        <Button type="button" onClick={() => navigate('/')}>
          Voltar a lista de tarefas
        </Button>
      )}
    </S.Aside>
  )
}

export default BarraLateral
