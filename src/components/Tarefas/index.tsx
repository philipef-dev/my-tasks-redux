import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/tarefa'
import TarefaClass from '../../models/Tarefa'
import * as S from './styles'

type Props = TarefaClass

const Tarefas = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.ButtonRed onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonRed>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
