import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Procurar" />
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

export default BarraLateral
