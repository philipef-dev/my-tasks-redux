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
      <S.Tag prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {editarTarefa ? (
          <>
            <S.ButtonSave>Salvar</S.ButtonSave>
            <S.ButtonRed onClick={() => setEditarTarefa(false)}>
              Cancelar
            </S.ButtonRed>
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
            <S.ButtonRed>Remover</S.ButtonRed>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
