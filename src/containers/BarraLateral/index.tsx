import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <input type="text" placeholder="Buscar" />
    <S.Filtros>
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
