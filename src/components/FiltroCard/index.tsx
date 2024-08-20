import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: string
  status: string
}

const FiltroCard = ({ ativo, contador, status }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{status}</S.Label>
  </S.Card>
)

export default FiltroCard
