import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Procurar" />
    <S.Filtros>
      <FiltroCard contador="3" status="pendentes" />
      <FiltroCard contador="4" status="concluídas" />
      <FiltroCard ativo contador="2" status="urgentes" />
      <FiltroCard contador="2" status="importantes" />
      <FiltroCard contador="3" status="normal" />
      <FiltroCard ativo contador="7" status="todas" />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
