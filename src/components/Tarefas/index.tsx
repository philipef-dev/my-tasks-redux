import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import * as S from './styles'
import { Button, ButtonSave, Descricao } from '../../styles'

type Props = TarefaClass

const Tarefas = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editarTarefa, setEditarTarefa] = useState(false)

  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setDescricao(descricaoOriginal)
    setEditarTarefa(false)
  }

  function editandoTarefa() {
    dispatch(
      editar({
        descricao,
        id,
        status,
        prioridade,
        titulo
      })
    )
    setEditarTarefa(false)
  }

  return (
    <S.Card>
      <S.Titulo>
        <input type="checkbox" /> {titulo}
      </S.Titulo>
      <S.Tag $prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag $status={status}>{status}</S.Tag>
      <Descricao
        disabled={!editarTarefa}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {editarTarefa ? (
          <>
            <ButtonSave onClick={editandoTarefa}>Salvar</ButtonSave>
            <S.ButtonRed onClick={cancelarEdicao}>Cancelar</S.ButtonRed>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setEditarTarefa(true)
              }}
            >
              Editar
            </Button>
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
