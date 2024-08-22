import * as S from './styles'

const Tarefas = () => {
  return (
    <S.Card>
      <S.Titulo>
        <input type="checkbox" /> Nome da tarefa
      </S.Titulo>
      <S.Span>importante</S.Span>
      <S.Span>pendente</S.Span>
      <S.Descricao />
      <S.BarraAcoes>
        <S.Button>Editar</S.Button>
        <S.Button>Remover</S.Button>
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
