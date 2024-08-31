import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootState } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

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
        <FiltroCard contador="3" status="pendentes" $ativo />
        <FiltroCard contador="4" status="concluídas" />
        <FiltroCard contador="2" status="urgentes" $ativo />
        <FiltroCard contador="2" status="importantes" />
        <FiltroCard contador="3" status="normal" />
        <FiltroCard contador="7" status="todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
