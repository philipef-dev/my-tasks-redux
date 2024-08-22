import { useState } from 'react'
import * as S from './styles'

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefas = ({ titulo, prioridade, status, descricao }: Props) => {
  const [editarTarefa, setEditarTarefa] = useState(false)

  return (
    <S.Card>
      <S.Titulo>
        <input type="checkbox" /> {titulo}
      </S.Titulo>
      <S.Span>{prioridade}</S.Span>
      <S.Span>{status}</S.Span>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {editarTarefa ? (
          <>
            <S.Button>Salvar</S.Button>
            <S.Button onClick={() => setEditarTarefa(false)}>Cancelar</S.Button>
          </>
        ) : (
          <>
            <S.Button
              onClick={() => {
                setEditarTarefa(true)
              }}
            >
              Editar
            </S.Button>
            <S.Button>Remover</S.Button>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
